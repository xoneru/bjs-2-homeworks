function solveEquation(a, b, c) {
  "use strict"; 
  let arr;
  let d = (b ** 2-4*a*c)
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    let squareRoot = (-b/(2*a))
    arr = [squareRoot]
  } else {
    let squareRoot2 = ((-b + Math.sqrt(d) )/(2*a))
    let squareRoot3 = ((-b - Math.sqrt(d) )/(2*a))
    arr = [squareRoot2, squareRoot3]
  }
  return arr; // array
}

"use strict" // Строгий режим.
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

"use strict" // Строгий режим.
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let percentTest = Number(percent);
  let contributionTest = Number(contribution);
  let amountTest = Number(amount);
  
  if (percentTest != Number(percent)){
	totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount	
  } else if (contributionTest != Number(contribution)){
	totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount  
  } else if (amountTest != Number(amount)){
	totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount  
	}
	  else {
  let credit = amount - contribution;
  let dateMonth = date.getMonth();
  let dateYear = date.getFullYear();
  let dateNow = new Date(Date.now());
  let dateNowMonth = dateNow.getMonth();
  let dateNowYear = dateNow.getFullYear();
  let month = (dateYear-dateNowYear)*12+(dateMonth-dateNowMonth);
  
  let payment = credit * (percent/12/100 + (percent/12/100 / (((1 + percent/12/100)**month - 1))));
  totalAmount = payment * month;

return Number(totalAmount.toFixed(2));
  }
}
