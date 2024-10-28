.md syntax

Normal Text

# Heading 1  
## Heading 2
### Heading 3

_italics_
**Bold**
~~10000~~ 9999

Links
[Youtube](https://youtube.com "youtube")

Images
![google logo](https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png)


To add code between text
use `console.log()` to print

To write code in any programming lang use ```langName code```

```javascript
console.log("hello")
console.log("bye")

```

To write quotes
>keep smiling

---

# React
React is a javaScript library(not framework) that is used to easily build and arrange UI FOR
web applications.

## Why react
It makes it easy to manage and build complex front end. There are apps in which you click one button and things get updated on multiple different places in app. Doing this is difficult in ordinary DOM

before react the problem was : state(variables) maintained in js
UI updation handled by DOM

So there was no sync between js and DOM Then react came into picture and gave a consistent way of updating dom elements. This is the super power of react. It gives consistancy in UI.


```npx create-react-app``` is a utility used earlier, now a days we dont use it much because its bulky and takes time to download.

```npx create vite@latest``` to create react app using vite bundler
vite doesn't install all the modules by default so we have to install 
them manually
goto ```cd 01basicvite```, if we see a package.json file in this folder
then we can install all packages mentioned in package.json  using the command ```npm install```

React doesn't work alone, we need to tell where we want to run our app,
react has a couple of versions to go through this, 
1.React-dom used to talk to dom in browser
2.React-native used to talk to mobile apps.
But the core foundation is always react.

To run CRA app navigate to 01basicreact then use ```npm run start```
To run vite app navigate to 01basicvite then use ```npm run dev```
These are used in development phase

But in production we use the build script using ```npm run build``` this gives the production version of
how your app will be deployed.
There is a seperate build script and start script because in development phase there will be a lot of js files and they have to be combined and come at one place which is not easy so we have seperate build script.

### In vite app main.jsx is equivalent to index.js

If we return any html from javascript that is called jsx (javaScript xml)

To return multiple elemets from jsx we have to use ```<></>```

### CUSTOM REACT

### STATE
State is a unique thing in react which actually gets continuously monitored and 
any change in the state re-renders the UI on the web.


### HOW REACT WORKS
When we are in js we always have to use getElementById and all those things and whenever any change is
made what the browser does is it re-renders the entire page, this is a painful process espicially for
large scale apps

What react does behind the scene is it actually creates its own virtual mimic of the real dom(all those nodes and everything), whenever there is a slight change in a node, it actually compares that node with
original dom and only the thing that needs an update, it just gives an update of that.

### REACT FIBER
React behind the scenes uses fiber algorithm to update virtual dom.
The algorithm that updates the virtual dom is fiber.

React used to update every node one by one, instead of doing this its better to update every element in one update
Key features of fiber includes ability to pause, abort, or if new updates comes decides which one should be given more priority

when web layout is painted on dom, buttons wont become clickable until javascript in injected,
injecting javascript is called `Hydration` 

### RECONCILIATION
The algorithm react uses to diff one tree with another(original dom and virtual dom) to determine which parts needs to be changed.
Reconciliation is the algorithm behind `virtual dom`

The reason react can support so many targets is because react is designed so that reconciliation and rendering are seperate phases.










