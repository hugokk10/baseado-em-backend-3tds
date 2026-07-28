class  veiculo {
    constructor(marca) {
        this.marca = marca;
    }
    buzinar() {
        console.log("Bibiiiii!");
    } 
};

//criando a revação de herança
class civic extends veiculo {
    constructor(marca, qPortas) {
        surpe(marca); //SUPER chama o constructor da classe pai (veiculo)
        this.qPortas = qPortas;
    }
};

const meuVeiculo = new veiculo ("ford")
console.log("marca do vaiculo: ", meuVeiculo.marca);
meuVeiculo.buzinar();

const Meucarro = new veiculo ("fiat, 4")
console.log("\n---Testando o carro ---");
console.log("quantidade de portas: ", Meucarro.quantiadadePortas);
Meucarro.buzinar