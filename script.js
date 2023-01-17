var vez = 1;
var vencedor = "";


$(document).ready(function() {

  function casasIguais(a, b, c) {
    var casaA = $("#btn" + a);
    var casaB = $("#btn" + b);
    var casaC = $("#btn" + c);
    var bgA = $("#btn" + a).text();
    var bgB = $("#btn" + b).text();
    var bgC = $("#btn" + c).text();
    if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
      if (bgA.indexOf("X") >= 0)
        vencedor = "1";
      else
        vencedor = "2";
      return true;
    } else {
      return false;
    }
  }

  function verificarFimDeJogo() {
    if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
      casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
      casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
    ) {
      $("#resultado").html("<h1>O jogador " + vencedor + " venceu! </h1>");
      $(".casa").off("click");
    }
  }

  $(".btn").click(function() {
    var bg = $(this).text();
    if (bg == "none" || bg == "") {
      var fig = vez.toString();
      if (vez == 1) {
        $(this).text("X");
        jogador = 2;

      } else {
        $(this).text("O");
        jogador = 1;

      }
      $("#jogador").text("É a vez do jogador " + jogador);
      vez = (vez == 1 ? 2 : 1);
      verificarFimDeJogo();
    }

  });

});