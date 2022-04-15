function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every(function(item, index, arr1) {
    return item === arr2[index] && arr1.length === arr2.length;
  });
  return result; // true or false
}

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item > 0);
  resultArr = resultArr.filter((item) => item % 3 === 0);
  resultArr = resultArr.map((item) => item * 10);
  return resultArr; // array
}
