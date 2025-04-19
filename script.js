let score = 0;
let upgrade = 1;

const scoreDisplay = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgradeDisplay1 = document.getElementById('Upgrade1');
const upgradeDisplay2 = document.getElementById('Upgrade2');
const upgrade1button = document.getElementById('upgrade1button');
const upgrade2button = document.getElementById('upgrade2button');

clickerButton.addEventListener('click', function() {
   score += upgrade
    scoreDisplay.textContent = "Score: " + (score);
    console.log("Current Score" + score);
    
  });


upgrade1button.addEventListener('click', function(){
    if (score >= 10){
        upgrade +=1;
        score -= 10;
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    upgradeDisplay1.textContent = "Upgrade level:" + upgrade;
    console.log("+1 upgrade level");
    }
    
        
})

upgrade2button.addEventListener('click', function(){
    if (score >= 100){
        upgrade += 10;
        score -= 100;
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
        upgradeDisplay1.textContent = "Upgrade Level: " + upgrade;
        console.log("+10 Upgrade level");
    }

})


