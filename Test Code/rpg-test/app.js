const readlineSync = require("readline-sync")
let isAlive = true;

const user = readlineSync.question("Hello Gamer! What is your name? ")
//console.log(user)
const welcome = readlineSync.question(`Welcome ${user} to my RPG game. You are about to set out on a journey through THE DEATH FOREST.`)
const name = readlineSync.question("Before we go any further...What would you like to name your player? ")
//console.log(name)

const random = function(max, min){
    return Math.floor((Math.random()* max)+min)
}

// player information
const player = {
    name: name,
    hp: 100,
    inventory: ["crossbow", "dagger", "axe"]
}

class Player{
    constructor(name= "name",  hp = 100, inventory = []){
        this.name = name,
        this.hp = 100,
        this.inventory = ["crossbow", "dagger", "axe"]   
    }
}
console.log(`${name}, as you travel through the forest you must defend your life agains potential enemies. You are supplied with an inventory of weapons and you will have 100hp.`)

// enemy information
class Enemy{
    constructor(enemyName, enemyHp, enemyPrize){
        this.enemyName = enemyName,
        this.enemyHp = enemyHp,
        this.enemyPrize = enemyPrize
    }
}
const enemy = ["Madara", "Itachi", "Orochimaru"]
// new Enemy name function 
function enemyName(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        return new Enemy("Madara")
    }else if(randomNum === 1){
        return new Enemy("Itachi")
    } else {
        return new Enemy("Orochimaru")
    }
}

// enemy prize function: when enemy is defeated the player gets a prize 
function enemyPrize(){
    const prize = ["gold","food","sword"]
    const randomPrize = randomNum(0, 2)
    const newPrize = prize[randomPrize]
    player.inventory.push(newPrize)
    return newPrize
}

// player gets to choose between walking, printing an inventory or to exit the game.
while(isAlive){
    const option = readlineSync.keyIn("Now that you are all set up for your journey please make your selection: 'w' if you want to Walk, 'p' to print your Inventory, or 'q' to Exit the game.")

    if(option === 'w'){
        walk()
    }else if (option === 'p'){
        inventory()
    }else if(option === q){
        isAlive = false
        console.log("You ended your game. Good Bye!")
    }
}
