/*
    daily-grind.js

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
   
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week. All of the above must occur within one page.

    Here are the items we need for each coffee:

    name - Bubble Tea for example
    pic - Image of a bubble tea
    day - For example Wednesday
    alt - The data in the alt tag
    color - A color to match the coffee(drink)
    desc - A description of the coffee



*/



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");

 }
 
myDay = parseInt(myDay);//Must change to integer for switch

//myDay = 3; //TEST ONLY REMOVE

switch(myDay){

    case 0:
        today = "Sunday";
        
        coffee = {
            name: "Cold Brew", 
            pic: "images/cold-brew.jpg",
            day: "Sunday",
            alt: "A pic of a Cold Brew",
            color: "yellow",
            desc: `I like me some Cold Brew`

        };
    break;

    case 1:
        today = "Monday";

        coffee = {
            name: "Pumpkin Spice Latte", 
            pic: "images/pumpkin-spice-latte.jpg",
            day: "Monday",
            alt: "A pic of a Pumpking Spice Latte",
            color: "orange",
            desc: `I like me some Pumpking Spice Latte`

        };
    break;

    case 2:
        today = "Tuesday";

        coffee = {
            name: "Caramel Latte", 
            pic: "images/caramel-latte.jpg",
            day: "Tuesday",
            alt: "A pic of a Caramel Latte",
            color: "blue",
            desc: `I like me some Caramel Latte`

        };
    break;

    case 3:
        today = "Wednesday";

        coffee = {
            name: "Bubble Tea", 
            pic: "images/bubble-tea.jpg",
            day: "Wednesday",
            alt: "A pic of a Bubble Tea",
            color: "pink",
            desc: `I like me some Bubble Tea`

        };
    break;

    case 4:
        today = "Thursday";

        coffee = {
            name: "Drip Coffee", 
            pic: "images/drip.jpg",
            day: "Thursday",
            alt: "A pic of a Drip Coffee",
            color: "green",
            desc: `I like me some Drip Coffee`

        };
    break;

    case 5:
        today = "Friday";

        coffee = {
            name: "Frappaccino", 
            pic: "images/frappaccino.jpg",
            day: "Friday",
            alt: "A pic of a Frappaccino",
            color: "purple",
            desc: `I like me some Frappaccino`

        };
    break;

    case 6:
        today = "Saturday";

        coffee = {
            name: "Mocha", 
            pic: "images/mocha.jpg",
            day: "Saturday",
            alt: "A pic of a Mocha",
            color: "red",
            desc: `I like me some Mocha`

        };
    break;

    default:
        today = "Something went wrong";

}

//alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
document.getElementById("this-year").textContent = myDate.getFullYear();

function coffeeTemplate(coffee){
    let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;
        


    return myReturn;

};