function solveEquation(a, b, c) {
  "use strict"; 
  let arr;
  let d = (b**2-4*a*c)
  if (d < 0) {
    arr = [];
  } else if (d = 0) {
    let squareRoot = (-b/(2*a))
    arr = [squareRoot]
  } else {
    let squareRoot2 = ((-b + Math.sqrt(d) )/(2*a))
    let squareRoot3 = ((-b - Math.sqrt(d) )/(2*a))
    arr = [squareRoot2, squareRoot3]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // Контроль корректность введенных данных.    
  if (percent > 0) {  
   percent = +percent;
  } else if (percent != 0 || percent == 0) {
    return (`“Параметр "Процентная ставка" содержит неправильное значение ${percent}”.`);
  }
  if (contribution >= 0) {
    contribution = +contribution;
  } else if (contribution !=  0) {
    return (`“Параметр "Начальный взнос" содержит неправильное значение ${contribution}”.`); 
  }
  if (amount >= 0) {
    amount = +amount;
  } else if (amount !=  0) {
    return (`“Параметр "Общая стоимость" содержит неправильное значение ${amount}”.`);
  }
     let returnAmount = amount - contribution  // Сумма, которую необходимо вернуть банку. 
     percent = percent / 1200; // Процентная ставка
     let monthlyPay = returnAmount*(percent+percent/(((1+percent)**date)-1)); // Ежемесячная оплата
     let  totalAmount = monthlyPay * date;  //  общая сумма, которую придется заплатить клиенту.
     console.log(totalAmount.toFixed(2));
     return totalAmount.toFixed(2); //  Возврат результата в функцию
  }
