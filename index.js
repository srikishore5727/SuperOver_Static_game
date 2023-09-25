const strike = document.getElementById("strike");
const resetButton = document.getElementById("reset");
const team1_superover =document.getElementById("team1-superover");
const team2_superover = document.getElementById("team2-superover");
const score_team1 = document.getElementById("score-team1")
const score_team2 = document.getElementById("score-team2")
const wickets_team1 = document.getElementById("wickets-team1");
const wickets_team2 = document.getElementById("wickets-team2");
const strikeSound = new Audio("http://bit.ly/so-ball-hit");
const cheerSound = new Audio("http://bit.ly/so-crowd-cheer");

strike.addEventListener("click",updateScore);

let arr = [0,1,2,3,4,5,6,"W"];
let team1Balls = 0;
let team1Wickets = 0;
let team2Balls = 0;
let team2Wickets = 0;
let team1Score =0;
let team2Score = 0;
let type = 1;

//function to end game

function endGame(){
    cheerSound.play();
    if(team1Score>team2Score){
        alert("TEAM 1 WON").break();
    }else if(team1Score<team2Score){
        alert("TEAM 2 WON").break();
    }else{
        alert("MATCH TIE").break();
    }
}

function displayScore(){
    score_team1.innerText=team1Score;
    score_team2.innerText=team2Score;
    wickets_team1.innerText = team1Wickets;
    wickets_team2.innerText = team2Wickets;
    
}
function updateScore(){
    strikeSound.pause();
    strikeSound.currentTime=0;
    strikeSound.play();
    let currScore = arr[Math.floor(Math.random()*8)];
    
resetButton.onclick = () => {
    window.location.reload();
};

if(type==2){
    team2Balls++;
    team2_superover.children[team2Balls-1].innerText=currScore;
    if(currScore=="W"){
        team2Wickets++;
    }
    else{
        team2Score += currScore;
    }
    if(team2Balls==6 || team2Wickets==2){
        type=3;
        const id = setTimeout(()=>{
            endGame();
        },1000)
    // displayScore()
    }

    }

    if(type==1){
        team1Balls++;
        team1_superover.children[team1Balls-1].innerText = currScore;

        if(currScore=="W"){
            team1Wickets++;
        }else{
            team1Score+=currScore;
        }
        if(team1Balls==6 || team1Wickets==2){
            type=2;
        }

    }
    displayScore();

 
}
