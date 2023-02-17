function f_descuento(precioNeto) {
    let desc=0;
    if(precioNeto >= 1000 && precioNeto < 3000)
    {
        desc=3/100;
    }
    else if(precioNeto >= 3000 && precioNeto < 7000)
    {
        desc=5/100;
    }
    else if(precioNeto >= 7000 && precioNeto < 10000)
    {
        desc=7/100;
    }
    else if(precioNeto >= 10000 && precioNeto < 30000)
    {
        desc=1/10;
    }
    else if(precioNeto >= 30000)
    {
        desc=15/100;
    }
    return desc;
  }
  
  export default f_descuento;
  