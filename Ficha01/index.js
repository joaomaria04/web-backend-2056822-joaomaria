function calculateGrade(gp, gt){
    var grade = gp * 0.6 + gt * 0.4;
    if (grade >= 9.5){
        return true;
    }else{
        return false;
    }
}

var approval = calculateGrade(12,16);
calculateGrade(8,8);
calculateGrade(12,10);
calculateGrade(11,19);
