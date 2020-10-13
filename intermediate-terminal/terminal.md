# Intermediate Terminal exercise

### part 1

##### question 1 - 3 (answer in the attached photo)

4. What is the $PATH variable? 
    answer: $PATH variable is an environment variable that contains the location to an executable file

5. Why would you want to create an environment variable?
    answer: environment variable should be created because it makes it easy to track the path to my directory

6. How do you permanently save environment variables?
    answer: 
    - first, open the configuration file for the shell, either .zshrc or .bash_profile
    - next, add the directory in the path variable
    - save the file
    - quit out of all terminal windows
    - then reopen terminal

7. What is a process?
    answer: A process is the program on the compuer that is being run.

8. How do you list all processes running on your machine?
    answer: use the command PS aux to list all processes running on your machine

9. What is a PID?
    answer: It is a unique process ID. A set of number that point to the process being run

10. How do you terminate a process?
    answer: To terminate a process, type kill and the PID then hit enter key

11. What is the difference between kill and kill -9?
    answer: The difference between kill and kill -9 is that, by default, the signal generate a TERM signal, which can be ignored if the process is yet to reach a safe state and this process may not terminate by using just kill command. but the kill -9 generates a kill signal that can not be ignored  by the process, this immediately terminate the process irrespective of its state.

12. What grep flag allows for case insensitive search?
    answer: -i

13. What grep flag allows for a certain number of lines before the match?
    answer: -B

14. What grep flag allows for a certain number of lines around the match?
    answer: -C

15. What grep flag allows for a certain number of lines after the match?
    answer: -A

16. What grep flag allows for full word search?
    answer: -w

17. What grep flag shows you the line number of a match?
    answer: -c

## PArt 2

#### Write the following terminal commands to do the following (assume that instructors.txt is an imaginary file):

1. Find all files inside the Desktop folder that have a name of "learn."
    answer:
    - first cd inside the Desktop folder
    - then type find learn

2. Find all files inside the Desktop folder that start with a "P."
    answer: find . -name ["P*"]

3. Find all files inside the Desktop folder that end with .txt.
    answer: find . -name "*.???"

4. Find all files inside the Desktop/views folder that have the name data somewhere in their filename.
    answer: find . -name "*data*"

5. Inside of the instructors.txt file, output the number of times the word "Elie" appears.
    answer: grep -c "Elie" instructors.txt

6. Inside of the instructors.txt file, list all matches for any full word that starts with a capital "P."
    answer: grep -w "P" instructors.txt

7. Inside of the instructors.txt file, list all the line numbers for any full word that starts with a "z" (it should match regardless of upper or lower case).
    answer: grep -nic "z" instructors.txt