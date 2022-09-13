let armazenaLista = [
  ["0", "sem cadastro"],
  ["1", "leite"],
  ["2", "ovo"],
  ["3", "farinha"],
  ["4", "milho"],
  ["5", "café"],
];

let recebeCodigo = prompt(
  "Digite a funcionalidade desejada: (incluir ou consultar)"
).toLowerCase();

let mensagem = "";

switch (recebeCodigo) {
  case "incluir":
    let codigo = prompt("Digite o código");
    let produto = prompt("Digite o produto");
    let incluiLista = [codigo, produto];
    armazenaLista.push(incluiLista);
    mensagem = "Lista incluída com sucesso!";
    break;

  case "consultar":
    let recebeCodigoProduto = prompt(
      "Digite o código do produto que deseja encontrar: "
    );
    let encontrouProduto = " ";
    for (let codigo of armazenaLista) {
      encontrouProduto = codigo[0].indexOf(recebeCodigoProduto);
      if (encontrouProduto != -1) {
        mensagem = "O produto escolhido foi: " + codigo[1];
        break;
      }
    }
    if (encontrouProduto == -1) {
      let comando = prompt(
        "Sem cadastro, código não encontrado! Deseja incluir? Sim ou Não?"
      ).toLowerCase();
      if (comando == "sim") {
        let codigo = prompt("Digite o código");
        let produto = prompt("Digite o produto");
        let incluiLista = [codigo, produto];
        armazenaLista.push(incluiLista);
        mensagem = "Lista incluída com sucesso!";
        break;
      }
    }
}

console.log(mensagem);
console.log(armazenaLista);
