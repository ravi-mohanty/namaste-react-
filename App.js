import "./index.css";
import React from "react"; 
import ReactDOM from "react-dom/client";






/* const heading = React.createElement(
      "h1",
      { id: "heading", xyz: "abc"},
      "Hello world from React" 
);  /* here we giving atribute to h1 tag , bcz we are pointing to h1 tag here */
 /* this {heading} is nothing but a react element which is nothing but a js obj. */
/*const root = ReactDOM.createRoot(document.getElementById("root")); /*here we are adding the element into the dom that which is not the core property of react , createElement is the core of the react but creating a root is not the core of it, it is comming from reactDOM 
                so we need to add reactDOM for this create root element to work on , we need something so that we can render the stuff inside of it hence creating the root */

                /* createRoot is used to create a root for a React tree. It replaces the older ReactDOM.render() method as the primary way to render a React application.*/
/* root.render(heading); /*this render method will convert {heading} object into the html tag which will be understood  by js */
     
/*

<div id ="parent">
    <div id = "child1">
       <h1> I'm h1 tag </h1>
       <h2> I'm h2 tag </h2>
    </div>
    <div id= "child2">
       <h1> I'm h1 tag </h1>
       <h2> I'm h2 tag </h2>
     </div>
</div> 

*/

/*const parent = React.createElement("div", {id:"parent"}, [ /* we are creating html elemenets inside the react so that it will later convernt into the html while remdering , nothing else */
      /*React.createElement("div",{id :"child1"}, [
           /* React.createElement("h1",{}, "This is namaste react xyz"), /*this text inside this will automatically get updated on the page done by parcel, therefore we are using jsx to avoid such complex nesting, are very useful when we need to crteate the tags */ 
            /*React.createElement("h2",{}, "I'm h2 tag"),
      ]),
      React.createElement("div",{id :"child2"}, [
            React.createElement("h1",{}, "I'm h1 tag"),
            React.createElement("h2",{}, "I'm h2 tag"),
          ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); /* we need an element under wich we will all the stuff , 
when we are creating a root it is witin the dom , hence we need to use ReactDOM library along with createRoot */
 
/*root.render(parent);  /* here we are rendering parent inside the root*/

/*eact can work indipendently on a small peice of code also there fore it is called a library , where framework comes with a lot of stuff , applied on the all of it */

/* here we are pointing to div hence react will work only for div, inside of it whatever be there it will simply replace it and 
execute what have we asked it to render */

/* & 'C:\Program Files\Git\cmd\git.exe' init ---- this is used by me to create a git inside the folder */

/* working of createRoot behind the scenes 

Your understanding is close, but let me clarify it a bit more precisely:

`createRoot` is not used for creating an element, but rather for creating a React root. Here's a more detailed explanation:

1. Purpose of `createRoot`:
   - `createRoot` is used to create a React root, which is the top-level data structure React uses to track a tree to render.
   - It doesn't create a new DOM element. Instead, it prepares an existing DOM element to become the container for a React application.

2. Where it renders:
   - `createRoot` is typically called on an existing DOM element, often a `<div>` with an id of "root" that you've already included in your HTML.
   - It doesn't create this element; it just sets it up as the container for your React app.

3. Usage:
   ```javascript
   const container = document.getElementById('root');
   const root = ReactDOM.createRoot(container);
   ```

4. Rendering:
   - After creating the root, you use the `render` method on this root to actually render your React elements:
     ```javascript
     root.render(<App />);
     ```

5. Difference from older versions:
   - In React versions prior to 18, you would use `ReactDOM.render()` directly. `createRoot` is part of the new concurrent rendering system introduced in React 18.

So, to summarize:
- `createRoot` doesn't create a new element. It prepares an existing DOM element to become the container for your React app.
- It's used to create a React root, which is then used to render your React components into the specified container.

Your understanding that it's used "under which we are going to render the things" is correct. It sets up the entry point for your React application in the DOM.*/
 /* at the end react is nothing but few functions that help us build application faster */

 /* git init we are configuring the the remote git , into our project , for that first we are making pur local repo as git repo.*/

 /* 1} first make the repo. a git repo. by using git init {this will make the local repo. a git repo}
2} if u are not able to make master to the main than first make the initial commit by following these steps 
          git add .
          git commit -m "Initial commit"
3} than after rename the brnach :
          git branch -m master main
4} than add the location givn by the git new repo. 
5} then we need to push that code into the orgin :
     git push origin main ; ---> it will show you that 100% of the data get into the remote location -- all steps done 

here local git doesnt know about the server git there fore we have to perform the commit */

/* npm is not node package manager but it just manages the pacakge , if we want to include many packages that can help our package work fast we can install it , it has all the necessary pakages hosted over it*/

/* first we have added the path variable into the user 
variable section

now we are adding node package manager into our project 
   : npm init
   : giving package name 
   : version name 
   : description 
   : Entry point 
   : Entry point
   : test cases
   : git repository 
   : git link --> code section --> dropdown : https://github.com/ravi-mohanty/namaste-react-.git*/
   
   /* after all these steps package.jason file will be added automatically--> this file is the configuration for npm  
    npm: is package manager , that manages the packages that we install, somtiemes called dependecies  
    let say we are using some version that is 1.2 that will be took care by npm in package.jason 
    
    most important package is bundler */

    /* bundler : bundle the code, compress the code, clean so that we can ship to the production , eg: parsel,webpack, vite...

    now we are installing parcel --> npm install parcel */

   /* two type of dependencies one is dev. depemdemcies {-D}--used when we are on development mode --> npm install -D parcel here we are telling 
   that it is a dev. depedency not normal one , other is normal dependecies */

   /* putting the carat symbol so that in 
  near future if there is any minor update than it will do automatically , if we put ~ than it will do the majour changes 
  which might break many things */

  /* pacakge-lock.jason is the file that keeps the trac of the current version and locks it , while package.jason having having a package upgrade system init */

  /* here in pacel we it wll track all the dependencies , while the hash is here used to verify the same version that we pushed into the producation
  is same as we have in our local */

  /* when we install the npm --> node module is get added it contain all the necessary code that we fetched from npm--pacel and place it here */

  /*node module is very heavy --> brings all the code from all the pacakges */

  /* we need only pacel as a dependency , but parcel as a project having its own dependencies 
  hence these are that only --that having some other dependencies --> this chain is called transitive dependencies  */

  /* dependency depend on other modeules havving their own package.jason hence there are many package.jason there */

  /*we use git ignore to ignore all the those files, modules that we dont need to push into the production */

  /* package.jason and package-jason maintian all the version that project needs, as we can recreate our
  node modules if we have our package.jason and package-lock.jason with us  , hence we take it to git but we dont take the node modules to git*/

  /* now we are using pacel to ignite our app */ 

  /*parcel has done the hosting for us at local host 
   http://localhost:1234

   npx is executing a package , we can execute the package by putting npx [package name]
   when we do "npx parcel index.html" we are providing the source which will create the dev. environment for us and host 
   our app at local host with host id: 1234 

   npm is used to install the app while the npx is used to execute the code for us 
   
   getting react , reactDom from cdn links is the costly operation, we can get the react from the node module, as we can see we are getting react from unpkg.com so its a different network, when it is 
   available in our network we should them */ 

   /*---> Note---> we are installing react as normal dependency not as dev dependecy */
   /* what ever the dependency we have installed , we can see its version on package.jason */

   /* now we are getting error Browser scripts cannot have imports or exports error */

   /* one thing I am not getting here is first our root is rendered where we are getting "Ravi is here", 
   now we are getting I am h1 tag----- why is this happening--> this is because our react is not properly imported hence it is not been used , 
   but now we have tell the source file to treat it as a module hence after compiling we can see that we are now able to see the react things just by telling in the source
   file that this is nothing but a module, and after rendering the root inside of it what ever the content is there all get overwridden, this automatic updation is done by these vite,parcel ... */ 

   /* when I have installed git or something I need to close all the terminals , than after I open it and check wether it is working or not */
   
   /* when we porform the production build {npx parecel build index.html} it will get created inside the [dist] at the time of build it will generate dist and .parcel-cache  
    we need to remove the main : App.js from Package.jason , when using the npm it is telling that App.js is the entry point for the app*/
   
    /* we cant change things inside the package.jason , we have removed the main : "App.js" beacuse we are now creating prod. dev. */

    /* any code that is automatically generated shpould not be pushed into the github, for eg: .parcel-cache, dist these files, should put inside the gitignore */

    /* Note : local contain many files, but we push those files that can't be regenerated , like package.jason from git server fetches the code and host it into the server which the end user sees it */

    /* Now we want our app to work with older versions too, for that we use browser list.dev---> now telling our app which all browser that our app is supportig in, we will configure it within package.jason */

    /* browserslist is the website that from where we can add what is to written so that the recquired versions 
    of the browser should work on -- we need to put that thing inside browser section inside package.jason file ---> if we go to query composition than we can also select which state we need to see the most like usa etc... we have used last 2 version that means it will all the 
    browsers and taking the last 2 versions of it */

    /*now inside parcel.jason-->scripts : we are putting scripts --> build -> which will create the production ready app, start-> will build normal build */

    /* previously we are using npx parcel build index.html[for prod.], but while using the start keyword we are using "npm" --> npm start/npm run start will execute to prod. , where npm build wont work without run  --> npm run build */
     /*after the chanages build the file */
    /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /*const heading = React.createElement("h1", {id: "heading"}, "Namaste React-By ravi " ); /* this will create a react object its not yet converted to html element, when we render this object it will convert into html element*/
    const jsxHeading = <h1 className="head" tabInsex= "1">Namaste React in JSX!!!</h1> /*now we are using the classname = head where class is the keyword that is been used in html this is difference,  this is the jsx used to create react object , this is similar to create an object using react, 

    const jsxHeading = <h1 className="head">Namaste React in JSX!!!</h1> /*now we are using the classname = head where class is the keyword that is been used in html this is difference,  this is the jsx used to create react object , this is similar to create an object using react, 
    IMP --> As this is not a pure js as we are using the jsx which is not the part of the js , this conversion of jsx to js is {called transpiled--> which is not done by parcel itself --> done by babel{library}} done by parcel which is then understood by es6 */
    const root = ReactDOM.createRoot(document.getElementById("root"));  /* now we are rendering on to the browser therefore we are using ReactDOM , this line is important because we are creating the root element inside of that root all
    the code get render whether it is react / jsx */
   /* 
    behind the scene of JSX --> JSX is converted to react element(JS object ) -->render --> html element */
    root.render(jsxHeading); /* why css is not applied here , as it was applied on react ele. ? */
    /*ReactDOM.render(document.getElementById("jsxHeading"));*/


   /* JSX {Javascript syntax} is html-like/ xml-like syntax which is not html in js */
  /* Do we also render the react element using jsx if not than how it will got into the DOM ? ----> this is also rendered we render it just by putting the referenced obj. to render function */

  /* unfortunetly I have deletd few files , than with the help of node modules I have installed it
   key points that i get here is :
   1] check the version of react and reactDOM at package.jason both should be the same 
   2] delet .parcel-cache from the folder 
   3] than I run "npm cache clean --force"
   4]npm run build--> npm start
   5] Always remember the difference where to use reactDOM and where to use react , creating root, creating element --*/