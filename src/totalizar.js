import f_impuesto from "./f_impuesto";
import f_descuento from "./f_descuento";

const items = document.querySelector("#items");
const precio = document.querySelector("#precio");
const select = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#totalizar-div");


form.addEventListener("submit", (event)=> {
    event.preventDefault();

    const estado = select.value;
    const precioNeto = items.value*precio.value;

    const descuento = f_descuento(precioNeto);
    const precioConDesc = precioNeto-(precioNeto*descuento);

    const impuesto = f_impuesto(estado);

    const precioTotal = precioNeto-(descuento*precioNeto)+(impuesto*precioConDesc);
    div.innerHTML =  " Precio Neto ( " + items.value + " * $"+ precio.value + " ): $" + precioNeto + "<br>" ;
    div.innerHTML += " Descuento ( " + descuento*100 + "%): "+ descuento*precioNeto + "<br>" ;
    div.innerHTML += " Impuesto para " + estado + " (%"+ impuesto*100 + "): " + impuesto*precioConDesc + " <i>(aplicado al precio con descuento)</i> <br>";
    div.innerHTML += " Precio Total (Descuento e Impuesto): $" + precioTotal;   
}); 