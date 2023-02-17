import f_impuesto from "./f_impuesto";

const select = document.querySelector("#estado");
const form = document.querySelector("#estado-form");
const div = document.querySelector("#estado-div");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    const estado = select.value;
    div.textContent = "Estado: " + estado + ". Impuesto: " + f_impuesto(estado) + "%";
});