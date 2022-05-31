
const args = process.argv.slice(2); // .slice(2) remove the first two items on the list

let pigLatin = function(args) {

    let newStr = "";

    //create loop to go through all the strings 
    for (let i = 0; i < args.length; i++) {
      
        newStr +=  args[i] + args[i][0] + "ay";


    }

    return newStr;
}
console.log(pigLatin(args));