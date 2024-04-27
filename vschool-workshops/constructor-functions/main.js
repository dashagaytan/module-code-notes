/* ES5 function expression*/ 

function Personalbar(name, age) {
    this.age = age;
    this.printProfile = function(){
        console.log("name ", name)
    }
}