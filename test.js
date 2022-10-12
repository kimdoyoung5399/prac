// const newNumbers = [0, 1, 1, 2, 2, 3, 4, 5].filter((number, index, target) => {
//   console.log(target.indexOf(number) === index);
// });
// console.log(newNumbers);
// //indexof 가장 왼쪽 number 값을 찾고 그값에 인덱스값 불러옴

// 1
// number : 0
// index : 0
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number)  0 === 0 true

// 2
// number : 1
// index : 1
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number) 1 === 1 true

// 3
// number : 1
// index : 2
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number) 1 === 2 false

// 4
// number : 2
// index : 3
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number) 3 === 3 true

// 5
// number : 2
// index : 4
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number) 3 === 4 false

// 6
// number : 3
// index : 5
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number) 5 === 5 true

// 7
// number : 4
// index : 6
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number) 6 === 6 true

// 7
// number : 5
// index : 7
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number) 7 === 7 true

// 8
// number : null
// index : null
// target : [0, 1, 1, 2, 2, 3, 4, 5]
// target.indexOf(number) null === null true ?

// const myArr = [1, 2, 3, 4, 5];

// myArr.forEach((currentElement, index, array) => {
//   console.log(`요소: ${currentElement}`);
//   console.log(`index: ${index}`);
//   console.log(array);
// });

// console.log(myArr);

// const myArr = ["강아지", "고양이", "햄스터", "거북이", "이구아나", "거북이"];

// myArr.forEach((el, i) => {
//   console.log(i);
//   console.log(el);
//   if (el === "고양이") {
//     myArr.shift();
//   }
// });

// console.log(myArr); // ["고양이", "햄스터", "거북이", "이구아나"]

// const myArr = [1, 2, 3, 4, 5];

// const newMyArr = myArr.map((currentElement, index, array) => {
//   console.log(`요소: ${currentElement}`);
//   console.log(`index: ${index}`);

//   return currentElement * 2;
// });

// console.log(newMyArr); // [2, 4, 6, 8, 10]

var numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //array안에 array가 있는 경우
var newNumbers = numbers.map((v) => v.map((v) => v * 2));
console.log(newNumbers);
