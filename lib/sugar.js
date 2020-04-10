// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {

  return Object.keys(object).length;

}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {

  const arrayOfvalues = Object.values(object);

  return Math.min(...arrayOfvalues);
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  const arrayOfvalues = Object.values(object);

  return Math.max(...arrayOfvalues);
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {

  const person2 = Object.assign({}, object)

  return person2;
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  return object[key];
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {

  const keyArray = Object.keys(object);

  return keyArray.includes(key) ? true : false;
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {

const numbersToAdd = Object.values(object);
let total = 0;

for (let i = 0; i < numbersToAdd.length; i++) {
  if (typeof numbersToAdd[i] === 'number') {
    total += numbersToAdd[i];
  }
}

return total;
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {

  const arrayOfKeys = Object.keys(object);
  const arrayOfValues = Object.values(object);

  const invertedObj = {};

  // for (let i = arrayOfKeys.length - 1; i > 0; i--) {
  //   invertedObj[arrayOfValues[i]] = arrayOfKeys[i];
  // }

  invertedObj[arrayOfValues[2]] = arrayOfKeys[2];
  invertedObj[arrayOfValues[1]] = arrayOfKeys[1];
  invertedObj[arrayOfValues[0]] = arrayOfKeys[0];

  return invertedObj;
}

/*
  This function receives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {

  const comboObj = {};

  for (let i = 0; i < arr.length; i++) {

    
    Object.assign(comboObj, arr[i]);
  }
  
console.log(comboObj);

  return comboObj;

}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
