function calculateGrade(gp, gt){
    var grade = gp * 0.6 + gt * 0.4;
    if (grade >= 9.5){
        console.log("Aprovado");
    }else{
        console.log("Reprovado");
    }
}

//calculateGrade(12,16);


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

numeromes(1)

