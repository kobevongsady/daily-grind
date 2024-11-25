/*

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week. ALL of the above must occur within one page



name for example Bubble Tea
pic - for example bubble-tea.jpg
alt - name of coffee in alt tag
color associated with cofee
desc - description of coffee
day - day of the week 

*/








let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";
let today = "";

//use location object ot access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//seperate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");    
}

myDay = parseInt(myDay)

myDay = 3;//TEST ONLY - REMOVE THIs

switch(myDay){

    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
        coffee = {
              name: "Cold Brew",
               pic: "images/cold-brew.jpg",
                alt: "A pic of a cold brew",
                color: "brown",
                day: "Monday",
                desc: `For when I need a quick pick me up!`,

            };
    break;


    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
        coffee = {
              name: "Bubble Tea",
               pic: "images/bubble-tea.jpg",
                alt: "A pic of a bubble tea",
                color: "pink",
                day: "Wednesday",
                desc: `I like me some bubble tea!`,

            };
    break;

   default:
       today = "Something went wrong";

}

alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color

function coffeeTemplate(coffee){
    return `<p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>,${coffee.desc}!</p>`;
}
