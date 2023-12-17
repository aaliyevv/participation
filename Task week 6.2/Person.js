function Person(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);
}

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

Person.prototype.age = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth.getFullYear();
};

Person.prototype.toString = function() {
    return `${this.fullName()} is ${this.age()} years old!`;
};

class Employee extends Person {
    constructor(firstName, lastName, dateOfBirth, position) {
        super(firstName, lastName, dateOfBirth);
        this.position = position;
    }

    static welcomeMessage() {
        return "Welcome to our company!";
    }
}

const john = new Person("John", "Doe", "1990-01-01");
alert(john.toString());

alert(Employee.welcomeMessage());