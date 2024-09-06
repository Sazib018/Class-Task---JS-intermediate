// Practice Problem 1
// task -1 :
 const multiply = (a , b , c) => a*b*c;
 /* console.log(multiply(3, 4, 1)); */

 // task -2 :

 const sentence =  'I am a web developer.\nI love to code.\nI love to eat biryani.';
 /* console.log(sentence); */

 // task -3 :

 const plus = (a , b=5) => a+b;
/*  console.log(plus(10)); */

// Practice Problem 2
// task -1 :

const friends = ["Jony", "rakib", "sakil", "toma", "tuba", "munaim"];
const even = friends.filter (a=>a .length % 2 ===0);
/* console.log(even); */

// Practice Problem 3
// task - 1:

const square = (number) => {
    const squareNum = number.reduce((add , num) => add + num ** 2, 0);
    const average = squareNum / number.length;
    return average;
}

const number = [10 ,5 , 2 ,6];
const result = square(number);
/* console.log(result); */

// Practice Problem 4
// task - 1:

const allNum = (arr1, arr2) => {
    const twoArray = [...arr1, ...arr2];
    const maxNumber = Math.max(...twoArray); 
    return maxNumber;
  };

  const array1 =[12, 3, 4, 7, 9];
  const array2 =[13, 4, 5, 2, 11];
  const solution = allNum(array1 , array2);
 /*  console.log(solution); */
  




 
 
 