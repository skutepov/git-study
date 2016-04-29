const square = (x) =>{
  return x*x;
}
const sumOfSquares = (a,b) =>{
  return square(a)+square(b);
}
const squareSumOfSquares = (a,b) => {
  return square(a+b);
}

import * as bla-bla from './bla-bla ;

export default (mun) =>{
return mun*mun*mun;
}


Math.PI;
Math.SQRT2;
Math.sin(0);
Math.cos(Math.PI);
Math.round(20.49); //20
Math.round(20.50);//21
Math.ceil(7.004); //8
Math.floor(45.95); //45
Math.random();
Math.pow(7,3);//343
Math.abs(-2);//2
Math.sqrt(9);//3



// BEGIN (write your solution here)
const toRAD = (x) =>{
  return x * Math.PI / 180;
}
export default(lengthA,angleAB,angleAC) =>{
  const angleBC=toRAD(180-(angleAC+angleAB));
  angleAC=toRAD(angleAC);
  angleAB=toRAD(angleAB);
  return (Math.pow(lengthA,2)/2)*(Math.sin(angleAB)*Math.sin(angleAC)/Math.sin(angleBC));
  
}
// END
//площать треугольнака по стороне и прилигающим к ней углам
// BEGIN
const radians = (degrees) => {
    return degrees * Math.PI / 180;
};

export default (side, angle1, angle2) => {
  const sin1 = Math.sin(radians(angle1));
  const sin2 = Math.sin(radians(angle2));
  const sin3 = Math.sin(Math.PI - radians(angle1 + angle2));
  return (1 / 2) * side * side * ((sin1 * sin2) / sin3);
};

// END
//закон Де Моргана
5 === 5
5 !== 7
//isZero(0); предикаты - функции возвращающие истина или лож// BEGIN


export const isBigOdd = (num) => {
    return num % 2 !== 0 && num > 1000;
};
// END
//isPositive(-1);

//цикломатическая сложность 
условие ? вырожение при истина : вырожение при ложно;


Реализуйте и экспортируйте функцию check, которая принимает на вход результат хоккейного матча и исход, который предполагался. Если счет был угадан верно, то функция должна вернуть 2, если исход был угадан верно (победа, ничья, поражение) то функция должна вернуть 1, во всех остальных случаях функция возвращает 0.

Функция check принимает на вход четыре параметра: a, b, c, d. Которые, на самом деле, являются результатами игры двух хоккейных команд: a:b и c:d.

Примеры:

result(1, 2, 1, 2) === 2 // 1:2 - реальный счет, 1:2 - предполагаемый
result(1, 3, 1, 2) === 1 // 1:3 - реальный счет, 1:2 - предполагаемый
result(4, 3, 0, 0) === 0 // 4:3 - реальный счет, 0:0 - предполагаемый

// BEGIN (write your solution here)
export const check = (i1,i2,r1,r2) =>{
if ((i1===r1)&&(i2===r2)){
  return 2;
}else if ((i1>i2&&r1>r2)||(i1===i2&&r1===r2)||(i1<i2&&r1<r2)){
  return 1;
} else {return 0;}
}
// END

// BEGIN
export const check = (a, b, c, d) => {
  if (a === c && b === d) {
    return 2;
  } else if (a > b && c > d || a < b && c < d || a === b && c === d) {
    return 1;
  }

  return 0;
};
// END

assert
assert.equal
assert.notequal


Реализуйте функцию sequenceSum, которая находит сумму последовательности. Последовательность задается тремя значениями: begin - начало последовательности, end - конец последовательности, step - шаг. Например: begin = 2, end = 6, step = 2, дает нам такую последовательность 2, 4, 6. Сумма такой последовательности будет: 12.

sequenceSum(1, 5, 1); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(1, 5, 3); // 1 + 4 = 5

export const sequenceSum = (begin, end, step) => {
// BEGIN (write your solution here)
 if (begin>end){
   return 0;
 } 
 return begin + sequenceSum(begin+step);
// END
};
// Начать
  если (начинать > конец) { вернуть 0; } вернуться начать + sequenceSum(начать + шаг, конец, шаг); // конец
// BEGIN
  if (begin > end) { return 0; } return begin + sequenceSum(begin + step, end, step); // END


Реализуйте и экспортируйте рекурсивную функцию smallestDivisor используя итеративный процесс. Функция должна находить минимальный делитель переданного числа.

Для этого достаточно последовательно проверять делимость начиная с двойки. Если делитель не найден, значит это 1, а искомое число простое.

smallestDivisor(17); // 1
smallestDivisor(15); // 3


// BEGIN
export const smallestDivisor = (num) => { 
const iter = (acc) => { 
if (acc > num / 2) { return 1; } 
if (num % acc === 0) { return acc; } 
return iter(acc + 1); }; 
return iter(2); }; // END

// BEGIN (write your solution here)
 	const itersmallestDivisor = (x,smDiv) =>{
  if (smDiv >= x) {return 1;}
  if (x%smDiv === 0 ) {return smDiv;}
  return itersmallestDivisor(x,smDiv+1);
 	}

 const smallestDivisor = (x) => {

  itersmallestDivisor( x , 2);
}
// END
console.log(itersmallestDivisor(17,2)); // 1
console.log(itersmallestDivisor(15,2)); // 3
console.log(smallestDivisor(17)); // 1
console.log(smallestDivisor(15)); // 3

// BEGIN
export const smallestDivisor = (num) => {
  let i = 2;

  while (i <= num / 2) {
    if (num % i === 0) {
      return i;
    }
    i = i + 1;
  }

  return 1;
};
// END

Простое число — натуральное (целое положительное) число (больше единицы), имеющее ровно два различных натуральных делителя — единицу и самого себя.

solution.js
Реализуйте и экспортируйте функцию isPrime определяющую, является ли число простым.

Пример:

isPrime(1); // false
isPrime(7); // true
isPrime(10); // false

export const isPrime = (num) => { 
if (num < 2) { return false; } 
let i = 2;
 while (i <= num / 2) 
{ if (num % i === 0) { return false; } i++; } return true; }; // END

Реализуйте и экспортируйте функцию по умолчанию, которая считает сумму всех натуральных чисел меньших чем n (первый аргумент), которые делятся на числа a или b (второй и третий аргументы) без остатка.

// BEGIN (write your solution here)
export default (n,a,b) => {
  let sum=0;
  for (let i=1;i<n;i++){
    if ((i%a === 0) || (i%b === 0) ) sum=sum+i;
  }
  return sum;
}
// END

// BEGIN
export default (num, divisor1, divisor2) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (i % divisor1 === 0 || i % divisor2 === 0) {
      sum += i;
    }
  }

  return sum;
};
// END


