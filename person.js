const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)
function Person(name, age){
    this.name = name;
    this.age = age;
};
const person = new Person;
Person.prototype.compareAge = function(person){
    if (this.age > person.age) return `${this.name} is older than`;
    else if (this.age < person.age) return `${this.name} is younger than`;
    else if (this.age === person.age) return `${this.name} the same as`;
}
console.log(p1.compareAge(p2)),
console.log(p2.compareAge(p1)),
console.log(p1.compareAge(p3))