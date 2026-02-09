import type { Curriculum } from '../types/curriculum';

export const MOCK_CURRICULUM: Curriculum = {
  metadata: {
    subject: "English",
    version: "MATATAG-2024-Draft"
  },
  grades: [
    {
      level: 2,
      competencies: [
        {
          id: "EN2PA-I-1",
          description: "Recognize rhymes in chants, poems, and stories heard",
          timeAllocation: "1 week",
          quarter: 1
        },
        {
          id: "EN2PWS-I-1",
          description: "Identify Grade 2 level-appropriate sight words",
          timeAllocation: "2 weeks",
          quarter: 1
        },
        {
          id: "EN2LC-I-1",
          description: "Listen to a variety of media including books, audiotapes videos and other age-appropriate publications",
          timeAllocation: "3 days",
          quarter: 1
        }
      ]
    }
  ]
};