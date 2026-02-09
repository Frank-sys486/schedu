import pdfplumber
import re
import os

def extract_learning_competencies(pdf_path):
    matches = []
    with pdfplumber.open(pdf_path) as pdf:
        for page_num in range(len(pdf.pages)):
            text = pdf.pages[page_num].extract_text()
            if text and re.search(r'quarter', text, re.IGNORECASE) and re.search(r'learning competency', text, re.IGNORECASE):
                print(f'\n--- MATCH FOUND AT PAGE {page_num + 1} ---')
                # Extract current page and next 2 pages
                for i in range(page_num, min(page_num + 3, len(pdf.pages))):
                    page_text = pdf.pages[i].extract_text()
                    if page_text:
                        print(page_text)
                        print('\n' + '='*50 + '\n')
                matches.append(page_num)
                if len(matches) >= 3:
                    break
    return matches

print('Starting search for Learning Competency tables...')
pdf_files = [f for f in os.listdir('.') if f.endswith('.pdf')]

for pdf_file in pdf_files:
    print(f'\n{"="*50}')
    print(f'Processing {pdf_file}...')
    print(f'{"="*50}')
    extract_learning_competencies(pdf_file)
    print(f'\n{"="*50} END OF {pdf_file} {"="*50}\n')