function f_impuesto(estado) {
    let impuesto;
    if(estado == "UT")
    {
        impuesto=6.65/100;
    }
    else  if(estado == "NV")
    {
        impuesto=8.00/100;
    }
    else  if(estado == "TX")
    {
        impuesto=6.25/100;
    }
    else  if(estado == "AL")
    {
        impuesto=4.00/100;
    }
    else  if(estado == "CA")
    {
        impuesto=8.25/100;
    }
    return impuesto; //listo para ser multiplicado
  }
  
  export default f_impuesto;
  