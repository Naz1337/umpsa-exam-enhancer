import os
import zipfile

# Specify the files and folder to include in the zip
files_to_zip = [
    "content-script.js",
    "bundle.js",
    "manifest.json"
]
folders_to_zip = [
    "icons"
]

# Name of the output zip file
output_zip = "umpsa-exam-enhancer.zip"
# Name of the folder inside the zip file
folder_in_zip = "umpsa-exam-enhancer"

# Check if the zip file already exists and delete it
if os.path.exists(output_zip):
    print(f"File {output_zip} already exists. Deleting it...")
    os.remove(output_zip)

# Create the zip file
with zipfile.ZipFile(output_zip, "w", zipfile.ZIP_DEFLATED) as zipf:
    # Add files to the zip
    for file in files_to_zip:
        if os.path.exists(file):
            zipf.write(file, arcname=f"{folder_in_zip}/{file}")
        else:
            print(f"File not found: {file}")
    
    # Add folders to the zip
    for folder in folders_to_zip:
        if os.path.exists(folder):
            for root, _, files in os.walk(folder):
                for file in files:
                    file_path = os.path.join(root, file)
                    # Preserve the folder structure inside the main folder
                    relative_path = os.path.relpath(file_path, start=folder)
                    zipf.write(file_path, arcname=f"{folder_in_zip}/{folder}/{relative_path}")
        else:
            print(f"Folder not found: {folder}")

print(f"Created {output_zip} successfully!")
