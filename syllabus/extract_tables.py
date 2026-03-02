#!/usr/bin/env python3
import pdfplumber
import os
import re

def extract_tables_from_pdf(pdf_path):
    """Extract tables with 3+ columns from PDF pages 1-30"""
    results = []
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page_num in range(min(30, len(pdf.pages))):
                page = pdf.pages[page_num]
                tables = page.find_tables()

                for table in tables:
                    # Check if table has 3 or more columns
                    if len(table.cells[0]) >= 3:
                        # Extract text from table
                        table_data = []
                        for row in table.extract():
                            clean_row = []
                            for cell in row:
                                if cell and isinstance(cell, str):
                                    clean_cell = cell.strip()
                                    if clean_cell:
                                        clean_row.append(clean_cell)
                            if clean_row:
                                table_data.append(clean_row)

                        if table_data and len(table_data) >= 2:  # At least header + 1 row
                            results.append({
                                'page': page_num + 1,
                                'table_data': table_data[:4],  # First 4 rows (header + 3 data rows)
                                'path': pdf_path
                            })
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")

    return results

def find_time_related_headers(headers):
    """Check if headers contain time-related terms in any language"""
    time_terms = [
        'time', 'duration', 'week', 'day', 'hour', 'minute',
        'oras', 'araw', 'linggo', 'minuto', 'oras ng pagtuturo',
        'no. of days', 'number of days', 'no. of hours', 'number of hours'
    ]

    for header in headers:
        header_lower = header.lower()
        for term in time_terms:
            if term in header_lower:
                return True
    return False

def main():
    pdf_files = [f for f in os.listdir('.') if f.endswith('.pdf')]

    print("=== UNIVERSAL DATA EXTRACTION ===\n")
    print(f"Found {len(pdf_files)} PDF files to process\n")

    all_results = []

    for pdf_file in pdf_files:
        print(f"Processing: {pdf_file}")
        tables = extract_tables_from_pdf(pdf_file)

        if tables:
            print(f"  Found {len(tables)} tables with 3+ columns")
            for i, table_info in enumerate(tables, 1):
                table_data = table_info['table_data']
                headers = table_data[0]

                print(f"  Table {i} (Page {table_info['page']}):")
                # Clean headers by replacing special characters
                clean_headers = []
                for header in headers:
                    if header:
                        header = str(header)
                        header = header.replace('\u25cf', '*')  # Replace bullet points
                        header = header.replace('\u2022', '*')  # Replace bullet points
                        header = header.replace('\u2013', '-')  # Replace en dash
                        header = header.replace('\u2014', '--')  # Replace em dash
                        header = header.replace('\u2713', 'v')  # Replace checkmarks
                        header = header.replace('\u2192', '->')  # Replace arrows
                        clean_headers.append(header)
                print(f"    Headers: {repr(clean_headers)}")

                # Check for time-related headers
                has_time_terms = find_time_related_headers(headers)
                print(f"    Contains time-related headers: {has_time_terms}")

                # Print first 3 data rows
                print("    First 3 rows:")
                for row in table_data[1:4]:
                    # Replace special characters with ASCII equivalents
                    clean_row = []
                    for cell in row:
                        if cell:
                            cell = str(cell)
                            cell = cell.replace('\u25cf', '*')  # Replace bullet points
                            cell = cell.replace('\u2022', '*')  # Replace bullet points
                            cell = cell.replace('\u2013', '-')  # Replace en dash
                            cell = cell.replace('\u2014', '--')  # Replace em dash
                            cell = cell.replace('\u2713', 'v')  # Replace checkmarks
                            cell = cell.replace('\u2192', '->')  # Replace arrows
                            clean_row.append(cell)
                    print("      " + " ".join(clean_row))
                print()

                all_results.append({
                    'file': pdf_file,
                    'page': table_info['page'],
                    'headers': headers,
                    'rows': table_data[1:4],
                    'has_time_terms': has_time_terms
                })
        else:
            print(f"  No tables with 3+ columns found")
        print()

    print("=== SUMMARY ===")
    print(f"Total files processed: {len(pdf_files)}")
    print(f"Files with extractable tables: {len([r for r in all_results if r['rows']])}")

    return all_results

if __name__ == "__main__":
    results = main()
    print("\n=== EXTRACTION COMPLETE ===")