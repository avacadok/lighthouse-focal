let reverse = function(strs) {
  
  let output = "";

  //create for loop to loop through the array from the end of the string to the beginning
  // i starts at strs.length -1 because the index of the string starts at 0
  for (let i = strs.length - 1; i >= 0; i--) {
    
    //adding the letter back together for new string
    output += strs[i];
  }

  return output;
};

console.log(reverse("Hello"));
console.log(reverse("Goodbye"));

//https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
//we can also use .reverse() and .join() to reverse string