// This file defines the "Shape" of our data.
// It acts as a contract between the PDF Parser and the rest of the app.

export interface LearningCompetency {
  id: string;           // e.g., "EN2PA-I-1"
  description: string;  // e.g., "Recognize rhymes in chants..."
  timeAllocation: string; // e.g., "1 week"
  quarter: number;      // 1, 2, 3, or 4
}

export interface GradeLevel {
  level: number;        // e.g., 2
  competencies: LearningCompetency[];
}

export interface Curriculum {
  metadata: {
    subject: string;    // e.g., "English"
    version: string;    // e.g., "August 2024"
  };
  grades: GradeLevel[];
}

// This helper type represents the raw text extracted from a PDF page
// We use this before we process it into the structured Curriculum above.
export interface RawPageText {
  pageNumber: number;
  text: string[]; // Array of lines or text items
}