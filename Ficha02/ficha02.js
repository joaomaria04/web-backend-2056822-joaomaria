function calcular_indice_massa_corporal(peso, altura){      //Exercício 1
var imc = peso/(altura)**2;
console.log("O seu indice de massa corporal é de: ",imc)
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

function reverterString(str){
    var splittedStr = str.split(" ");
    var reverseStr = "";
    for (let i = 0; i < splittedStr.length; i++) {
        for (let j = splittedStr[i].length - 1; j >= 0; j--) {
            reverseStr += splittedStr[i][j];
        }
        reverseStr+= " ";
    } 
    return reverseStr;
}
var str = "Hoje é Domingo";
var rev = reverterString(str);
console.log(rev);