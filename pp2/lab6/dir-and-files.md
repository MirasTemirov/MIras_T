Listing directories, files and all directories, files in a specified path:

import os

path = "/path/to/folder"
directories = []
files = []
all_items = []

for item in os.listdir(path):
    item_path = os.path.join(path, item)
    if os.path.isdir(item_path):
        directories.append(item)
        all_items.append(item)
    elif os.path.isfile(item_path):
        files.append(item)
        all_items.append(item)

print("Directories:", directories)
print("Files:", files)
print("All items:", all_items)


Checking for access to a specified path:
import os

path = "/path/to/file"

if os.path.exists(path):
    if os.access(path, os.R_OK):
        print("Readable")
    else:
        print("Not readable")
    if os.access(path, os.W_OK):
        print("Writable")
    else:
        print("Not writable")
    if os.access(path, os.X_OK):
        print("Executable")
    else:
        print("Not executable")
else:
    print("Path does not exist")


Checking whether a given path exists or not and finding the filename and directory portion:

python
Copy code
import os

path = "/path/to/file"

if os.path.exists(path):
    filename = os.path.basename(path)
    directory = os.path.dirname(path)
    print("Filename:", filename)
    print("Directory:", directory)
else:
    print("Path does not exist")
    
    
Counting the number of lines in a text file:

python
Copy code
file_path = "/path/to/file"

with open(file_path, 'r') as f:
    lines = f.readlines()
    num_lines = len(lines)
    print("Number of lines:", num_lines)
    
Writing a list to a file:

python
Copy code
file_path = "/path/to/file"
list_to_write = ["item1", "item2", "item3"]

with open(file_path, 'w') as f:
    for item in list_to_write:
        f.write(item + "\n")
        
        
        
        
Generating 26 text files named A.txt, B.txt, and so on up to Z.txt:

python
Copy code
import string

for letter in string.ascii_uppercase:
    file_path = letter + ".txt"
    with open(file_path, 'w') as f:
        f.write("This is file " + letter)
        
        
        
Copying the contents of a file to another file:

python
Copy code
source_path = "/path/to/source/file"
destination_path = "/path/to/destination/file"

with open(source_path, 'r') as f1, open(destination_path, 'w') as f2:
    for line in f1:
        f2.write(line)
        
        
        
        
Deleting a file by specified path:

python
Copy code
import os

file_path = "/path/to/file"

if os.path.exists(file_path):
    if os.access(file_path, os.W_OK):
        os.remove(file_path)
        print("File deleted")
    else:
        print("Not writable, cannot delete")
else:
    print("Path does not exist")
