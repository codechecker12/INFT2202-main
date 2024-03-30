

/*Final ICE-1 Completed, Please Professor consider this I believe I did a lot mess but i am trying to get command on this language as fast as i can, thank you Professor Matt!*/


// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
const list = document.querySelector('ul');

// ADD NEW ITEM TO END OF LIST
// Create element
const newEndItem = document.createElement('li');

// Create text node
const endItemText = document.createTextNode('Olive Oil');

// Add text node to element
newEndItem.appendChild(endItemText);

// Add element to the end of the list
list.appendChild(newEndItem);

// ADD NEW ITEM START OF LIST
// Create element
const newStartItem = document.createElement('li');

// Create text node
const startItemText = document.createTextNode('Avocado & Guacamole');

// Add text node to element
newStartItem.appendChild(startItemText);

// Add element to the start of the list
list.insertBefore(newStartItem, list.firstElementChild);

// All <li> elements
const listItems = document.querySelectorAll('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
let counter = 1;

// Loop through elements
listItems.forEach(item => {
    item.classList.add('cool');
    item.innerHTML = counter + '. ' + item.innerHTML; // Adding a number to each item
    counter++;
});

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
const heading = document.querySelector('h2');

// No. of <li> elements
const numberOfItems = listItems.length;

// Content
const headingContent = `${numberOfItems} items in the list`;

// Update h2 using innerHTML (not textContent) because it contains markup
heading.innerHTML = headingContent;




