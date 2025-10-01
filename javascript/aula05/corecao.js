 let dinheiro = 4.90
 let precoSorvete = 4.89
 let saborEscolhido = "creme"

 if (dinheiro >= precoSorvete) {
    console.log("boa noite! bem-vindo à sorveteria zika");
    if (saborEscolhido == "chocolate" ||saborEscolhido == "morango" ||saborEscolhido == "céu-azul") {
        console.log("aqui está seu sorvete de: " + saborEscolhido);
    } else {
        console.log("n temos esse sabor");
    }
 } else {
    console.log("tá liso em pai");
 } 