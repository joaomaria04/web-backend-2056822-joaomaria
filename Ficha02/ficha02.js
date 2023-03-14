function calcular_indice_massa_corporal(peso, altura) {      //Exercício 1
    var imc = peso / (altura) ** 2;
    console.log("O seu indice de massa corporal é de: ", imc)
    if (imc <= 18.5)
        console.log("Está abaixo do peso.", imc);

    else if (imc == 18.5 && imc == 25)
        console.log("Está no peso normal");

    else if (imc == 25 && imc == 30)
        console.log("Está acima do peso");

    else if (imc > 30)
        console.log("Está em estado de obesidade");


}

//calcular_indice_massa_corporal(150, 1.87);

function reverterString(str) {
    var splittedStr = str.split(" ");
    var reverseStr = "";
    for (let i = 0; i < splittedStr.length; i++) {
        for (let j = splittedStr[i].length - 1; j >= 0; j--) {
            reverseStr += splittedStr[i][j];
        }
        reverseStr += " ";
    }
    return reverseStr;
}
var str = "Hoje é Domingo";
var rev = reverterString(str);
//console.log(rev);

function countvogais(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var letra = str[i];
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            count += 1;
        }
    }
    return count;
}

//console.log(countvogais("Hello World"));

function countletras(a, b){
    var a = a.toLowerCase();
    var b = b.toLowerCase();
    var count = 0;
    for (i = 0; i < a.length; i++){
        if(a[i] == b){
            count += 1;
        } 
    }
    return count;
}

//console.log(countletras("Hello World", "O"));

function tempo_de_trabalho(he, me , se, hs, ms, ss){ //Exercício 5
var tse = he*3600 + me*60 + se;
var tss = hs*3600 + ms*60 + ss;
var total = tss - tse;

var resto_horas = total % 3600;
var horas = (total - resto_horas) / 3600;


var resto_minutos = resto_horas % 60;
var minutos = (resto_horas - resto_minutos) / 60;
var segundos = resto_minutos;
//console.log("O trabalhador trabalhou: "+horas + "h:" + minutos +"m:"+segundos+"s");
}

console.log(tempo_de_trabalho(08,00,00,09,02,05));

function retangulo_com_asteriscos(caracter, altura, largura){ //Exercício 6
    var linha = "";
    for (i = 0; i < largura; i++){
        linha += caracter;
    }

    for(j = 0; j < altura; j++){
    console.log(linha);
        }
    }

//console.log(retangulo_com_asteriscos("*", 10, 20));

function triangulos(altura){   //Exercício 7
var caracteres = "";
for (i = 0; i < altura; i++){
    caracteres += "*";
    console.log(caracteres);
}
}
//console.log(triangulos(10));

function caixa_quadrada(tamanho){   //Exercício 8
    var box = "";
    for (let i = 0; i < tamanho; i++){
        for (let j = 0; j < tamanho; j++){
            if (i==0 || i == tamanho -1 || j == 0 || j == tamanho -1){
                box+="*";
            }else{
            box += " ";
            }
        }
        box += "\n";
    }
    console.log(box);
}

//console.log(caixa_quadrada(10));

    var estudante_1 = {nome: "João", nota:18};
    var estudante_2 = {nome: "Rui", nota:15};
    var estudante_3 = {nome: "Cristina", nota:19};
    var estudante_4 = {nome: "Roberto", nota:20};
    var estudante_5 = {nome: "Henrique", nota:8};

    var lista_estudantes = [];
    lista_estudantes.push(estudante_1, estudante_2, estudante_3, estudante_4, estudante_5);


function max(array) {
    var m = array[0].nota;
    var bestStudent = array[0];
    for (let i = 0; i < array.length; i++) 
    {
        if (array[i].nota > m) {
            m = array[i].nota;
            bestStudent = array[i];
        }
    }
    return bestStudent;
}

function min(array) {
    var m = array[0].nota;
    var worstStudent = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].nota < m) {
            m = array[i].nota;
            worstStudent = array[i];
        }
    }
    return worstStudent;
}

function media(lista_estudantes) {
    var soma = 0;
    for (let i = 0; i < lista_estudantes.length; i++){
        soma += lista_estudantes[i].nota;
    }
    var media_notas = soma / lista_estudantes.length;
    return media_notas;
}

function closestToAverage(lista_estudantes){
    var avg = media(lista_estudantes);
    var min = avg;
    var estudante = lista_estudantes[0];
    for (let i = 0; i < lista_estudantes.length; i++){
        var diff = Math.abs(avg - lista_estudantes[i].nota);
        if(diff < min){
            min = diff;
            estudante = lista_estudantes[i];
        }
    }
    return estudante;
}


console.log(("O aluno com a melhor nota é: "),max(lista_estudantes));
console.log(("O aluno com a pior nota é: "),min(lista_estudantes));


function notas_negativas(lista_estudantes){
    var piores_notas = 0;
    for (i = 0; i < lista_estudantes.length; i++){
    if (lista_estudantes[i].nota < 9.5){
        piores_notas++;
    }
}
    return piores_notas;
}

console.log(notas_negativas(lista_estudantes));