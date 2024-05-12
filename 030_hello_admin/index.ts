// Question no: 30

let usrNames = ["Amna" , "Ayesha" , "Vaniya" , "Shaista" ,"Admin"];
usrNames.forEach(oneuser => {
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a report?`)
    }
    else{
        console.log(`Hello ${oneuser}, thank you for logging in again`)
    }
})