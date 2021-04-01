// get a list of all <h3> elements
// const heading3List = document.querySelectorAll("h3");

// // iterate over the list and print each one
// for (let element of heading3List.values()) {
//     console.log(element);
// }

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    if (content.length > 250) {
        content = content.slice(0,250);
        content = content + '<a href="#">...</a>';
    }
    desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
    console.log(ratingValue)
}
// select all of the parks
const parks = document.querySelectorAll(".park-display");

// get the number of parks
const numberParks = parks.length;

// create a new element
const newElement = document.createElement("div");

// create some text inside this element
newElement.innerText = `${numberParks} Exciting parks to visit!`;

// add styling to the element
newElement.classList.add("header-statement");

//add the element to the page
const header = document.querySelector("header")
header.appendChild(newElement);

