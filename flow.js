var x = 5;
var y = 11;

if(x === y && (x < 10 || y > 100))
{
    console.log("True");
}
// else if(y > 10)
// {
//         console.log("Lalalala")
// }
else
{
    console.log("False");
}

//MATH OPERATORS
// () Brackets
// % Modulo
// / Divide
// * Multiply
// + Add
// - Subtract

var result = ((212 - 32) * 5) / 9;
console.log(result + " celcius")

var something = 2;
console.log(something *= 3);//something = something + 3
console.log(++something);//add 1 before

var selection = 30;

switch(selection)
{
    case 1: console.log('Hello');
    break;
    case 2: console.log('Namaste');
    break;
    case 3: console.log('Privet');
    break;
    case 4: console.log('Morias');
    break;
    case 5: console.log('Ciao');
    break;
    default: console.log('WTF!!!')
}