// get a list of all <h3> elements
const heading3List = document.querySelectorAll("h3");

// iterate over the list and print each one
for (let element of heading3List.values()) {
    console.log(element);
}

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
}