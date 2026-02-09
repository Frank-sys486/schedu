import React, { useState, useEffect } from 'react';
import { Scheduler } from '../utils/scheduler';
import { MOCK_CURRICULUM } from '../utils/mockData';
import { SchoolSettings } from '../types/settings';
import { GeneratedSchedule } from '../types/schedule';

export const ScheduleView: React.FC = () => {
  const [schedule, setSchedule] = useState<GeneratedSchedule | null>(null);

  useEffect(() => {
    // 1. Define Test Settings (Simulating user input)
    // We start on a Thursday to test weekend skipping immediately
    const settings: SchoolSettings = {
      startDate: '2024-08-29', 
      daysPerWeek: 5,
      holidays: [
        '2024-08-30', // Friday (We expect the scheduler to skip this!)
      ]
    };

    // 2. Initialize Scheduler with these settings
    const scheduler = new Scheduler(settings);

    // 3. Generate the schedule for Grade 2
    try {
      console.log("Generating schedule...");
      const result = scheduler.generateSchedule(MOCK_CURRICULUM, 2);
      setSchedule(result);
    } catch (error) {
      console.error("Scheduling failed:", error);
    }
  }, []);

  if (!schedule) return <div className="p-8 text-center">Generating schedule...</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Generated Schedule (Preview)</h2>
        <div className="text-sm text-gray-500">
          Total Days: <span className="font-bold text-blue-600">{schedule.metadata.totalDays}</span>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-md border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {schedule.lessons.map((lesson) => (
            <li key={lesson.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      lesson.dayOfWeek === 'Monday' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {lesson.dayOfWeek}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">{lesson.date}</h3>
                  </div>
                  <p className="text-gray-600 mt-1">{lesson.competency.description}</p>
                </div>
                <div className="text-sm text-gray-500 flex flex-col items-end justify-center">
                  <span>ID: {lesson.competency.id}</span>
                  <span>Allocated: {lesson.competency.timeAllocation}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};