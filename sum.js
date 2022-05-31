const args = process.argv.slice(2); // .slice(2) remove the first two items on the list

let total = function(args){
  
  let sum = 0;

  //create loop to go through all the nums entered and add them tgt
  for (let i = 0; i < args.length; i++) {
    
    //Number()converting the value inside the bracket into numbers
    //convert strings to number
    sum += Number(args[i]) 

  }
  return sum;
}
console.log(total(args));

