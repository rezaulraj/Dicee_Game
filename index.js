  let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  
  let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  
  let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  
  let image1 = document.querySelectorAll("img")[0];
  
  image1.setAttribute("src", randomImageSource);
  
  
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
  
  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }


// // Edit Name
// let player1 = "Player1";
// let player2 = "Player2";
// function editNames() {
  
//   player1 = prompt("Change Player 1");
//   player2 = prompt("Change Player 2");

//   if(player1.length < 1 || player2.length < 1){
//     alert("Please Enter a valid name");
//     return;
//   }
//   document.querySelector("p.Player1").innerHTML = player1;
//   document.querySelector("p.Player2").innerHTML = player2;
// }


