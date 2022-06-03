const swapper = function(key1, obj1, key2, obj2) {
  console.log("Swap!");
  //object[key1] = object["a"] which is to access the value of obj1:1
  let value1 = obj1[key1];
  let value2 = obj2[key2];

  // console.log("value1",value1)
  // console.log("val2", value2)
  //loop through all the keys in obj1
  for (let key in obj1) {
    if (key === key1) {
      //if key1 matches with any of the key in obj1
      //then we replace the object[key] with obj2's key value
      obj1[key] = value2;
    }
  }
  //loop through again for obj2
  for (let key in obj2) {
    if (key === key2) {
      obj2[key] = value1;
    }
  }
  console.log('object1: ', obj1);
  console.log('object2: ', obj2);
};

swapper('a', { a: 1, b: 2, c: 3}, 'c', {a: 4, b: 3, c: 5});
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });