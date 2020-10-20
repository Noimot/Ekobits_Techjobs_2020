# Branching and Merging Exercises

### part 1

#### Answer the following questions:

1. What does git clean do?

    ans: git clean is use to delete untracked files from working directory

2. What do the -d and -f flags for git clean do?

    ans": the -d flag in git clean Remove untracked directories in addition to untracked files. If an untracked directory is managed by a different Git repository, it is not removed by default. and If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f flag.

3. What git command creates a branch?

    ans: git branch NAME_OF_BRANCH

4. What is the difference between a fast-forward and recursive merge?

    ans: In a fast forward merge, the git can easily tell when the commits happened and then "put" one set of commits on top of another chronologically. while in a recursive merge, git uses an algoinf-paces to merge branches, and this is because git can not easily determine what order the commits happened.

5. What git command changes to another branch?

    ans: git checkout NAME_OF_BRANCH

6. How do you remove modified or deleted files from the working directory?

    ans: This is done by using the git ls-files command with a --deleted -z parameter. This is piped to a git m command using the filename and full path into the git rm command.

7. What git command deletes a branch?

    ans: git branch -D NAME_OF_BRANCH

8. What does the git diff command do?

    ans: with git diff command, you can compare the history of your code at two different points in time. by specifying the commit-SHA along with the git diff command, you can see the difference between your code now to your code at that SHA.

9. How do you remove files from the staging area?

    ans: git rm --cached [name of file]

10. How do merge conflicts happen?

    ans: merge conflicts happens when you try to merge a file after committing changes to that same file on two different branches. 