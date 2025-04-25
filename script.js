let score = 0;
let upgrade = 1;

const scoreDisplay = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgradeDisplay = document.getElementById('Upgrade1');
const upgrade1button = document.getElementById('upgrade1button');
const upgrade2button = document.getElementById('upgrade2button');
const upgrade3button = document.getElementById('upgrade3button');
const upgrade4button = document.getElementById('upgrade4button');
const upgrade5button = document.getElementById('upgrade5button');


clickerButton.addEventListener('click', function() {
   score += upgrade
    scoreDisplay.textContent = "Diamonds mined: " + (score);
    console.log("Current Score" + score);
    
  });


upgrade1button.addEventListener('click', function(){
    if (score >= 10){
        upgrade +=1;
        score -= 10;
        scoreDisplay.textContent = "Diamonds mined: " + (score);
        console.log("Current Score" + score);
    upgradeDisplay.textContent = "Upgrade level:" + upgrade;
    console.log("+1 upgrade level");
    }
    
        
})

upgrade2button.addEventListener('click', function(){
    if (score >= 500){
        upgrade += 10;
        score -= 500;
        scoreDisplay.textContent = "Diamonds mined: " + (score);
        console.log("Current Score" + score);
        upgradeDisplay.textContent = "Upgrade Level: " + upgrade;
        console.log("+10 Upgrade level");
    }

})

upgrade3button.addEventListener('click', function(){
    if (score >= 10000){
        upgrade += 500;
        score -= 10000;
        scoreDisplay.textContent = "Diamonds mined: " + (score);
        console.log("Current Score" + score);
        upgradeDisplay.textContent = "Upgrade Level: " + upgrade;
        console.log("+500 Upgrade level");
    }
})

upgrade4button.addEventListener('click', function(){
    if (score >= 100000){
        upgrade += 1000;
        score -= 100000;
        scoreDisplay.textContent = "Diamonds mined: " + (score);
        console.log("Current Score" + score);
        upgradeDisplay.textContent = "Upgrade Level: " + upgrade;
        console.log("+1000 Upgrade level");
    }
})

upgrade5button.addEventListener('click', function(){
    if (score >= 1000000){
        upgrade += 15000;
        score -= 1000000;
        scoreDisplay.textContent = "Diamonds mined: " + (score);
        console.log("Current Score" + score);
        upgradeDisplay.textContent = "Upgrade Level: " + upgrade;
        console.log("+15000 Upgrade level");
    }
})
