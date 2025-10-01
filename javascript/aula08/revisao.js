let login = prompt("seu email")
let senha = prompt("sua senha:")

let loginCerto = "jefin"
let senhaCerta = "123jefin"

//Validar se login é o login certo  e se a senha também é
if (login == loginCerto && senha == senhaCerta) {
    alert("PODE IR IRMÃO")

    alert("opção 1: crédito \n opção 2: consignado \n opção 3: empréstimo \n opção 4: renegociar \n opção 0: atendimento")
    
    let opcao = Number(prompt("escolha a opção:"))
    
    switch (opcao) {
        case 1:
            alert("tbom")
            break;
        case 2:
            alert("ok")
            break;
        case 3:
            alert("beleza")
            break;
        case 4:
            alert("hmmm")
            break;
        case 0:
            alert("complicado")
            break;
    
        default:
            alert("encerrando o atendimento")
            break;
    }

} else { //se o login ou a senha que o usuário inseriu não forem iguais a que temos, ele não pode fazer login no app
    alert("incorreto pAIZÃO")
}

