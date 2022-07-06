// // console.log('It works');

// /* function hoursToSec (num) {
//     return num*3600;
// };

// console.log(hoursToSec(24)); */

// /* function calcPermimeter(length, witdth) {
//     return 2*length+2*witdth;
// }
// console.log(calcPermimeter(20,10))*/

// /* function plusFrontend(name) {
//     return name + "Frontend";
// }
// console.log(plusFrontend('Apple')); */

// // function sum(a){
// //     return a===0;
// // }

// // console.log(sum(-1));

// let cash = 20
// let price = 40
// let isStoreOpen = true
// cash>=price && isStoreOpen ? console.log('receipt printing') : console.log('cannot print receipt')

/* let count = 1
while (count <= 100) {
    console.log('number is: ' + count)
    count = count + 1

} */

// let string = "Frontend Simplified"
// //let stringLength = string.length

// for(i=0; i< string.length; i++) {
//     console.log(`This is the number ${i}  of the string, and its correspinding letter is: ${string[i]}`)
// }

// let arr = [20,30,40,50,100]
// let newArr = arr.filter((elem)=> {
//     console.log(elem)
//     return true
// })
// console.log(newArr)

// let grades = ['A', 'FAIL', 'FAIL']
// let filteredGrades = grades.filter(comp => comp!='FAIL')
// console.log(filteredGrades)

// let dollars = [1, 5, 10, 3]
// // let cents = dollars.map(i => i*100)
// // console.log(cents)
// let cents = []
// for (i=0; i < dollars.length; i++){
//     cents.push(dollars[i]*100);
// }
// console.log(cents);

// let users = [
//     {
//         name: "Adriana",
//         email: "eadre@ss",
//         password: "adsadsdsa"
//     },
//     {
//         name: "dhashdsh",
//         email: "ea@sdasddress",
//         password: "adpassssadsdsa"
//     }
// ]
// function register(name, email, password) {
//     let newUser = {
//         name: name,
//         email: email,
//         password: password
//     }
//         users.push(newUser)
// }
// register("Adasda", "asasd", "asdasdas")
// console.log(users)


function changeColor() {
    console.log('it clicked')
    document.querySelector('h1').style.color = 'red'
}

const sum = (a, b) => (a + b > 100) ? true : false
// function sum(a, b) {
//     if (a + b > 100) {
//         return true;
//     } return false; }
// }

console.log(sum(50, 2))