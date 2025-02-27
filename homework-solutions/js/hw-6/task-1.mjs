/*
1. Цикл for..of в массиве
  - Создайте массив [1,2,3,4,5,6,7,8,9,10]
  - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
    если элемент четный - возведет его в квадрат
    если элемент нечетный - возведет его в 3ю степень

  Значение добавьте в массив 'forOf' 
*/
const forOf = [];
const numbersOfTen = [1,2,3,4,5,6,7,8,9,10];

for (const number of numbersOfTen){
    if (number %2 === 0){
        forOf.push(number ** 2)
    }
    else if (number %2 !==0){
        forOf.push(number ** 3)
    }
}
console.log (forOf);
/*
2. Методы массивов
  - Создайте массив [1,2,3,4,5]
  - Добавьте в конец массива число 6 соответствующим методом
  - Добавьте в начало массива число 0 соответствующим методом
  - Удалите элемент с индексом 2 из массива соответствующим методом
  - Удалите последний элемент из массива соответствующим методом

  В результате вы должны получить массив [0, 1, 3, 4, 5], присвойте в переменную "result"
*/

const arraySecondTask = [1, 2, 3, 4, 5];
arraySecondTask.push(6);
arraySecondTask.unshift(0);
arraySecondTask.splice(2, 1);
arraySecondTask.pop ();

const result = arraySecondTask;
console.log(result);

/*
3. Деструктуризация массивов
  - Создайте массив [3, 11, 32, 7, 20] 
  - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива

  Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]
*/

const arrayThirdTask = [3, 11, 32, 7, 20];
const [first, second, ...rest] = arrayThirdTask;
console.log (`first === ${first}; second === ${second}, rest === ${rest}`);

/*
4. Конкатенация массивов
  - Создайте массив с числами [1,2,3,4,5]
  - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
  - Используйте спред оператор

  Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
*/


const firstArray = [1,2,3,4,5];
const secondArray = [6, 7, 8, 9, 10]
const mergedArray = [...firstArray, ...secondArray];
console.log (mergedArray)

export { forOf, result, first, second, rest, mergedArray };
