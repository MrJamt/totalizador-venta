function f_impuesto(estado) {
    let impuesto="X";
    if(estado == "UT")
    {
        impuesto="6.65";
    }
    else  if(estado == "NV")
    {
        impuesto="8.00";
    }
    else  if(estado == "TX")
    {
        impuesto="6.25";
    }
    else  if(estado == "AL")
    {
        impuesto="4.00";
    }
    else  if(estado == "CA")
    {
        impuesto="8.25";
    }
    return impuesto;
  }
  
  export default f_impuesto;
  