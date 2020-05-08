
//STILL WORKING ON COUNTER RESETS

let teamOneShotsNum = document.querySelector("#teamone-numshots");
let teamOneShotbutton = document.querySelector("#teamone-shoot-button");
let teamTwoShotsNum = document.querySelector("#teamtwo-numshots");
let teamTwoShotbutton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button")
let resetNumber = document.querySelector("#num-resets")
let teamOneGoals = document.querySelector(" #teamone-numgoals");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals");


teamOneShotbutton.addEventListener("click", function (){
    let NewTeamOneTally = Number(teamOneShotsNum.innerHTML) + 1;
    teamOneShotsNum.innerHTML = NewTeamOneTally;


    


   

    if (NewTeamOneTally === Math.floor(Math.random() * 10)+1){
        let teamOneGoalTally = Number(teamOneGoals.innerHTML) + 1
        teamOneGoals.innerHTML = teamOneGoalTally;}
    
})



teamTwoShotbutton.addEventListener("click", function (){
    let NewTeamTwoTally = Number(teamTwoShotsNum.innerHTML) + 1;
    teamTwoShotsNum.innerHTML = NewTeamTwoTally;

    
   
    if (NewTeamTwoTally === Math.floor(Math.random() * 10)+1){
        let teamTwoGoalTally = Number(teamTwoGoals.innerHTML) + 1;
        teamTwoGoals.innerHTML = teamTwoGoalTally;}

        

})



 resetButton.addEventListener("click", function (){
    let newResetNumber = Number(resetNumber.innerHTML) + 1
    resetNumber.innerHTML = newResetNumber
    teamTwoShotsNum.innerHTML = 0;
    teamTwoGoals.innerHTML = 0;
    teamOneShotsNum.innerHTML = 0;
    teamOneGoals.innerHTML = 0;
})
