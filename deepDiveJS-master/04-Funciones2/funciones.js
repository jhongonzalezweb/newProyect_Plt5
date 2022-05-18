function concatenar() {
    let string = "";
    for (i = 0; i < arguments.length; i++) {
      string += arguments[i];
    }
    return string;
  }
  
  function invocarFunciones() {
    let string = "";
    for (i = 0; i < arguments.length; i++) {
      string += arguments[i]();
    }
    return string;
  }
  