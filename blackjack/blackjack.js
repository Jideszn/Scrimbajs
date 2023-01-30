let firstHand= 9;
let secondHand= 4;
let sum= firstHand+secondHand
let hasBlackjack =false
let isAlive = true
let message = ""

if (sum <= 20){
    console.log(message)
}

else if(sum === 21){
    console.log("You've won $40Million")
    hasBlackjack=true
}

else (){
    console.log("You lost bitch!")
    isAlive = false
}