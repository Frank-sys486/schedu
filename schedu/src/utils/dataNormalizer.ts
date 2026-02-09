import type { Curriculum, LearningCompetency, RawPageText } from '../types/curriculum';

export class DataNormalizer {
  /**
   * Converts raw PDF text lines into a structured Curriculum object.
   */
  normalize(rawPages: RawPageText[]): Curriculum {
    const competencies: LearningCompetency[] = [];
    
    // Regex to find IDs like "EN2PA-I-1"
    // [A-Z0-9]{2,6} = Subject/Grade (e.g., EN2)
    // [A-Z]+        = Domain (e.g., PA)
    // [IVX]+        = Quarter (Roman Numerals)
    // \d+           = Competency Number
    // UPDATED: Made the domain part optional to handle "EN2PA - I - 1" (combined) vs "EN2 - PA - I - 1" (separated)
    // Also added \s* to allow spaces around hyphens
    const idRegex = /([A-Z0-9]+\s*(?:-\s*[A-Z]+\s*)?-\s*[IVX]+\s*-\s*\d+)/;
    
    // Regex for time allocation (e.g., "1 week", "3 days")
    const timeRegex = /(\d+\s+(week|day)s?)/i;

    rawPages.forEach(page => {
      // Use a standard for loop so we can look ahead at the next lines
      for (let i = 0; i < page.text.length; i++) {
        const line = page.text[i];

        // 1. Check if this line contains a Competency ID
        const idMatch = line.match(idRegex);
        
        if (idMatch) {
          const id = idMatch[0];
          
          // 1. Find Time Allocation (Look in current line + next 2 lines)
          let timeAllocation = '1 week'; // Default
          let foundTimeStr = '';

          for (let j = 0; j <= 2; j++) {
            if (i + j >= page.text.length) break;
            const checkLine = page.text[i + j];
            
            // Stop if we hit a NEW ID (skipping the current line i)
            if (j > 0 && checkLine.match(idRegex)) break;

            const tMatch = checkLine.match(timeRegex);
            if (tMatch) {
              timeAllocation = tMatch[0];
              foundTimeStr = tMatch[0];
              break;
            }
          }
          
          // 2. Find Description
          // Start with text on the same line as ID
          let description = line.replace(id, '').trim();

          // If empty, check the next line
          if (!description && i + 1 < page.text.length) {
             const nextLine = page.text[i+1].trim();
             // Only use next line if it's NOT another ID and NOT a page number
             if (nextLine.length > 0 && !nextLine.match(idRegex) && !/^\d+$/.test(nextLine)) {
                 description = nextLine;
             }
          }

          // 3. Clean up Description
          // If the description contains the time string (e.g. "Topic 1 week"), remove it
          if (foundTimeStr) {
             description = description.replace(foundTimeStr, '').trim();
          }
          
          // 4. Add to list
          competencies.push({
            id: id,
            description: description,
            timeAllocation: timeAllocation,
            quarter: this.parseQuarter(id)
          });
        }
      }
    });

    return {
      metadata: {
        subject: "Detected Subject",
        version: "Parsed from PDF"
      },
      grades: [{
        level: 2, // Defaulting to Grade 2 for this phase
        competencies: competencies
      }]
    };
  }

  private parseQuarter(id: string): number {
    // Extract Roman numeral part: EN2PA-III-1 -> III -> 3
    // UPDATED: Use regex to handle spaces around hyphens (e.g., " - I - ")
    if (/[- ]IV[- ]/.test(id)) return 4;
    if (/[- ]III[- ]/.test(id)) return 3;
    if (/[- ]II[- ]/.test(id)) return 2;
    if (/[- ]I[- ]/.test(id)) return 1;
    return 1;
  }
}