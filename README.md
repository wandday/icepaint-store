live-demo of the landing-page: https://ice-paint-store.netlify.app

# first step

Locate the github invitation concerning collaboration on the project and Accept it through your email.
just go to your email and accept the invitation.

# step two

Once you found and click on [view invitation] through your email, you will be redirected to the repository on github.com [I recommend access this from your computer], click on code [green button with drop-down], you will see this url: https://github.com/wandday/icepaint-store.git simply copy the url from the code button, if you can't find the code button, simply copy the url above, they are the same.

# step three

Go to your gitbash or your cmd interface and type: git clone (and paste the url you copied),
it will look like this git clone https://github.com/wandday/icepaint-store.git then press enter.

# step four

go and locate [icepaint-store] folder on your computer and open the folder with vscode.

# step five

now you have the project folder on your computer, You need to create a branch for your work, this is where you will be doing all your tasks,

open your terminal on your vscode, to do that look for terminal tab on your vscode menu bar on the top, and click on New Terminal. once the terminal opens, type:

git checkout [yourGithubUsername-feature]

for example my own will look like this

git checkout habeebability-landing-page

that means my username is habeebability, and the feature am adding is landing-page

# step six

now it's time to do your work, after completing your code,

type:  
 git add . (to add all your files)
type:
git commit -m "the feature you added"

type:
git pull (this is very important, you must always pull all the update from the develop branch before you push so that it wont overwrite all your changes)

type:
git push (to push to github)

# step seven

now that you have pushed there is one last step, go to github repository where you copied the url, you will see your commit message, click on it, you will see a button "New pull Request" click on it and wait, if you have done everything correctly, your request will be merged.

That's all
