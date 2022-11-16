
const names = [
    "first item",
    "second item",
    "third item"
];

names.map((name) => {   
    const li = document.createElement("li");
    document.querySelector("#target").innerHTML += `<li>${name}</li>`;
});

 





