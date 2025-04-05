let score = 1;

function AddScore(score){
    score += 1;
    console.log(score);
}

MainButton.addEventListener("click", function(){
    AddScore();
})