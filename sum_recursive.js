/*function sumToOne(n) {
  let sum = 0;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
}

console.log(sumToOne(4));

*/

function sumOne(n) {

  if (n > 0) {
    console.log(n);
    sumOne(n-1);
  }

};

sumOne(4);

function sumToOne(n) {
  //base case
  if (n === 1) {
    return 1;
  }
  //else -- recursive case
  //value gets bubbled up
  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));