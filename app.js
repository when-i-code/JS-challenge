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

// function changeColor() {
//     console.log('it clicked')
//     document.querySelector('h1').style.color = 'red'
// }

// const sum = (a, b) => (a + b > 100) ? true : false
// // function sum(a, b) {
// //     if (a + b > 100) {
// //         return true;
// //     } return false; }
// // }

// console.log(sum(50, 2))

// const isZero = x => x <= 0 ? true : false
// console.log(isZero(-100))

// const isItTrue = x => !x
// console.log(isItTrue(false))

// const isItZero = x => x!== 0
// console.log(isItZero(0))

// const calcRemainder = (a, b) => a % b
// console.log(calcRemainder(7, 8))

// const isOdd = x => x % 2 !== 0
// console.log(isOdd(15))

// const returnOne = x => x % 2 === 0 ?  1 :  -1
// console.log(returnOne(-5))

// const loggedIn = (a, b) => a == "LOGGED_IN" || b == "SUBSCRIBED"
// console.log(loggedIn('LOGGED_IN', 'SUBSCRIBEDs'))
// document.querySelector('.no__results').innerHTML = `No results for ${search}. Please try another movie.`

// const isItFalsy = (a, b) => a == false ? a : b /* or !a*/
// console.log(isItFalsy(true, 'Dog'))

// const arrLength = arr => arr.length
// console.log(arrLength([]))
// let sum = 0
// function arrSum(arr) {
//     for (i=0; i< arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(arrSum([0, 1, 2, 1, 0]))

// let sum = 0

// function progressiveSum(num) {
//     for (i=0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(progressiveSum(2))
// let min = 0
// let sec = 0

// function calcTime(time) {
//     min = Math.floor(time/60)
//     sec = time%60
//     if (min.toString().length == 1 && sec.toString().length == 1){
//         return `Time is 0${min}:0${sec}`
//     } else if (min.toString().length > 1 && sec.toString().length == 1){
//         return `Time is ${min}:0${sec}`}
//       else if (min.toString().length == 1 && sec.toString().length > 1){
//         return `Time is 0${min}:${sec}`}
//     else {
//         return `Time is ${min}:${sec}`
//     }
// }
// console.log(calcTime(8))

// function calcTime(time) {
//     let min
//     let sec

//     min = Math.floor(time / 60)
//     sec = time % 60

//     if (sec < 10) {
//       sec = "0" + sec
//     }
//     if (min < 10) {
//       min = "0" + min
//     }

//     return `Time is ${min}:${sec}`
//   }
//   console.log(calcTime(805))

// let arr = [5, 100, 0, 111, 3, 0, -400, 125, 108]
// function getMax(a, b) {
//     return a - b
// }
// arr = arr.sort(getMax).pop()

// console.log(arr)

// let newString = ''
// function reverseString(string) {
//     // for( i = (string.length - 1); i >= 0 ; i--) {
//     //     newString += string[i]
//     // }
//     // return newString
//     return string.split('').reverse().join('')
// }
// console.log(reverseString('abc'))

// let arr = [1, 2, 3]
// let zeroArr = arr.map(turnToZero)
// function turnToZero(num) {
//     return num * 0
// }
// console.log(zeroArr)

// let arr = ["abc", "def", "Apple", "ijk", "last"];
// function noApples(val) {
//     return val != 'Apple'
// }
// console.log(arr.filter(noApples))

// let newArr = []
// let original = []
// function noApples(val) {
//   original = val
//   console.log('this is original: ' + val)
//   for (i = 0; i < val.length; i++) {
//     if (val[i] !== "Apple") {
//       newArr.push(val[i]);
//     }
//   }
//   return ` New array is ${newArr} and old one is ${original}`;
// }
// console.log(noApples(["1", "2", "Apple", "3", "4"]))

// function noApples(arr) {
//   return arr.filter(string => string !== 'Apples')
// }
// console.log(noApples(["1", "2", "Apple", "3", "4"]))

// function noFalsy (value) {
//   return value.filter(elem => elem)
// }
// console.log(noFalsy(["", [], 0, null, undefined, "0"]))
// console.log(noFalsy(['Tomato', 'Orange', false, 'Banana','', null, 'Cherry']))

// function noFalsyy(val) {
//   let newArr =[]

//   for( i=0; i<val.length; i++) {
//     if(!!val[i] === true) {
//       newArr.push(val[i])
//     }
//   }
//   return newArr
// }
// console.log(noFalsyy(["", [], 0, null, undefined, "0"]))

// let val = ['Adriana', 0, 500, "", 'dog', null]
// val = val.map(elem => !!elem)

// console.log(val)

// function turnToBoolean(val) {
//   return val.map(elem => !!elem)
// }
// console.log(turnToBoolean(['Adriana', 0, 500, "", 'dog', null]))

function toStars(y) {
  let stars = [];
  for (i = 1; i <= y; i++) {
    stars.push(i);
  }
  return stars.map((elem) => "*").join("");
}

// function showRating(x) {
//   if (Number.isInteger(x)) {
//     console.log(`number ${x} is integer`)
//   }
//   else console.log(`number ${x} is not integer`)
// }
let stars = [];
function showRating(x) {
  if (Number.isInteger(x)) {
    for (i = 1; i <= x; i++) {
      stars.push(i);
    }
    return stars.map((elem) => "*").join("");
  } else {
    let starsPlus
    let integer = parseInt(x)
    for (j=1; j<=integer; j++) {
      stars.push(j);
    }
    return starsPlus = stars.map((elem) => "*").join("") + '.'
  }
}
console.log(showRating(0.5));
