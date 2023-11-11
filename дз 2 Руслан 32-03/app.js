// // 1
// const userInput = prompt("Введите месяц :");
//
// const month = userInput.toLowerCase();
//
// let season;
//
// switch (month) {
//   case 'декабрь':
//   case 'январь':
//   case 'февраль':
//     season = 'зима';
//     break;
//   case 'март':
//   case 'апрель':
//   case 'май':
//     season = 'весна';
//     break;
//   case 'июнь':
//   case 'июль':
//   case 'август':
//     season = 'лето';
//     break;
//   case 'сентябрь':
//   case 'октябрь':
//   case 'ноябрь':
//     season = 'осень';
//     break;
//   default:
//     season = 'Неверно введен месяц';
// }
//
// alert(`Введенный месяц принадлежит к сезону: ${season}`);
//
//
//
// // дз-2
// const nestedArray = [[[[[[[[[[[2]]]]]]]]]]];
// const result = nestedArray.flat(Infinity)[0];
//
// console.log(result);
//
// дз-3
const value1 = parseFloat(prompt("Введите первое значение:"));
const value2 = parseFloat(prompt("Введите второе значение:"));
const operation = prompt("Введите математическое действие (+, -, *, /):");

if (isNaN(value1) || isNaN(value2)) {
  console.error("Пожалуйста, введите числовые значения.");
} else {
  let result;

  switch (operation) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      if (value2 !== 0) {
        result = value1 / value2;
      } else {
        console.error("Ошибка: Деление на ноль.");
      }
      break;
    default:
      console.error("Неверное математическое действие.");
  }

  if (result !== undefined) {
    console.log(`Результат: ${result}`);
  }
}