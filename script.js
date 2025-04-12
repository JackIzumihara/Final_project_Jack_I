let score = 0;
let upgrade = 0;

const scoreDisplay = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgradeDisplay = document.getElementById('Upgrade1');
const upgrade1button = document.getElementById('upgrade1button');
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
        
    }
  })
upgrade1button.addEventListener('click', function(){
    if (score >= 10){
        upgrade +=1;
        score -= 10;
        const currentDisplay = getLevel(score);
        scoreDisplay.textContent = "Score: " + (score);
        console.log("Current Score" + score);
    upgradeDisplay.textContent = "Upgrade 1 level:" + upgrade;
    console.log("Upgrade 1 level");
    }
        
})


MainButton.addEventListener("click", function(){
    AddScore();
})

function getLevel(score){
    return Math.floor(score/10)
}