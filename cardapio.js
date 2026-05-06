const cardapio = [
  {nome: "x- burguer", preco: 18.90, catetegoria:"lanche"},
  {nome: "batata-frita", preco: 9.50, categoria: "acompanhamneto"},
  {nome: "sprite", preco: 4.50, categoria: "bebida"},
  {nome: "milkshake", preco: 12.00, categoria: "sobremesa"}
]

const cliente = {
    nome: "ana",
    fidelidade: true
}

//console.log(cardapio[0].nome);
//console.log(cardapio[1].preco);
//console.log(cardapio[2].categoria);

function exibirCardapio(lista) {
  console.log("===CARDAPIO===");
  console.log(`1. ${lista[0].nome} - R$ ${lista[0].cartegoria}`)
  console.log(`2. ${lista[1].nome} - R$ ${lista[1].cartegoria}`)
  console.log(`3. ${lista[2].nome} - R$ ${lista[2].cartegoria}`)
  console.log(`4. ${lista[3]}.nome} - R$ ${lista[3].categoria}`)
}

function calcularTotal(listaPedido) {
  let total = listaPedido[0].preco + listaPedido[1].preco;
  return total;
}

function calcurComDesconto(total, clienteObj) {
    if (clienteObj.fidelidade === true) {
        let desconto = total * 0.10;
        console.log('Desconto fidelidade: R${desconto}');
        return total;
    }
}

function exibirPedido(listaPedido){
  console.log("===SEU PEDIDO ===");
  console.log(`1. ${listaPedido[0].nome} - R$ ${listaPedido[0].preco}`)
  console.log(`2. ${listaPedido[1].nome} - R$ ${listaPedido[1].preco}`)
  console.log(`TOTAL: R$${calcularTotal(listaPedido)}`)
}

exibirCardapio(cardapio)
exibirPedido(pedido);