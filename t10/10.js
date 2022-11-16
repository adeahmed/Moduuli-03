//Read the first name and last name values from the form and print them in the <p id="target"> (2p)
//remember to stop the default action of the form
//you can use attribute selectors in querySelector() to select the <input> elements

document.querySelector("form#source").addEventListener("submit", e => {
  e.preventDefault();
  const firstName = document.querySelector("input[name='firstname']").value;
  const lastName = document.querySelector("input[name='lastname']").value;
  document.querySelector("#target").textContent = "Your name is " + firstName + " " + lastName;
});

