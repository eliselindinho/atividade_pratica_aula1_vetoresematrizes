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
  case "consultar":
    recebeCodigo = prompt("Digite o código do produto que deseja encontrar: ");
    let encontrouProduto = " ";
    for (let codigo of armazenaLista) {
      encontrouProduto = codigo.indexOf(recebeCodigo);
      if (encontrouProduto != -1) {
        mensagem = `Lista:${codigo[0]} ${codigo[1]} ${codigo[2]} ${codigo[3]} ${codigo[4]} ${codigo[5]}`;
      } else {
        mensagem = "Código não encontrado!";
      }
    }
    break;

  case "incluir":
    let codigo = prompt("Digite o código");
    let produto = prompt("Digite o produto");
    let incluiLista = [codigo, produto];
    armazenaLista.push(incluiLista);
    mensagem = "Lista incluída com sucesso!";
    break;
}

console.log(mensagem);
console.log(armazenaLista);
