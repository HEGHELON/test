//This is a battleship game.
 location1 = Math.floor(Math.random()*7);

let location2 = location1 + 1;
let location3 = location1 + 2;
let hits = 0;
let guess = 0;
let guesses = 0;
let isSunk = false;

while (isSunk==false ) {

  alert(location1);
guess = parseInt(prompt("Enter a guess between 0 and 7: "));
if(guess<0||guess>6){
 alert("Enter a valid number");
}else{
  guesses += 1;
  if ((guess === location1) || (guess === location2) || (guess === location3)) {
    hits += 1;
    alert("HITS");
    if(hits === 3){
      isSunk = true;
      console.log("You have sank my ship");
    }
  } else {
  alert("MISS");
  }
}
}
alert(`You sunk the ship with ${guesses} and your accuracy was ${Math.round(300/guesses)}%`);

