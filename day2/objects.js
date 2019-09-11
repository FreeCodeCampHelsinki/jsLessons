function Person(name,age)
{
    this.nimi=name;
    this.ika=age;
}

Person.prototype.introduce = function(){
    console.log("Moi! Olen " + this.nimi + ". Hauska tavata!")
}

Person.prototype.kuvaus = "Standard description";

var Tiki = new Person("Tiki",46);
var Alina = new Person("Alina", 25);
console.log(Alina.kuvaus);
Tiki.kuvaus = "Pannu mies linttu";
Tiki.nimi = "Tikriti";
Person.prototype.kuvaus = "Non-Standard description";

Tiki.introduce();
Alina.introduce();
console.log(Alina.kuvaus);

Person.prototype.extraStuff = function(){
    console.log("More stuff");
}
// Person.prototype.extraStuff = undefined;
Tiki.extraStuff();