const precio = document.querySelector("#precio");
const form = document.querySelector("#precio-form");
const div = document.querySelector("#precio-div");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    div.textContent = "Precio/u: "+precio.value+" Bs.";
});