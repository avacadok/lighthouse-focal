

const findWaldo = function(names, found) {
  names.forEach((word, index) => {
    if (word === "Waldo") {
      return found(index);
    }
  });
};
//function(cat) is a placeholder for found
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(cat) {
  console.log("Waldo is located at:", cat);
});