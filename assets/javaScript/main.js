let maxRollsInput = document.querySelector('#max-rolls');
let rollButton = document.querySelector ('#roll-submit');
let resultsButton = document.querySelector('#roll-results');

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
    rollsArray = [];
    
    while(count < maxRolls) {
        rollsArray.push(rollRandomNumber())
        count++;
        console.log(count);
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