function inverteString(string) {
    var novaString = "";
    for (var i = string.length - 1; i >= 0; i--) {
      novaString += string[i];
    }
    return novaString;
  }
  
  var minhaString = "Estágio na Target!";
  var minhaStringInvertida = inverteString(minhaString);
  reFinal.innerHTML = minhaStringInvertida;
  