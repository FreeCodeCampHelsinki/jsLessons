var mystr = "Tiki said \"Hoogah boogah\"";

//var mystr = new String("")
// console.log(mystr.toUpperCase());

String.prototype.whatever = function(){
    console.log("Doing whatever");
    return "Blah";
}

var yourstr = ". Lalalalala";

console.log(mystr.concat(yourstr));