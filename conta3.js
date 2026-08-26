class ContaBancaria {
    #Saldo;

    constructor(titular, saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor < 0) {
            console.log("valor de deposito invalido.");
            return;
           
        }
        this.#saldo += valor;
    }
    sacar(valor){
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente.")
            return; //Pausa o processo
            this.#Saldo -= valor;
        }
    }
    get saldoAtual() {
        return this.#saldo; //corrigir a linha 25
    }
}

const contas = [new ContaBancaria("Joao, 1000"), new ContaBancaria ("paulo", 500)];

    //Modificações para incrementar a nossa função
    //contas[0].depositar(200);
    //contas[1].sacar(100);

contas.forEach((conta) => { console.log(`{conta.titular} tem R$ ${conta.saldoAtual}`)
});