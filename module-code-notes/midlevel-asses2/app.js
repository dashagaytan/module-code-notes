// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them

function oneWordOnly(words){
// return words.filter(word => word.indexOf(" ") === -1)
return words.filter(word => !word.includes(" "))
}


console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]

// const str= "hello"
// console.log(str.includes("f"))
// console.log(str.indexOf("f"))

// const a = 4 
// const b = 5
// const c =  a+b

// const d = 6
// const e = 10
// const f = d+e

// // function defintion
// function sum(a, b) {
//     return a-b

// }

// function call
// console.log(sum(3,4))
// console.log(sum(4,5))
