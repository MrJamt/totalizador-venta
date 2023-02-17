const items = document.querySelector("#items");
const form = document.querySelector("#items-form");
const div = document.querySelector("#items-div");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    div.textContent = "Items: " + items.value + " unidades.";
});