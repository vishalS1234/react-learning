
## Function in javaScript:

Block of code that perform a specific task, can be invoked whenever needed.


```js
function myFunction(){
    console.log("Hello javaScript");
    console.log("Learning ES6");
}
myFunction();


function myFunction(msg){   // parameter
    console.log("Hello javaScript");
}
myFunction("JavaScript") // arguments

function sum(a,b){
 
    //local variable --> scope variable
    sum = a+b;
    console.log(a+b);
    return sum;
}

console.log(sum(5,7));
```

## Arrow Functions:

simple way to write function
compact way to write a function

```js
(a,b) => {
    return a+b;
}

const functionName = (param1,param2) => {
    //do something
}

const arrowMult(a,b) => {
    return a*b;
}
arrowMult(3,6);

```

#### Q.1 

```js
 function countVowels(str){
     let count = 0;  
     for(const char of str){
         if(char === "a" ||
         char === "e" ||
         char === "i" ||
         char === "o" ||
         char === "u"){
             count++;
         }
     }
     console.log(count);
 }
 countVowels("vishalsaini")
 const cVow = (str) => {
     let count = 0;  
     for(const char of str){
         if(char === "a" ||
         char === "e" ||
         char === "i" ||
         char === "o" ||
         char === "u"){
             count++;
         }
     }
     console.log(count)
 }
```


## Constructor Function: 
```js
function BellBoy (name, age, hasWorkPermit, language) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.language = language;
}
```


### Initialise Object:
```js
var = BellBoy1 = new BellBoy ("Timmy", 19, true, ["English", "French"]);
var = BellBoy2 = new BellBoy ("Eimmy", 21, true, ["English", "French"]);
var = BellBoy3 = new BellBoy ("Jimmy", 20, true, ["English", "French"]);
```

```js
// Constructor function 
function HouseKeeper(yearsOfExperience, name, cleaningRepertories) {
this.yearsOfExperience = yearsOfExperience;
this.name = name;
this.cleaningRepertories = cleaningRepertories;
}

// Initialise object;
var housekeeper1 = new HouseKeeper(9, "Tom", ["lobby"])
var housekeeper2 = new HouseKeeper(9, "Jerry", ["lobby, Bedroom"])
```


## Call Method:

```js
function HouseKeeper(yearsOfExperience, name, cleaningRepertories, clean) {
this.yearsOfExperience = yearsOfExperience;
this.name = name;
this.cleaningRepertories = cleaningRepertories;
this.clean = function () {
    alert("Cleaning in Progress");
};
}

let houseKeeper1 = new HouseKeeper(2, "Bimmy", ["Bedroom, Looby"]);

// call that function 
houseKeeper1.clean();


function Audio(fileLocation){
    this.filelocation = fileLocation;
    this.play = function() {
    }
}

var tom1 = new Audio("sound/tom-1.mp3");
tom1.play();
```

### Callback Function:

A callback is a function passed as an argument to another function

```js
$0.addEventListner("click", function(event) {
    console.log(event);
});

```

# react-learning
## React
React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.

#### Setup With Vite
Use to create(Setup & install) React.js, Vue.js 
- Node & npm
- Install Vite

Before: `create-react-app my-app`

Now: use Vite & Parcel (modern frontend build tools): `npm create vite`

**Note**: SWC is an extensible Rust-based platform for the next generation of fast developer tools. It’s used by tools like Next.js,    Parcel, and Deno, as well as companies like Vercel, ByteDance, Tencent, Shopify, Trip.com, and more.
SWC can be used for both compilation and bundling. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers.

project name: `react-learning`
select a framework: `React`
select a variant: JavaScript

Then -> `cd react-learning` > `npm install` > `npm run dev`

port: http://localhost:5173/ 

### Why Vite for React Setup 
- Vite is a fast development server nad build tool
- Efficient production build 
- Simple Configuration
- TypeScript Support
- Vite supports features like SCSS pre-processors, CSS modules.


Start with: App.jsx

```js
function Hello() {
    return (
        <h1>Hello React</h1>
    )
}
export default Hello
```

```js
function Hello() {
    return (
        <>
        <h1>Hello React</h1>
        <h1>With Vite</h1>
        </>
    )
}
export default Hello
```