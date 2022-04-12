//uma função só é executada se for "chamada"
function ConverterParaReal() {
  //pega toda a informação do HTML, no caso, pega o código do elemento, da figura
  var valorElementoDolar = document.getElementById("dolar");

  //pega o valor contido dentro do elemento, nesse caso, o valor que é digitado
  var valorDigitadoEmDolar = valorElementoDolar.value;

  //transforma o valor obtido acima em um valor numérico, em um número
  var valorEmDolarNumerico = parseFloat(valorDigitadoEmDolar);

  var valorEmReal = valorEmDolarNumerico * 5;

  var elementoValorConvertidoEmReal = document.getElementById(
    "valorConvertidoEmReal"
  );
  var valorConvertidoEmReal =
    "U$" + valorEmDolarNumerico + " em real é: R$" + valorEmReal;
  elementoValorConvertidoEmReal.innerHTML = valorConvertidoEmReal;

  document.getElementById("dolar").value = "";
}

function ConverterParaDolar() {
  var valorElementoReal = document.getElementById("real");
  var valorDigitadoEmReal = valorElementoReal.value;
  var valorEmRealNumerico = parseFloat(valorDigitadoEmReal);

  var valorEmDolar = valorEmRealNumerico / 5;

  var elementoValorConvertidoEmDolar = document.getElementById(
    "valorConvertidoEmDolar"
  );
  var valorConvertidoEmDolar =
    "R$" + valorEmRealNumerico + " em dolar é: U$" + valorEmDolar;
  elementoValorConvertidoEmDolar.innerHTML = valorConvertidoEmDolar;

  document.getElementById("real").value = "";
}

console.log("Programa iniciado");