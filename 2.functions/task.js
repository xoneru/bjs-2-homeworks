// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      sum += arr[i];
    } else if (arr[i] < min) {
      min = arr[i]
      sum += arr[i]
    } else {
      sum += arr[i]
    }
    
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
