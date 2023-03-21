module.exports = {
    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        } else {
            return false;
        }
    },
    maximum: function (array) {
        var max = array[0];
        for (i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    },
    minimum: function (array) {
        var min = array[0];
        for (i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    },
    average : function (array) {
        var soma = 0;
        for (let i = 0; i < array.length; i++){
            soma += array[i];
    }
    var media_notas = soma / array.length;
    return media_notas;
    },
    indexOf : function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if(array[i] == value)
            return i;
        }
        return -1;
    },
    subArray : function(array, startindex, endindex) {
        var sub = [];
        for(let i = startindex; i <= endindex; i++) {
            sub.push(array[i]);
        }
        return sub;
    },
    isSameLength : function(array, array2) {
        if (array.length == array2.length) {
            return true;
        }else{
            return false;
        }
    },
    reverse : function(array) {
        ultimoElemento = array[0]
        for (i = 0; i < array.length; i--) {
            return array;
        }
    },
    swap : function(array, i1, i2) {
        var tmp = array[i1];
        array[i1] = array[i2]; 
        array[i2]= tmp;
        return array;
    },
    contains : function (array, value) {
        return this.indexOf(array, value) != -1;
    },
    concatenate : function(array, array2) {
        for (let i = 0; i < array.length; i++) {
            array.push(array2[i]);
        }
        return array;
    } 
};

