
//Team Shoot buttons and Shot counts


let teamOneShotsNum = document.querySelector("#teamone-numshots");
let teamOneShotbutton = document.querySelector("#teamone-shoot-button");

teamOneShotbutton.addEventListener("click", function (){
    let NewTeamOneTally = Number(teamOneShotsNum.innerHTML) + 1;
    teamOneShotsNum.innerHTML = NewTeamOneTally;


    let teamOneGoals = document.querySelector(" #teamone-numgoals");


   

    if (NewTeamOneTally === Math.floor(Math.random() * 10)+1){
        let teamOneGoalTally = Number(teamOneGoals.innerHTML) + 1
        teamOneGoals.innerHTML = teamOneGoalTally;}
    
})

let teamTwoShotsNum = document.querySelector("#teamtwo-numshots");
let teamTwoShotbutton = document.querySelector("#teamtwo-shoot-button");

teamTwoShotbutton.addEventListener("click", function (){
    let NewTeamTwoTally = Number(teamTwoShotsNum.innerHTML) + 1;
    teamTwoShotsNum.innerHTML = NewTeamTwoTally;

    let teamTwoGoals = document.querySelector(" #teamtwo-numgoals");
   
    if (NewTeamTwoTally === Math.floor(Math.random() * 10)+1){
        let teamTwoGoalTally = Number(teamTwoGoals.innerHTML) + 1
        teamTwoGoals.innerHTML = teamTwoGoalTally;}


        

})

let resetButton = document.querySelector(" #reset-button")
let resetNumber = document.querySelector(" #num-resets")

resetButton.addEventListener("click", function (){
    let newResetNumber = Number(resetNumber.innerHTML) + 1
    resetNumber.innerHTML = newResetNumber
    teamTwoGoalTally = Number(teamTwoGoals.innerHTML)
    teamTwoShotsNum = Number(teamTwoShotsNum.innerHTML)

})
