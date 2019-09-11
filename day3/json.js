var jsonobj = {
    id:22,
    name:"JSON Object",
    doSomething:function()
    {
        console.log("Doing something");
    }
};

jsonobj.doSomething();
console.log(jsonobj.name);

function Student()
{
    this.id = 0;
}

Student.prototype.details = {
    name:'',
    desc:''
};

var tiki = new Student();

tiki.details.name = "Tiki Shabudin";

console.log(tiki.details.name);