/*const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
     for (let i of item) {
       console.log(i)
     } 
    } else {
      console.log(item);
    }
    
  }
}
*/
const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}
// //here is what the function is doing
// printItem(["😎", ["💩", "🤗"], "😼", "😂"]) {

//   // Item is not an array, so just log it
//   console.log("😎")

//   // Item is an array so call the function again
//   printItems(["💩", "🤗"]) {

//     // Item is not an array, so just log it
//     console.log("💩")

//     // Item is not an array, so just log it
//     console.log("🤗")
//   }

//   // Item is not an array, so just log it
//   console.log("😼")

//   // Item is not an array, so just log it
//   console.log("😂")
// }

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];

printItems(array);