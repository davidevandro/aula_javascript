
//-------- AULA 04 - Funções
//function soma(n1, n2){
//    return n1 + n2;
//}

//alert(soma(5,10));


/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else{
        validar = false;
    }
    return validar;
}*/

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}

//alert(setReplace("Vai Japão!", "Japão", "Brasil"))
//------------AULA 03 - Datas
//var d = new Date();
//alert(d);
//Exibe o mês (começa em 0)
//alert(d.getMonth()+1)
//alert(d.getHours());
//alert(d.getMinutes());


//------------AULA 03 - Estruturas de Repetição
//LOOP FOR
/*var count;
for (count = 0; count <= 5, count++){
    console.log(count);
}*/

//LOOP WHILE
/*var count = 0;

while (count <= 5){
    console.log(count);
    count = count++;
}*/


//--------- AULA 03 - Condicionais
//Exibe pop-up com pergunta para usuário
/*var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("Maior de idade!");
} else {
    alert("Menor de idade!");
}*/


//----------------------AULA 02 - Dictionary
//var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}];
//console.log(frutas)
//console.log(frutas[1].nome)

//var fruta = {nome: "maça", cor: "vermelha"};
//console.log(fruta);
//console.log(fruta.nome);
//console.log(fruta.cor)


//------------------AULA 02 - Array
//var lista = ["maça", "pera", "laranja"];
//Adiciona item na lista
//lista.push("uva");
//Remove o ultimo item da lista
//lista.pop()
//Imprime a lista
//console.log(lista);
//Array indexado a partir de 0
//console.log(lista[1]);
//Tamanho da lista
//console.log(lista.length);
//Inverte a lista
//console.log(lista.reverse());
//Converte em string
//console.log(lista.toString())
//Mudar a forma de converter a lista para string
//console.log(lista.join(" - "))

//----------------AULA 01 - Mensagens + Strings
//var nome = "David Martins";
//var idade = 32;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"

//Escreve na janela de pop-up
//alert("meu primeiro js")

//Concatenção de strings
//alert("Bem vindo "+ nome)
//alert(nome + " tem " + idade + " anos.");

//Soma de inteiros
//alert(idade + idade2)

//Escreve no console
//console.log(nome);
//console.log(idade + idade2)

//Replace na string
//console.log(frase.replace("Japão", "Brasil"))

//Uppercase
//console.log(frase.toUpperCase())
//Lowercase
//console.log(frase.toLowerCase())