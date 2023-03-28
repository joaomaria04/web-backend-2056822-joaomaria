class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 0;
        this.greet = function () {
            return this.firstName + " " + this.lastName;
        };
    }
}


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}; 

 
Person.prototype.greet = function(){
    console.log ("Hello "+this.firstName+ " "+ this.lastName+ " e tem "+ this.age + " anos.");
}

Person.prototype.age = 18;

module.exports = Person;




var events = {prop: [], test: {}};

var x = events.prop;
var z = events.test;
