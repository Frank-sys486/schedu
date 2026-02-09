import React, { useState } from 'react';
import { CurriculumParser } from '../utils/pdfparser';
import { DataNormalizer } from '../utils/dataNormalizer';
import type { RawPageText } from '../types/curriculum';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setRawText, setParsedCurriculum, resetCurriculum } from '../features/curriculum/curriculumSlice';

export const UploadCurriculum: React.FC = () => {
  const dispatch = useAppDispatch();
  const extractedText = useAppSelector((state) => state.curriculum.rawText);
  const parsedCurriculum = useAppSelector((state) => state.curriculum.parsedCurriculum);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError(null);
    // We don't clear redux state immediately to avoid flickering, or we could:
    // dispatch(setRawText([]));

    try {
      const parser = new CurriculumParser();
      const text = await parser.extractTextFromPDF(file);
      dispatch(setRawText(text));

      // Normalize the raw text into structured JSON
      const normalizer = new DataNormalizer();
      const structuredData = normalizer.normalize(text);
      dispatch(setParsedCurriculum(structuredData));
    } catch (err) {
      console.error(err);
      setError('Failed to parse PDF. Check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearData = () => {
    if (confirm('Are you sure you want to clear all uploaded data?')) {
      dispatch(resetCurriculum());
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Upload Curriculum PDF</h2>
            <p className="text-gray-600 mt-1">
              Select a MATATAG curriculum PDF file to extract its content.
            </p>
          </div>
          {(extractedText || parsedCurriculum) && (
            <button 
              onClick={handleClearData}
              className="text-sm text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1 rounded border border-red-200 transition-colors"
            >
              Clear Data
            </button>
          )}
        </div>
        
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        
        {isLoading && <p className="mt-4 text-blue-600 font-medium animate-pulse">Processing PDF...</p>}
        {error && <p className="mt-4 text-red-600 bg-red-50 p-3 rounded">{error}</p>}
      </div>

      {parsedCurriculum && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Structured Data Preview (JSON)</h3>
          <p className="text-sm text-gray-500 mb-2">This is the data the Scheduler will use:</p>
          <div className="bg-gray-900 text-green-400 p-4 rounded text-xs font-mono overflow-auto max-h-96 whitespace-pre">
            {JSON.stringify(parsedCurriculum, null, 2)}
          </div>
        </div>
      )}

      {extractedText && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Extracted Content Preview</h3>
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {extractedText.map((page) => (
              <div key={page.pageNumber} className="border-b pb-4 last:border-0">
                <h4 className="font-semibold text-gray-700 mb-2 sticky top-0 bg-white py-2">Page {page.pageNumber}</h4>
                <div className="bg-gray-50 p-4 rounded text-xs font-mono text-gray-600 overflow-x-auto whitespace-pre-wrap">
                  {page.text.join('\n')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};