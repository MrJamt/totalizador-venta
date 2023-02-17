const precioN = document.querySelector("#precioN");
const precio = document.querySelector("#precio");
const items = document.querySelector("#items");
const form = document.querySelector("#precioN-form");
const div = document.querySelector("#precioN-div");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

        div.textContent = " Precio Neto ( " + items.value + " * $"+ precio.value + " ): $" + items.value*precio.value;
});
