let score = 0;
let upgrade = 0;
const scoreDisplay = document.getElementById('score');
const clickerButton = document.getElementById('clicker');
const upgradeDisplay = document.getElementById('Upgrade1');
const upgrade1button = document.getElementById('upgrade1button');
clickerButton.addEventListener('click', function() {
   score+=1
   const currentDisplay = getLevel(score);
   upgradeDisplay.textContent = "Level:" + currentDisplay;
    scoreDisplay.textContent = "Score: " + (score + 1);
    console.log("Current Score" + score);

  });
upgrade1button.addEventListener('click', function(){
    upgrade +=1;
    upgradeDisplay.textContent = "Upgrade 1 level:" + upgrade;
    console.log("Upgrade 1 level")
})

MainButton.addEventListener("click", function(){
    AddScore();

    Upgrade1.addEventListener('click', function(){
        AddUpgrade();
    })
})

function getLevel(score){
    return Math.floor(score/10)
}