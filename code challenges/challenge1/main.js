const { isPlainObject } = require("template-helpers/lib/helpers/object");

function addTwoNumbers(a,b){
    return a+b;
}
console.log(addTwoNumbers(3,4)); 

//palindrome
function isPalindrome(str){
    //create an arr
    //split an array
    //reverse an array
    //join it back together
    const arr = str.split('').reverse('').join('');
    return arr
}
console.log(isPalindrome("pop"))


// duplicates 
function removeDuplicates(inputArray){

}

console.log(removeDuplicates([1,2,3,4,3,2,1]))