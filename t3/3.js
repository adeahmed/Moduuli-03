//'use strict';
// Add the following HTML code to the element with id="target". Add the values from 'names' array to the <li> elements in a for-loop.

const names = ['John', 'Paul', 'Jones'];

for (let i = 0; i < names.length; i++) {
    document.querySelector("#target").innerHTML += `<li>${names[i]}</li>`;
}

