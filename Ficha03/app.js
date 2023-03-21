function started(){
    console.log("Download STARTED!");
}

function update(progress){
    console.log(progress + "% COMPLETED");
}

function completed(){
    console.log("Download COMPLETED!");
}

function performDownload(fn_s, fn_u, fn_c){
    fn_s();

    for (i = 0; i <= 100; i++) {
        fn_u(i);
    }

    fn_c();
}

performDownload(started, update, completed); //Estas 3 funções são chamadas de modo a que fn_s, fn_u e fn_c tenham valor de started, update e completed

var ArrayUtils = require('./ArrayUtils.js');
var TestUtils = require('./TestUtils.js');
var array = [1,2,3,4,9];
var array2 = [2,3,5,7,1];
var empty = ArrayUtils.isEmpty(array);
console.log(ArrayUtils.maximum(array));
console.log(ArrayUtils.minimum(array));
console.log(ArrayUtils.average(array));
console.log(ArrayUtils.indexOf(array, 9));
console.log(ArrayUtils.subArray(array, 1, 3));
console.log(ArrayUtils.isSameLength(array, array2));
console.log(ArrayUtils.reverse(array));
console.log(ArrayUtils.swap(array, 0, 2));
console.log(ArrayUtils.contains(array, 2));
//console.log(ArrayUtils.concatenate(array, array2));

function Person(firstname){
    this.firstname = firstname;
}

var p = new Person("David");

Person.prototype.greet = function(){
    return "Hello" + this.firstname;
}

var p1 = new Person("Ana");

console.log(p1.greet());