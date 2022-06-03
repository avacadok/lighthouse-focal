const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

//return numbers that are 70 or above
//num is a call back function

//anonymous arrow function
const pass = grades.filter(num => {
  return num >= 70;
});
//anonymous function
const passNum = grades.filter(function(num){
  return num >= 70;
});
//call back function
const passGrade = grades.filter(function callback(num){
  return num >= 70;
});

console.log("Passing grades: ", pass);