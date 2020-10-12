let maxRollsInput = document.querySelector('#max-rolls');
let rollButton = document.querySelector ('#roll-submit');
let resultsButton = document.querySelector('#roll-results');
let Total = document.querySelector('.Totals');

let resetButton = document.querySelector('#reset-button');

let resultsContainer=document.querySelector('#results-container');
let rollsArray = [];

function rollRandomNumber() {
    let dice =  Math.floor(Math.random()*7) + 1;
    return dice;
}

rollButton.addEventListener("click",function()  { 
    let maxRolls = Number(maxRollsInput.value);
    let count = 0;
    console.log(maxRolls)
    let total = 0;
    
    
    while(count < maxRolls) {
        rollsArray.push(rollRandomNumber());
        total += rollsArray[count]
        console.log(count);
        Total.innerHTML = total
        count++;
    }
})

resultsButton.addEventListener("click", function() {
    let count = 0

    resultsContainer.innerHTML="";
    while (count<rollsArray.length) {
        resultsContainer.innerHTML += "<li>" + rollsArray[count] + "</li>"
        
        count ++;

    }
})

resetButton.addEventListener("click", function()  {
    

maxRollsInput.value = 0
Total.innerHTML = ""
resultsContainer.innerHTML = ""
    
    
})