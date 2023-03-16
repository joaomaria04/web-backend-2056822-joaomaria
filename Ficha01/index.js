function calculateGrade(gp, gt){
    var grade = gp * 0.6 + gt * 0.4;
    if (grade >= 9.5){
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }
}

function numeromes(num_mes) {
    switch (num_mes) {
        case 1:
            console.log("Janeiro"); 
            break;
        case 2:
            console.log("Fevereiro"); 
            break;
        case 3:
            console.log("Março"); 
            break;
        case 4:
            console.log("Abril"); 
            break;    
        case 5:
            console.log("Maio"); 
            break;  
        case 6:
            console.log("Junho"); 
            break; 
        case 7:
            console.log("Julho"); 
            break; 
        case 8:
            console.log("Agosto"); 
            break; 
        case 9:
            console.log("Setembro"); 
            break; 
        case 10:
            console.log("Outubro"); 
            break;    
        case 11:
            console.log("Novembro"); 
            break;    
        case 12:
            console.log("Dezembro"); 
            break; 
        default:
            console.log("Mês inexistente"); 
            break;
    }

}

function operadores(num1, num2, operador){
    if (operador == "+"){
        return num1 + num2;
    }
    else if (operador == "-"){
        return num1 - num2;
    }
    else if(operador == "*"){
        return num1 * num2;
    }
    else if(operador == "/"){
        return num1 / num2;
    }
    else if(operador == "^"){
        return Math.pow(num1, num2);
    }
}

function multiplosde5(multiplo, limite){
    for(i = 0; i <= limite; i+=multiplo){
        console.log(i);
    }
}

function soma100(){
    sum = 0
    for(i=1; i<=100; i++){
        sum += i;
    }
    return sum;
}

function factorial(numero){
    fact = 1
    for(i=2; i <= numero; i++){
        fact *= i;
    }
    return fact;
}

function minimum(array_nums){
   var min = array_nums[0];
    for (i = 1; i < array_nums.length; i++){
        if (array_nums[i] < min){
            min = array_nums[i];
        }
    }
    return min;
}

function maximum(array_nums){
    var max = array_nums[0];
    for (i = 1; i < array_nums.length; i++){
        if (array_nums[i] > max){
            max = array_nums[i];
        }
        return max;
    }
}


//console.log(maximum([2, 7, 3, 0, 1]))
//console.log(minimum([2, 7, 3, 0, 1]))
//console.log(factorial(5))
//console.log(soma100())
//multiplosde5(5,20)
//console.log(operadores(10,10,"^"))
//calculateGrade(12,16);
