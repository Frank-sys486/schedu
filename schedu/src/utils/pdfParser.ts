import type { RawPageText } from '../types/curriculum';

export class CurriculumParser {
  /**
   * Main entry point: Takes a File object (from an <input type="file">)
   * and returns the raw text content organized by page.
   */
  async extractTextFromPDF(file: File): Promise<RawPageText[]> {
    // 1. Dynamically import PDF.js only when needed (Lazy Loading)
    // This prevents the app from crashing on startup if the library has issues
    const pdfjs = await import('pdfjs-dist');
    const workerModule = await import('pdfjs-dist/build/pdf.worker.mjs?url');
    
    // Configure worker
    pdfjs.GlobalWorkerOptions.workerSrc = workerModule.default;

    // 2. Read the file as an ArrayBuffer (binary data)
    const arrayBuffer = await file.arrayBuffer();

    // 3. Load the PDF document using PDF.js
    const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
    const pdfDocument = await loadingTask.promise;

    const extractedPages: RawPageText[] = [];

    // 4. Iterate through every page
    for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum);
      
      // 5. Extract text content
      const textContent = await page.getTextContent();
      
      // 6. Process text items
      // PDF.js returns "items" which are individual strings positioned on the page.
      // We map them to a simple array of strings.
      // @ts-ignore - The type definition for textContent items can be tricky, casting to any for simplicity in Phase 2
      const lines = textContent.items.map((item: any) => item.str).filter((line: string) => line.trim().length > 0);

      extractedPages.push({
        pageNumber: pageNum,
        text: lines
      });
    }

    return extractedPages;
  }

  /**
   * FUTURE METHOD (Phase 2b):
   * This will take the raw text from extractTextFromPDF and convert it
   * into the structured Curriculum interface we defined in types/curriculum.ts
   */
  // parseRawText(rawPages: RawPageText[]): Curriculum { ... }
}
