const raisinAlarm = function(cookie) {

  //create variable for result
  let output = "";
  // create for loop to loop through all the element in the array
  for (let i = 0; i < cookie.length; i++) {

    if (cookie[i] !== "🍫") {

      output = "Raisin alert!";
      return output;
      //return message if the array contains raisin to break the loop
    } else {
      output = "All good!";
    }
  } return output;
  


};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));