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

// BEGIN (write your solution here)
assert.equal(solution.factorial(0),1);
assert.equal(solution.factorial(1),1);
assert.equal(solution.factorial(2),2);
assert.equal(solution.factorial(3),6);
assert.equal(solution.factorial(4),24);
assert.equal(solution.factorial(5),120);
// END
// BEGIN
assert.equal(solution.factorial(0), 1);
assert.equal(solution.factorial(1), 1);
assert.equal(solution.factorial(3), 6);
// END


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

Интерполяция строк
`бла бла бла is ${a+b} бла-бла ${2*a+b} ${str_var} `

В javascript строки являются неизменяемыми, так же говорят immutable. Это означает что какие бы вы к ним не применяли функции, они не производят in-place замены (то есть не производят изменения самой строки). Любые строковые функции, примененные к строкам, возвращают новую строку. Это верно и в том случае, когда мы обращаемся к конкретному символу в строке.

Пример:

const str = 'hello';

strings.toUpperCase(str); // HELLO
console.log(str); // hello

strings.toUpperCase(str[0]); // Hello
console.log(str); // hello

str[0] = 'W';
console.log(str); // hello



перевернуть строку

// BEGIN
export const reverse = (str) => {
 let i = strings.length(str) - 1; 
let result = ''; 
while (i >= 0) { result += str[i]; i--; } return result; }; // END


null - значение отсудствует
undefined - значение не определено


Функция calc представляет из себя простейший калькулятор, которому передается бинарная операция, а так же два числа, а на выходе получается результат применения операции к этим числам.

Реализуйте функцию calc, аргументами которой являются:

Операция в виде строки. Поддерживаются +, -, /,*.
Первый операнд.
Второй операнд.
Если передается операция которая не поддерживается, то функция должна вернуть NaN.

Примеры:

calc('+', 3, 10); // 13
calc('-', -8, 6); // -14
calc('$', 0, 9); // NaN

// BEGIN (write your solution here)
export const calc = (oper,arg1,arg2) => {
  switch (oper){
    case '+': return arg1 + arg2;
    case '-': return arg1 - arg2;
    case '/': return arg1 / arg2;
    case '*': return arg1 * arg2;
    default : return NaN;
  }
}
// END
// BEGIN
export const calc = (operation, a, b) => 
{ switch (operation) {
 case '+': return a + b;
 case '-': return a - b; 
 case '/': return a / b; 
 case '*': return a * b; 
 default: return NaN; 
} 
}; // END

const iter = (i, acc) => { 
if (i < 0) { return acc; } 
const newAcc = strings.toUpperCase(str[i]) === str[i] ? acc + 1 : acc; return iter(i - 1, newAcc); };


характеристики функция:
детерминированность (один и тот же результат для одного набора значений)
не детерминированность:
-зависит от внешних данных
-коммуникация с внешним миром 
-зависимость от состояния 

детерминированность дает:
-предсказуемость
-надежность
-эффективность(можно закэшировать результат функции)
-самодокументируемость

Побояные эффекты (сайд эффект)
-печать на экран
-изменение внешнего окружения
недостатки:
-хрупкость
-непредсказуемость
-непрозрачность
-побочные эффекты - генерация артефактов

Чистая функция:
-является детерминированной
-не обладает побочными эффектами
преимущества чистых функций:
-легко читать
-просто отлаживать
-просто тестировать
-порядок вызовов не важен (параллелизм)
-повышают модульность

Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!
Подсказки
Вычисление длинны строки: strings.length(str).
Перевод строки/буквы в верхний регистр strings.toUpperCase(str).

// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < strings.length(str); i++) {
    const shouldBeBig = i === 0 && str[i] !== ' ' || str[i - 1] === ' ';
    result += shouldBeBig ? strings.toUpperCase(str[i]) : str[i];
  }

  return result;
};
// END

import * as strings from './strings';

// BEGIN (write your solution here)
export default (str) => {
  let i=0;
  const iLastChar=strings.length(str)-1;
  let result_str='';
  const iter = () => {
    if (i>iLastChar) return result_str;
    if (i===0 || str[i-1]===' ') result_str+=strings.toUpperCase(str[i]);
    else result_str+=str[i];
    return iter(++i);
  } 
  return iter(i);
}
// END

false:
undefined
null
false
+0, -0, NaN
''

явные преобразования в JS
Number()
Boolean()
String()

поиск первых букв слов строки
 export default (str) => {
   let result = '';
   let state = 'outside';
   for (let i = 0; i < strings.length(str); i++) {
     const prevState = state;
     state = str[i] === ' ' ? 'outside' : 'inside';
     result += state === 'inside' && prevState === 'outside' ? strings.toUpperCase(str[i]) : str[i];
   }

   return result;
}

// BEGIN (write your solution here)
/*export default (str) => {
  let i=0;
  const iLastChar=strings.length(str)-1;
  let result_str='';
  const iter = () => {
    if (i>iLastChar) return result_str;
    if (i===0 || str[i-1]===' ') result_str+=strings.toUpperCase(str[i]);
    else result_str+=str[i];
    return iter(++i);
  } 
  return iter(i);
}*/

// BEGIN
export default (str) => { 
let result = ''; 
for (let i = 0; i < strings.length(str); i++) 
{const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' '); result += shouldBeBig ? strings.toUpperCase(str[i]) : str[i]; } return result; }; // END


// BEGIN
const sum = (str) => 
{ let result = 0;
 for (let i = 0; i < strings.length(str); i++) 
{ result += Number(str[i]); } return result; }; 
export const addDigits = (num) => 
{ let result = num; while (result >= 10) 
{ result = sum(String(result)); } return result; }; // END


// BEGIN (write your solution here)
const sumDigit = (a,b) => {
  let result=a+b;
  if (result>9){
    let str=String(result);
    return sumDigit(Number(str[0]),Number(str[1]));
  }
  return result;
} 
export const addDigits = (num) => {
  const str=String(num);
  let result=str[0];
  for (let i=1 ; i< strings.length(str);i++){
    result=sumDigit(result,Number(str[i]));
  }
  return result;
}
// END

Реализуйте и экспортируйте функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Сложите все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2

Пример:

addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8
Подсказка
Выделите процесс суммирования цифр в числе в отдельную функцию





// BEGIN
export const isPowerOfThree = (num) => {
  let current = 1;
  while (current <= num) {
    if (current === num) {
      return true;
    }
    current *= 3;
  }

  return false;
};
// END

// BEGIN (write your solution here)
export const isPowerOfThree =(num) =>{
  let acc = 1;
  const iter = (acc) => {
    if (acc>num) return false;
    if (acc===num) return true;
    return iter(acc*3);
  }
  return iter(acc);
}



// BEGIN
export const invertCase = (str) => { 
let result = ''; 
for (let i = 0; i < strings.length(str); i++) { 
const upper = str[i] === strings.toUpperCase(str[i]); 
result += upper ? strings.toLowerCase(str[i]) : strings.toUpperCase(str[i]); } return result; }; // END 
// END

// BEGIN
export const reverseInt = (num) => { 
const numAsStr = String(Math.abs(num)); 
let reversedStr = ''; 
let i = strings.length(numAsStr) - 1; 
while (i >= 0) { reversedStr += numAsStr[i]; i--; } 
const reversedModule = Number(reversedStr); 
return num > 0 ? reversedModule : -reversedModule; }; // END


// BEGIN (write your solution here)
export const reverseInt = (num) => {
  let result='';
  if (num<0) { 
    num=-num;
    result='-';
  }
  const str=String(num);
  for (let i=strings.length(str)-1; i>=0; i--){
    result+=str[i];
  }
  return Number(result);
} 
// END

export default (rawMinutes) => { 
const hours = Math.floor(rawMinutes / 60); 
const minutes = rawMinutes % 60; 
const formattedMinutes = minutes > 10 ? minutes : `0${minutes}`; 
return `${hours}:${formattedMinutes}`; }; // END

// BEGIN (write your solution here)
export default (rawMinutes) =>{
  const minutes=rawMinutes%60;
  const hours=(rawMinutes-minutes)/60;
  return hours+':'+ ( minutes<10 ? '0' + minutes : minutes);
  
}
// END

