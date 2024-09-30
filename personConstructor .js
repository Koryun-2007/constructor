function Person(name,age){
    this.name = name
    this.age = age
    this.stomach = []
}

Person.prototype.eat = function (food) {
    if(this.stomach.length < 10) this.stomach.push(food)
}
Person.prototype.poop = function(){
    this.stomach = []
}
Person.prototype.toString = function () {
    return `${this.name}, ${this.age}`;
  };

  const mary = new Person("Mary", 50);


mary.eat("apple");
mary.eat("sandwich");
console.log(mary.stomach);

mary.poop()
console.log(mary.stomach)


console.log(mary.toString())
