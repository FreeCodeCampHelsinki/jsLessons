var list = ['Apple','Bananas','Pears','Grapes','Durians'];

// var list = new Array(1,2,3,4,5);
list[0] = 'Apples';
// for(var i = 0; i < list.length; i++)
// {
//     console.log(list[i]);
// }

// for(var item of list)
// {
//     console.log(item.toUpperCase());
// }
list.push("Manggoes","Rambutans","Papayas");
list.pop();
list.splice(4,2);
list.splice(1,0,"Ananas","Mandriini");
list.splice(3,3,"monkey fruit","dragon fruit","Watermelons")

list.forEach(function(item){
    console.log(item);
});
