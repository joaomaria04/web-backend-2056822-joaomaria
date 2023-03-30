
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};
 
Person.prototype.greet = function(){
    console.log ("Hello "+this.firstName+ " "+ this.lastName+ " e tem "+ this.age + " anos.");
}

Person.prototype.age = 18;

module.exports = Person;

