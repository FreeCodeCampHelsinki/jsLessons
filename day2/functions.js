function doSomething(param1,param2='blah')
{
    console.log(param1 + param2 + "Doing something with ");
}

function add(x,y)
{
    var z = x + y;
    return x<y;
    console.log('Bye-bye');
}

var returnVal = doSomething("Tiki","Oh Bahave!");
console.log(returnVal);
// doSomething(100,200);
// doSomething("dinner");

var result = add(5,6);
console.log(result);

var fx = function(){
    console.log('Anonymous function');
}

function funky(a)
{
    return function(b){
        return a+b;
    }
}

var startwith20 = funky(20);
var startwith5 = funky(5);
console.log(startwith20(5));
console.log(startwith20(16));