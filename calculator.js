let num1= 8
let num2= 2
let sumEl=document.getElementById("sum-el")
document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent= num2


function addbtn(){
   added= num1+num2
   sumEl.textContent= "Sum: "+added
}

function subbtn(){
    subtracted= num1-num2
    sumEl.textContent= "Sum: "+subtracted
}

function divbtn(){
    divided= num1/num2
    sumEl.textContent= "Sum: "+divided
}

function mulbtn() {
    multiplied= num1*num2
    sumEl.textContent= "Sum: "+ multiplied
}