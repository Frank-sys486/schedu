import type { LearningCompetency } from './curriculum';

export interface ScheduledLesson {
  id: string;
  date: string; // "YYYY-MM-DD"
  competency: LearningCompetency;
  dayOfWeek: string; // "Monday", "Tuesday", etc.
}

export interface GeneratedSchedule {
  lessons: ScheduledLesson[];
  metadata: {
    totalDays: number;
    startDate: string;
    endDate: string;
  }
}