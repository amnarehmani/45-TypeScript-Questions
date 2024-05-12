// Question no: 45



function carInfo(manufacturer:string , model:string , ...options: {[key:string]: any} []){

    let carInfo = {
        manufacturer : manufacturer,
        model: model,
        ...Object.assign({}, ...options)
    }
    return carInfo

}

let carPrint = carInfo("Civic" , "Tesla" , {color: "black"},{features:["navigation" , "Power Window"]});

console.log(carPrint)
