import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scheduler } from '../utils/scheduler';
import type { SchoolSettings } from '../types/settings';
import type { GeneratedSchedule } from '../types/schedule';
import { useAppSelector } from '../store/hooks';

export const ScheduleView: React.FC = () => {
  const rawText = useAppSelector((state) => state.curriculum.rawText);
  const parsedCurriculum = useAppSelector((state) => state.curriculum.parsedCurriculum);
  const [schedule, setSchedule] = useState<GeneratedSchedule | null>(null);

  useEffect(() => {
    if (!parsedCurriculum) return;

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
      // Use the real parsed data instead of the mock data
      const result = scheduler.generateSchedule(parsedCurriculum, 2);
      setSchedule(result);
    } catch (error) {
      console.error("Scheduling failed:", error);
    }
  }, [parsedCurriculum]);

  if (!parsedCurriculum) {
    return (
      <div className="p-12 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">No Curriculum Data Found</h3>
        <p className="text-gray-500 mb-6">Please upload a PDF curriculum file to generate a schedule.</p>
        <Link to="/upload" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Go to Upload
        </Link>
      </div>
    );
  }

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

      {/* Source Data Section */}
      {rawText && (
        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Source Data (From PDF Upload)</h3>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {rawText.map((page) => (
              <div key={page.pageNumber} className="text-xs text-gray-600 font-mono border-b border-gray-200 pb-2">
                <strong className="block text-gray-800 mb-1">Page {page.pageNumber}</strong>
                {page.text.slice(0, 5).join(' ')}... 
                <span className="italic text-gray-400">(Preview of {page.text.length} lines)</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};