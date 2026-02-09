import { addDays, format, isWeekend, parseISO, isSameDay, differenceInCalendarDays } from 'date-fns';
import type { Curriculum, LearningCompetency } from '../types/curriculum';
import type { SchoolSettings } from '../types/settings';
import type { GeneratedSchedule, ScheduledLesson } from '../types/schedule';

export class Scheduler {
  private settings: SchoolSettings;

  constructor(settings: SchoolSettings) {
    this.settings = settings;
  }

  /**
   * Phase 3 Algorithm: Greedy + Local Search Optimization
   * 1. Generates an initial greedy schedule.
   * 2. Uses Hill Climbing to swap competencies and minimize weekend splits.
   */
  generateSchedule(curriculum: Curriculum, gradeLevel: number): GeneratedSchedule {
    const gradeData = curriculum.grades.find(g => g.level === gradeLevel);
    if (!gradeData) {
      throw new Error(`Grade ${gradeLevel} not found in curriculum`);
    }
    // 1. Initial Greedy Assignment
    let bestOrder = [...gradeData.competencies];
    let bestSchedule = this.assignDates(bestOrder);
    let bestCost = this.calculateCost(bestSchedule);

    console.log(`Initial Schedule Cost: ${bestCost}`);

    // 2. Local Search Optimization (Hill Climbing)
    // Try to improve the schedule by swapping adjacent competencies
    const maxIterations = 100; 
    
    for (let i = 0; i < maxIterations; i++) {
      // Create a candidate order by swapping two random adjacent items
      const candidateOrder = [...bestOrder];
      if (candidateOrder.length < 2) break;

      const idx = Math.floor(Math.random() * (candidateOrder.length - 1));
      
      // Swap
      [candidateOrder[idx], candidateOrder[idx+1]] = [candidateOrder[idx+1], candidateOrder[idx]];

      // Evaluate
      const candidateSchedule = this.assignDates(candidateOrder);
      const candidateCost = this.calculateCost(candidateSchedule);

      // If better (lower cost), keep it
      if (candidateCost < bestCost) {
        console.log(`Found better schedule! Cost: ${candidateCost} (Iter: ${i})`);
        bestOrder = candidateOrder;
        bestSchedule = candidateSchedule;
        bestCost = candidateCost;
      }
    }

    return bestSchedule;
  }

  private assignDates(competencies: LearningCompetency[]): GeneratedSchedule {

    const lessons: ScheduledLesson[] = [];
    let currentDate = parseISO(this.settings.startDate);
    
    competencies.forEach(competency => {
      const durationDays = this.parseDuration(competency.timeAllocation);
      
      // For each day of the competency's duration...
      for (let i = 0; i < durationDays; i++) {
        // 1. Find the next valid school day (skip weekends/holidays)
        currentDate = this.findNextSchoolDay(currentDate);

        // 2. Assign the lesson
        lessons.push({
          id: `${competency.id}-day${i+1}`,
          date: format(currentDate, 'yyyy-MM-dd'),
          dayOfWeek: format(currentDate, 'EEEE'),
          competency: competency
        });

        // 3. Move to next day for the next iteration
        currentDate = addDays(currentDate, 1);
      }
    });

    return {
      lessons,
      metadata: {
        totalDays: lessons.length,
        startDate: this.settings.startDate,
        endDate: lessons.length > 0 ? lessons[lessons.length - 1].date : this.settings.startDate
      }
    };
  }

  /**
   * Cost Function: Calculates how "bad" a schedule is.
   * Cost = Total number of non-school days (weekends/holidays) that interrupt a lesson block.
   * We want to MINIMIZE this.
   */
  private calculateCost(schedule: GeneratedSchedule): number {
    let cost = 0;
    const lessonsByCompetency = new Map<string, Date[]>();

    // Group dates by competency
    schedule.lessons.forEach(lesson => {
      const cid = lesson.competency.id;
      if (!lessonsByCompetency.has(cid)) {
        lessonsByCompetency.set(cid, []);
      }
      lessonsByCompetency.get(cid)?.push(parseISO(lesson.date));
    });

    lessonsByCompetency.forEach((dates) => {
      if (dates.length > 1) {
        const start = dates[0];
        const end = dates[dates.length - 1];
        const actualSpan = differenceInCalendarDays(end, start) + 1;
        const schoolDays = dates.length;
        
        // If a 5-day lesson takes 7 days (Mon-Sun), cost is 2.
        // If a 5-day lesson takes 5 days (Mon-Fri), cost is 0.
        cost += (actualSpan - schoolDays);
      }
    });

    return cost;
  }

  /**
   * Helper: Skips weekends and holidays
   */
  private findNextSchoolDay(date: Date): Date {
    let checkDate = date;
    while (true) {
      const isSatSun = isWeekend(checkDate);
      const isHoliday = this.settings.holidays.some(h => isSameDay(parseISO(h), checkDate));

      if (!isSatSun && !isHoliday) {
        return checkDate;
      }
      checkDate = addDays(checkDate, 1);
    }
  }

  /**
   * Helper: Converts "1 week" or "3 days" into number of days
   */
  private parseDuration(durationStr: string): number {
    const lower = durationStr.toLowerCase();
    if (lower.includes('week')) {
      const weeks = parseInt(lower) || 1;
      return weeks * 5; // Assuming 5 school days per week
    }
    if (lower.includes('day')) {
      return parseInt(lower) || 1;
    }
    return 1; // Default fallback
  }
}