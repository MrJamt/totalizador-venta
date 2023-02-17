import f_impuesto from "./f_impuesto";

const items = document.querySelector("#items");
const precio = document.querySelector("#precio");
const select = document.querySelector("#estado");
const precioN = document.querySelector("#precioN");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#totalizar-div");


form.addEventListener("submit", (event)=> {
    event.preventDefault();

    const estado = select.value;
    const precioNeto = items.value*precio.value;
    div.innerHTML = " Precio Neto ( " + items.value + " * $"+ precio.value + " ): $" + precioNeto + "<br>" ;
    div.innerHTML += " Impuesto para " + estado + " (%"+ f_impuesto(estado) + "): " + (precioNeto*f_impuesto(estado))/100;
}); 