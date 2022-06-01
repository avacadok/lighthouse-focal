function average(list) {
  
  var sum = 0;

  for (var num of list) {
    sum += num;
  }

  return sum / (list.length - 1);
}
console.log(average([3, 5, 7]));