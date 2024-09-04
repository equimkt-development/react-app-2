# Read the original CSV and write the first 50,000 rows to the same file
with open('test-data-large.csv', 'r') as infile:
    lines = infile.readlines()  # Read all lines at once

with open('test-data-large.csv', 'w') as outfile:  # Overwrite the original file
    for i, line in enumerate(lines):
        if i < 10000:
            outfile.write(line)
        else:
            break