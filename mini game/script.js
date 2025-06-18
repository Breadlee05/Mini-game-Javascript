 function startgame(){
 let mini = ["rock", "paper", "scissors"]
let ranumber = mini[Math.floor(Math.random() * mini.length)]
console.log(ranumber)

let game = confirm("START THE GAME")
if (game) {
  let one = prompt("rock paper or scissors")
  if (one === ranumber) {
    confirm("tie")
  }
  else if ((one == "rock" && ranumber == "paper") || (one == "paper" && ranumber == "scissors") || (one == "scissors" && ranumber == "rock") )
  {
    confirm("you lose")
    startgame()
  }
 
   else {

    confirm("YOU WIN")
  }
}
 }
startgame()