import os
import re

def main():
    print("========================================")
    print("      Bulk Keyword Replacer Tool        ")
    print("========================================\n")

    # 1. Prompt the user for the target and replacement words
    target_keyword = input("Enter the EXACT keyword you want to find: ")
    if not target_keyword.strip():
        print("Error: Keyword cannot be empty.")
        input("\nPress Enter to exit...")
        return

    replacement_word = input(f"Enter the new word to replace '{target_keyword}' with: ")

    # 2. Automatically set the target directory to wherever the script is located
    current_dir = os.getcwd()
    
    print(f"\n[INFO] Target Directory: {current_dir}")
    print("[INFO] This will scan this folder and ALL sub-folders.")
    
    # 3. The Skeptic's Check: Ask for final confirmation
    confirm = input(f"\nWARNING: Are you sure you want to replace '{target_keyword}' with '{replacement_word}'? (y/n): ")
    if confirm.lower() != 'y':
        print("\nOperation cancelled. No files were changed.")
        input("Press Enter to exit...")
        return

    print("\nProcessing...\n")

    # Define safe text file extensions (add or remove as needed for your specific projects)
    allowed_extensions = ('.txt', '.md', '.py', '.js', '.html', '.css', '.json', '.csv', '.java', '.cpp')
    
    # Compile the exact-word regex pattern
    pattern = re.compile(rf'\b{re.escape(target_keyword)}\b')
    files_modified = 0

    # 4. Traverse the directory tree
    for dirpath, dirnames, filenames in os.walk(current_dir):
        
        # Exclude common system, cache, and version control directories to prevent corruption
        dirnames[:] = [d for d in dirnames if d not in ['.git', '__pycache__', '.venv', 'node_modules', '.idea', 'build']]

        for filename in filenames:
            if filename.endswith(allowed_extensions):
                file_path = os.path.join(dirpath, filename)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as file:
                        file_data = file.read()

                    # If the keyword is found, replace it and rewrite the file
                    if pattern.search(file_data):
                        new_data = pattern.sub(replacement_word, file_data)
                        
                        with open(file_path, 'w', encoding='utf-8') as file:
                            file.write(new_data)
                            
                        print(f"Updated: {file_path}")
                        files_modified += 1

                except Exception as e:
                    # Silently skip unreadable files to keep the output clean, 
                    # but you could print(e) here if you need to debug.
                    pass

    print("\n========================================")
    print(f"Operation complete. Modified a total of {files_modified} file(s).")
    
    # 5. Prevent the terminal window from closing immediately after a double-click
    input("\nPress Enter to close this window...")

main()
    