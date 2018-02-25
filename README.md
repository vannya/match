# Component Challenge

### Built using React, Redux, Express, Node and MongoDB



# To run on dev: 

**First time setup**
Open your command terminal and navigate to the folder you want to install in.  
Type ```git clone https://github.com/vannya/match.git```.  
After the clone folder is saved into your system, run the following codes:  

```cd match```  
```npm install```

This should take a moment to load. Next, follow the instructions for creating a `keys.js` file.  
Once that file is complete and saved, run the following commands to install the client packages:

```cd client```    
```npm install```  

Once the packages are installed, run the following commands to start the dev server and client:  

```cd ..```  
```npm run dev```  

Now you should be good to go!  

**Subsequent dev runs**  
From the main folder, type the following code to run both server and client:

```npm run dev```

Now you should be good to go!  


## Create a keys.js file  
Create a file called `keys.js` (in the main folder).

```
module.exports = {  
  googleClientId: "#############",  
  googleSecretId: "#############",  
  mongoURI: "##############"  ,
  cookieKey: "#############"
}
```

### Get credentials through Google.   
Go to [console.developers.google.com](https://console.developers.google.com/apis?project=match-three-components)  
Create new project and give project a name.
Open project.

**Enable API.**  
Search for Google+ API.  
Enable API.  
Click credentials on the left.  Choose Oauth client ID.  
Set up consent screen and click save.  
Choose web app. Name can remain web client 1.  
JS origin: `http://localhost:5000`  
Redirects: `http://localhost:5000/api/googlelogin/redirect` and `http://localhost:3000/api/googlelogin/redirect`  
Now you have client id and secret. Paste these into keys.js as googleClientId and googleSecretId, respectively.  

### Get MongoURI  
Navigate to mLab.com and login/signup.    
Sandboxes are free here.  

**Create new database.**  
Click create new database on the dashboard.  
Choose Sandbox AWS. Click Continue.  
Choose US Region. Click Continue.  
Name: appname  Click Continue and submit order (your total should say "Free").  

**Add new DB user.**  
After a few seconds, your db should be ready.  
Click the database name in the list.  
Click Users in the database.  It's on the tab halfway down the page.  
Click Add database user.  
Add a database username and password.  
Make sure that "Make read-only" isn't clicked.  
Click create.  

**Set up URI**  
The URI code is listed on the page under "To connect using a driver via the standard MongoDB URI".  
It should start with `mongodb://<dbuser>:<dbpassword>`  
Copy that entire link and paste into keys.js as the mongoURI.   
Replace `<dbuser>` and `<dbpassword>` with the information you used when creating the database user in the previous steps.  
Now it should look like `mongodb://username:thisismypassword`.  

**Set up Cookie Key**  
The cookie key can be any series of letters such as asdkfasdjabluasbfas or ekjnsfaioasdasdfbjnye.  
Any random letters will do.  

Save keys.js and you are on your way!  
