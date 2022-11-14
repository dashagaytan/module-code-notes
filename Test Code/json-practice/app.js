//Setter - save data in local storage (key = value pairs)
localStorage.setItem("name", "maya");
localStorage.setItem("age", 28);
localStorage.setItem("isAlive", true);

// to view items as an array with according value: we use JSON.stringify
    // JSON - Javascript Object Notation
    //JSON.stringify => turning JS into JSON
    // JSON.parse => turns JSON into JS
localStorage.setItem("friends", JSON.stringify(["mark", "bob", "jay"])); 
localStorage.setItem("address", JSON.stringify({street: "123 street", city: "LA"}));

//Getter
const firstName = localStorage.getItem("name")
const age = localStorage.getItem("age")
const isAlive = localStorage.getItem("isAlive")
const friends = JSON.parse(localStorage.getItem("friends"))
console.log(firstName)
console.log(age)
console.log(friends)
console.log(isAlive)

//Remove
localStorage.removeItem("age")

// //NOTE: instead of doing setItem and getItem: 
// localStorage.animal = "dog" // assigns a key and a value 
// console.log(localStorage.animal)