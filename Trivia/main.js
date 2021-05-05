let welcome = prompt ("Qual o seu Nome?")

document.write ("Olá " + welcome " !")

let quiz = prompt ("Vamos testar seus conhecimentos? \n Deseja participar do Quiz? \n 1 SIM \n 2 NÃO")

if (quiz == 1) {

    let pergunta1 = prompt ("O que é o HTML? \n 1 Uma Linguagem de marcação \n 2 Uma linguagem de programação")
        if (pergunta1 == 1) { document.getElementsByClassName = caixa1 ("resposta 1 correta")
        } else {
            getElementsByClassName = caixa2("resposta 1 errada")
        } 
    
    let pergunta2 = prompt ("Java e Javascript são a mesma coisa? \n 1 SIM \n 2 NÃO")
        if (pergunta2 == 2) { document.getElementsByClassName = caixa1 ("resposta 2 correta")
        } else {
            getElementsByClassName = caixa2("resposta 2 errada")
        } 

    let pergunta3 = prompt ("O Javascript tem a função de: \n 1 Estilizar a página \n 2 Criar interação na página")
        if (pergunta3 == 2) { document.getElementsByClassName = caixa1 ("resposta 3 correta")
        } else {
        getElementsByClassName = caixa2("resposta 3 errada")
}
} else {
    alert ("Sessão finalizada")
}



