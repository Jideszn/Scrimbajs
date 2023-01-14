let firstHand= 9;
let secondHand= 4;
let sum= firstHand+secondHand

if (sum > 21){
    console.log("Do you want to pick another card?")
}

else if(sum === 21){
    console.log("You've won $40Million")
}

else (sum < 21){
    console.log("You lost bitch!")
}