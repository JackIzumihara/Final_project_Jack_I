let score = 0;
let upgrade = 0;

const scoreDisplay = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgradeDisplay1 = document.getElementById('Upgrade1');
const upgradeDisplay2 = document.getAnimations('Upgrade2');
const upgrade1button = document.getElementById('upgrade1button');
const upgrade2button = document.getAnimations('upgrade2button');

clickerButton.addEventListener('click', function() {
   score+=1
   const currentDisplay = getLevel(score);
    scoreDisplay.textContent = "Score: " + (score);
    console.log("Current Score" + score);
    
  });

  clickerButton.addEventListener('click', function(){
    if (upgrade == 1) {
        score+=1
   const currentDisplay = getLevel(score);
    scoreDisplay.textContent = "Score: " + (score);
    console.log("Current Score" + score);
        }
    if (upgrade == 2){
                score+=2
                const currentDisplay = getLevel(score);
    scoreDisplay.textContent = "Score: " + (score);
    console.log("Current Score" + score);
        }
    if (upgrade == 3){
        score+=3
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 4){
        score+=4
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 5){
        score+=5
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 6){
        score += 6
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 7){
        score += 7
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 8){
        score += 8
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 9){
        score += 9
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 10){
        score += 10
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 11){
        score += 11
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 12){
        score += 12
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 13){
        score += 13
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 14){
        score += 14
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 15){
        score += 15
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 16){
        score += 16
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 17){
        score += 17
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 18){
        score += 18
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade == 19){
        score += 19
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
    if (upgrade >= 20){
        score += 20
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    }
  })


upgrade1button.addEventListener('click', function(){
    if (score >= 10){
        upgrade +=1;
        score -= 10;
        const currentDisplay = getLevel(score);
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
        const currentDisplay = getLevel2(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
        upgradeDisplay1.textContent = "Upgrade Level: " + upgrade;
        console.log("+10 Upgrade level");
    }

})





MainButton.addEventListener("click", function(){
    AddScore();
})

MainButton.addEventListener("click", function(){
    AddScore();
})

function getLevel(score){
    return Math.floor(score/10)
}

function getLevel2(score){
    return Math.floor(score/100)
}