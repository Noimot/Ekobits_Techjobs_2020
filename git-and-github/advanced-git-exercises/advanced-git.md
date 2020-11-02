# Advanced Git Exercises

### Part I

#### Answer the following questions:

1. What is the difference between git reset and git revert. When would you use one over the other?

    ans: git revert command creates a new commit that undoes the changes from a previous commit. this command prevents gits from losing history unlike git reset which removes the commit from the commit history and therby alter the history of commits. 

    i would use git revert over git reset when i want to make a change to a commit but don't want the commit to be removed. 

2. What is the difference between git merge and git rebase. When would you use one over the other?

    ans: Git merge integrates the contents of a source branch with a target branch, while preserving the ancestry of each commit history, whereas Git rebase incorporates all the new commits in the master branch by rewriting the history by creating new commits for each commit in the source branch.

    i would prefer to use git rebase over git merge when working on a personal project, inorder to main a clean commit history.

3. What is the difference between git stash pop and git stash apply. When would you use one over the other?

    ans: git stash apply move the latest stashed change back into the working directory, but keep it on the list while git stash pop, move the latest stashed change back into the working directory and remove it from the list.

    i would use the git stash apply over the git stash pop, when i don't to go back to check the list for this same file.

4. What kinds of things can you do in interactive mode when rebasing?

    ans: We can keep the commit, edit the commit message, edit the commit (this will pause the rebasing and we can make changes to that previous commit), squash or fixup the commit to turn a bunch of commits into one, and even remove the commit if we want.


#### part 2

- Add and commit some changes and submit a PR.

    ans: https://github.com/Inf-Paces/learn_forking/compare/master...Noimot:master


    ans: https://github.com/Noimot/learn_forking
