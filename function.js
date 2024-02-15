var person={
    name: "yvonne ",
    age: 30,
    location:"kacyiru",
    weight:54,

     myFunction : function(namee){
this.name=namee;
return this.name;

    }
};

// this will change the name called yvonne to Yvonnr izerimana
let change=person.myFunction("Yvonne izerimana");
console.log(change);


// this return all keys and value of object
console.log(person);

//thi line delete weight from objects
console.log(delete person.weight);

