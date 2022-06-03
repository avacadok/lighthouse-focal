const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

const lengths = lighthouses.map(num => num.length);

/*also works as below
const x = lighthouses.map(function(num) {
  return num.length
});
*/

console.log("the number of characters is: ", lengths);