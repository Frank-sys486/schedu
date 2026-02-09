export interface SchoolSettings {
  startDate: string; // "YYYY-MM-DD"
  daysPerWeek: number; // usually 5
  holidays: string[]; // Array of "YYYY-MM-DD"
}