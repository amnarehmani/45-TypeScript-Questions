// Question no: 42


function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));

};

function great(magicians:string[]){
 return  magicians.map(name => `The Great ${name}`)
};

let magiciansNames = ["Harry Potter" , "Docter Strange" , "Zatanna"];


let greatMagicians = great(magiciansNames);

show_magicians(greatMagicians)