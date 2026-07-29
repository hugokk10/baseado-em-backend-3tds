let saldojoao = 1000;
let saldoCarlos = 500;

const taxaJuros = 0.02;
const saldoComjuros = saldo * (taxaJuros);

const contajoao = {titular: "joao", saldo: saldojoao};
const contaCarlos = {titular:"Carlos", saldo: saldoCarlos};
//console.log(saldocomJuros);
//console.log(`{$conta.joao.titular}posssui R$ ${contajoao.saldo}.`);
//console.log(`{contaCarlos.titular}posssui R$ ${contaCarlos.saldo}.`);

const contas = [contajoao, contaCarlos];

contas.forEach((conta) => {
console.log(`${contajoao.titular}tem R$ ${contajoao.saldo}.`);
}); 

contajoao.saldo = -5000;
console.log("saldo alterado sem controle: ", contajoao.saldo);