git --version
git --version
git config --global user.name "merline"
git config --global user.email "merlineshinya13007@gmail.com"
git config --global --list
git config --global core.editor "C:\Program Files\Notepad++"
git config --global core.editor
git commit
git commit
cd C:\Program Files\Notepad++
cd C:\GitDemo
git init
echo "Hello from me!" > welcome.txt
git add welcome.txt
git ccommit
git commit
git config --global core.editor "C:\Program Files\Notepad++\notepad++.exe"
git config --global core.editor
git commit
git add welcome.txt
cd c:\GitDemo
git init
git add welcome.txt
git commit
cd C:\GitDemo
git init
git status
git add welcome.txt
git commit -m "Add welcome.txt"
git remote add origin https://gitlab.com/merlineshinya13007-group/gitdemo
git pull origin main
cd C:\GitDemo
git add welcome.txt
git commit -m "Add welcome.txt file"
git push -u origin main
git pull origin main --allow-unrelated-histories
cd C:\GitDemo
git commit-m "Merge remote-tracking branch 'origin/main' into main"
git push -u origin main
git commit -m "Merge remote-tracking branch 'origin/main' into main"
git push -u origin main
mkdir GitLabTask
Cd GitLabTask
git init
touch test.log
mkdir log
touch log/error.log
git status --short
nano.gitignore
notepad  .gitignore
cd C:\Users\merli\GitLabTask
cd C:UsersmerliGitLabTask
cd C:\Users\merli\GitLabTask
cd /c/Users/merli/GitLabTask
touch test.log
mkdir log
touch log/error.log
notepad  .gitignore
git status --ignored --short
git add  .gitignore
git commit -m "Add .gitignore to ignore .log files and log folder"
git push
git remote -v
git remote add origin https://gitlab.com/merlineshinya13007-group/gitdemo
git push -u origin main
git fetch origin
git pull origin main
git push -u origin main
git push -u origin main --force
git pull origin main --no-rebase
git add.
git add .
git pull origin main --no-rebase
git pull origin main --allow-unrelated-histories
Merge branch 'main' of https://gitlab.com/merlineshinya13007-group/gitdemo
git add.
git commit
git push -u origin main
git status
git commit
git config  --global core.editor "notepad"
git commit
git oa
git push -u origin main
git checkout -b GitNewBranch
git fetch --all
echo "Hello from GitNewBranch" > hello.txt
mkdir myfolder
echo "info in folder" > myfolder/info.txt
git add hello.txt myfolder/info.txt
git config core.autocrlf true
git add hello.txt myfolder/info.txt
git status
git commit -m "Add sample files on GitNewBranch"
git status
git branch
git checkout main
git diff main..GitNewBranch
git merge GitNewBranch
git log --oneline --graph --decorate
git branch -d GitNewBranch
git push origin --delete GitNewBranch
git status
cd /c/Users/merli/gitdemo
cd /c/GitDemo
git status
git checkout master
mkdir git-lab
cd git-lab
git init -b master
git status
git checkout -b GitWork
git branch
cat > hello.xml <<'EOF'
<greeting>Hello from GitWork - v1</greeting>
EOF

git add hello.xml
git status
cat > hello.xml <<'EOF'
<greeting>Hello from GitWork - v2</greeting>
<note>Updated content on GitWork branch</note>
EOF

git status
git diff
git diff  --staged
git add hello.xml
git commit -m "Add hello.xml on GitWork (updated content)"
git checkout master
git rev-parse --abbrev-ref HEAD
cat > hello.xml <<'EOF'
<greeting>Hello from master branch - different content</greeting>
<note>Content specific to master</note>
EOF

git status
git add hello.xml
git commit-m
git commit -m "Add hello.xml on master with different content"
git log --oneline --graph --decorate --all
git diff master..GitWork
git difftool master..GitWork
git checkout master
git merge GitWork
git status
sed -n '1,200p'hello.xml
git config --global merge.tool p4merge
git config --global mergetool.p4merge.cmd '"C:/Program Files/Perforce/p4merge.exe" "$BASE" "&LOCAL" "&REMOTE" "&MERGED"'
git mergetool
git add hello.xml
git commit -m "Merge GitWork into master - resolved conflict in hello.xml"
git status
echo "*.orig" >> .gitignore
echo "*~" >>. gitignore
echo "*.bak" >> .gitignore
git add .gitignore
git commit -m "Add backup patterns to .gitignore"
git branch -a
git branch -d GitWork
git log --oneline --graph --decorate 
git checkout master
git status
git branch -a
git pull origin master
git pull origin main
git checkout Git-T03-HOL_002
git fetch origin
git branch -a
git checkout -b Git-T03-HOL_002
git add.
git commit -m "Your commit message"
git push -u origin Git-T03-HOL_002
