// const titleCase  = function(text) {

//   if (text === ""){
//     return text
//   };

//   text = text.trim();
//   let textArr = text.split(" ");
//   // .map will make a new array so we need to store it in a new variable
//   let output = textArr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());

//   output = output.join(" ")
//   return output;

// };

const titleCase  = function(text) {
  if (text === "") {
    return text;
  }
  text = text.trim();
  let textArr = text.split(" ");
  let output = [];
  for (let i = 0; i < textArr.length; i++) {
    output.push(textArr[i][0].toUpperCase() + textArr[i].slice(1).toLowerCase());
  }

  return output.join(" ");
};

console.log(titleCase("I LOVE my cat"));