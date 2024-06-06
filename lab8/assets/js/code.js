// Exercise 1:
String.prototype.filter = function(bannedWords) {
    console.log(this)
    return this.split(' ').filter(word => !bannedWords.includes(word)).join(' ');
};

// Exercise 2:
Array.prototype.bubbleSort = function() {
    const len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (this[j] > this[j + 1]) {
                const temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};

// Exercise 3:
var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject) {
    return this.name + " is now teaching " + subject;
}
