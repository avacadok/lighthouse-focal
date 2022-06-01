
const args = process.argv.slice(2); // .slice(2) remove the first two items on the list

let pigLatin = function(args) {

  let newStr = "";

  //create loop to go through all the strings
  for (let i = 0; i < args.length; i++) {
    //select the first letter of each word
    let firstLetter = args[i][0];
    //remove the first letter of the word; args[i] means first index of each word
    let sliced = args[i].slice(1);

    newStr += sliced + firstLetter + "ay ";

  } return newStr;
};
console.log(pigLatin(args));