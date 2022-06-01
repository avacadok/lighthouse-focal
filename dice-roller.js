const args = process.argv.slice(2);

const diceRoller = function(args) {
  let output = [];
  
  for (let i = 0; i < args; i++) {
    //set up the dice num with Math.floor and Math.random
    //for Math.random()* 6 means it will generates a random from 0 to 5 so we plus 1 for each number
    //then we can get random numbers from 1 to 6
    let dice = Math.floor(Math.random() * 6) + 1;

    const spacer = (i === args) ? "" : ", ";

    output += dice + spacer;

  } return output;
};

console.log(diceRoller(args));