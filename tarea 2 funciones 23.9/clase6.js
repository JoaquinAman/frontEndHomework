var List = require("collections/list");

const listOfPersons = [
    {
        nombre : "Edgar",
        edad : 30
    },
    {
        nombre : "Xochi",
        edad : 22
    },{
        nombre : "Jose Angel",
        edad : 29
    },{
        nombre : "Diego",
        edad : 26
    },
    {
        nombre : "Esteban",
        edad : 18
    },{
        nombre : "Joaquin",
        edad : 28
    }
]

const getEdad = (listOfPersons) => {

    let edades = listOfPersons.map(elem => elem.edad)

    let finalMinEdad = Math.min(...edades);

    let finalMaxEdad = Math.max(...edades);

    const edadObj = {
        minEdad : finalMinEdad,
        maxEdad : finalMaxEdad
    }

    return edadObj
}

console.log(getEdad(listOfPersons))

var list = new List([1, 2, 3]);
list.splice(1, 1, 6, 5);
// [2]

console.log(list)

list.toArray();
// [1,6,5,3]

console.log(list)