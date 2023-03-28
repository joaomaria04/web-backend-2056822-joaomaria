/*
var str = '{"name":"Ana","age":38,"gender":"F"}';
var personObj = JSON.parse(str);

var Person = require('./person.js');

var pessoa1 = new Person ("João", "Maria");
var pessoa2 = new Person ("Juan", "Pablo");

pessoa1.age = 89;
pessoa1.greet();
pessoa2.greet();
console.log(pessoa1.__proto__ == pessoa2.__proto__);

*/


var Emitter = require('./emitter');
var emitter = new Emitter();

var config = require('./config');

emitter.on(config.events.LOGIN, function(){
    console.log("LOGIN 1");
});

emitter.on(config.events.LOGIN, function(){
    console.log("LOGIN 2");
});

emitter.emit(config.events.LOGIN);