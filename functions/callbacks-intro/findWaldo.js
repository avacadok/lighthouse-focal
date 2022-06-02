// The second argument/parameter is expected to be a (callback) function
// const findWaldo = function(names, callback) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       callback(i);   // execute callback
//     }
//   }
// }

const findWaldo = function(names, callback) {
  names.forEach((word, index) => {
    if (word === "Waldo") {
      callback(index);
    }
  });
};
//this is the callback function
const actionWhenFound = function(index) {
  console.log("Found him at index " + index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);