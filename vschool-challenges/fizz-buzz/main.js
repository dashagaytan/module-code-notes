function fizzBuzz(n) {
    // Your code here
    const result = [];
    for (let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz")
        } else if(i % 3 === 0){
            result.push("Fizz")
        } else if(i % 5 === 0){
            result.push("Buzz")
        } else{
            result.push(i)
        }
    }
    return result;
}

console.log(fizzBuzz(15)); // Expected output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
console.log(fizzBuzz(10)); // Expected output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]