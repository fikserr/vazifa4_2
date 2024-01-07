// let meva = []

// while (true) {
//     let javob = prompt("Yoqtirgan mevangizni kiriting")
    
//     if (javob == 'stop'){
//         break
//     }else{
//         meva.push(javob)
//         console.log("meva kiritmadingiz");
//     }
   
// }
// console.log(meva);

// else if(meva[0] == javob){
//     meva.unshift()
//     meva.indexOf((javob))
//     alert("Siz bu mevani kiritgansiz");
// }


// let meva = []

// for (let i = 0; i < Infinity; i++) {
//     let javob = prompt("Yoqtirgan mevangizni kiriting")
//     meva.push(javob)
//     if (javob == 'stop'){
//         break
//     } else if(meva[] == javob){
        
//     alert("Siz bu mevani kiritgansiz");
//     break
//     }else{
//         console.log("Siz meva kiritmadingiz");
//     }
// }
// console.log(meva);


let meva = [];

while (true) {
    let javob = prompt("Yoqtirgan mevangizni kiriting");
    
    if (javob === 'stop') {
        break;
    } else if (meva.indexOf(javob) !== -1) {
        alert("Siz bu mevani avval kiritgansiz");
        break;
    } else {
        meva.push(javob);
        console.log("Siz meva kiritmadingiz");
    }
}

console.log(meva);
