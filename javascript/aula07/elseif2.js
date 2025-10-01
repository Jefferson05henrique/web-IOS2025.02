let credencial = "pj"

if (credencial == "visitante") {
    console.log("você só pode ir onde seu anfitrião for.");
} 
else if (credencial == "estagiario") {
    console.log("você pode acessar as baias de trabalho e refeitório");
}
 else if (credencial == "aprendiz") {
    console.log("você pode acessar as áreas de lazer, baias e refeitório.");
}
 else if (credencial == "clt") {
    console.log("você pode acessar tudo, exceto a diretoria.");
} 
 else if (credencial == "ceo") {
    console.log("o céu é o limite.");
} 
else {
    console.log("suma");
}