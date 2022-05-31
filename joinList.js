/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */


// Write our function (we must define it too!) below

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];


let joinList = function(input) {
  let str = "";
  //use for loop to add each element in the array
  for (let i = 0; i < input.length; i++) {

    // use ternary operator to simpified code
    // "" and ", " are word~
    const word = (i === input.length - 1) ? "" : ", ";
    str += input[i] + word;
    // add each element in the array to the string and add the "," and the end of each element
    // if ( input.length-1 === i){
    //   str += input[i];
    // }else{
    //   str += input[i] + ", ";
    // }
    //remove the ", " for the last two index
  } return str;

};

const concepts = joinList(conceptList);
console.log(`Today I learned about${concepts}.`);
