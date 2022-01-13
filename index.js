/* 
  Component Tree:

    1. Solve Me First
    2. Simple Array Sum
    3. Compare The Triplets
    4. A Very Big Sum
    5. Diagonal Difference
    6. Plus Minus 
    7. Staircase
    8. Minmax Sum
    9. Birthday Cake Candles
    10. Time Conversion
    11. Array DS
    12. 2D Array - DS
    13. Left Rotation
    14. Dynamic Array

*/

/* ------------------------------------------------------------------------- *
/* 1. Solve Me First */
/* ------------------------------------------------------------------------- */

// TODO: insert the exercise


/* ------------------------------------------------------------------------- *
/* 2. Simple Array Sum */
/* ------------------------------------------------------------------------- */

//let arr = [1, 2, 3, 4, 10, 11]

const sumArrayElements = (arr) => {

  let arraySum = 0; 

  arr.forEach(function(element) {
    arraySum += element;
  })

  return arraySum
}

// console.log('array sum', sumArrayElements(arr))

/* ------------------------------------------------------------------------- *
/* 3. Compare The Triplets */
/* ------------------------------------------------------------------------- */

let arrA = [5, 7, 7] 
let arrB = [3, 6, 10]

const compareTriplets = (a, b) => {
  // Write your code here

  let result = [0, 0]

  for(let i = 0; i < a.length; i++) {

    if(a[i] > b[i]) {
      result[0] += 1;
    }  
    
    if(a[i] < b[i]) {
      result[1] += 1;
    } 
    
  }

  return result

}

// console.log('Compare Triplets:', compareTriplets(arrA, arrB))

/* ------------------------------------------------------------------------- *
/* 4. A Very Big Sum */
/* ------------------------------------------------------------------------- */

// let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

const aVeryBigSum = (ar) => {
    // Write your code here

    let sum = 0; 

    ar.forEach(function(element){
      sum = sum + element;
    })
  return sum
}

// console.log('A Very Big Sum:', aVeryBigSum(arr))

/* ------------------------------------------------------------------------- *
/* 5. Diagonal Difference */
/* ------------------------------------------------------------------------- */

// let arr = [ [11,  2,   4], 
//             [ 4,  5,   6], 
//             [10,  8, -12],]

const diagonalDifference = (arr) => {
    // Write your code here
  let length = arr.length;

  let diagonal1 = 0, diagonal2 = 0; 

  for(let i = 0; i < length; i++){

    diagonal1 += arr[i][i]
    diagonal2 += arr[length -1 -i][i]

  }
  
  return Math.abs(diagonal1 - diagonal2);

}

// console.log('Diagonal Difference:', diagonalDifference(arr))

/* ------------------------------------------------------------------------- *
/* 6. Plus Minus */
/* ------------------------------------------------------------------------- */

// let arr = [-4, 3, -9, 0, 4, 1]

const plusMinus = (arr) => {
  // Write your code here

  let resPlus = arr.filter(el => el > 0).length / arr.length;
  let resMinus = arr.filter(el => el < 0).length / arr.length;
  let resZero = arr.filter(el => el === 0).length / arr.length;

  const getSixDecimal = value => value.toFixed(6) 

  return console.log(getSixDecimal(resPlus) + '\n' + getSixDecimal(resMinus) + '\n' + getSixDecimal(resZero))

}

// plusMinus(arr);


/* ------------------------------------------------------------------------- *
/* 7. Staircase */
/* ------------------------------------------------------------------------- */

const staircase = (n) => {
  // Write your code here
  for(let i = 1; i <= n; i++){
    console.log(' '.repeat(n-i) + '#'.repeat(i))
  }
}

// staircase(6)

/* ------------------------------------------------------------------------- *
/* 8. Minmax Sum */
/* ------------------------------------------------------------------------- */

// let arr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  let min = (arr.reduce((a, b) => a + b)) - arr[arr.length-1]; 
  let max = (arr.reduce((a, b) => a + b)) - arr[0];
  console.log(min + ' ' + max)

}

// miniMaxSum(arr); 

/* ------------------------------------------------------------------------- *
/* 9. Birthday Cake Candles */
/* ------------------------------------------------------------------------- */

// let arr = [3, 2, 1, 3]

function birthdayCakeCandles(arr) {
  // Write your code here
  let candlesCount = 0;

  //Find the biggest number inside candles array
  let biggestNumOfCandles = Math.max(...arr)

  //For every num inside canldles array, if this num is equals to the biggest num inside candles, candlesCount value increase itself by one
    for(var i = 0; i < arr.length; i++){
        if (arr[i] == biggestNumOfCandles){
            candlesCount = candlesCount + 1;
        }
    }

  return candlesCount

}

// console.log('birthdayCakeCanles:', birthdayCakeCandles(arr))

/* ------------------------------------------------------------------------- *
/* 10. Time Conversion */
/* ------------------------------------------------------------------------- */

const getMilitaryTime = (arr, meridian) => {

  // check meridian and converts hours to military time
  if(meridian === 'AM' && parseInt(arr[0]) === 12) {
    arr[0] = '00';
  } 

  if (meridian === 'PM') {
    arr[0] = parseInt(arr[0]) + 12;
    arr[0] = parseInt(arr[0]) === 24 ? 12 : parseInt(arr[0]) 
  }
  
  // create HOURS:MINUTES:SECOND string
  let militaryTime = arr.join(':')

  return militaryTime
}

const timeConversion = (s) => {
  // Write your code here

  // split string every colon and split array value every two chars
  let timePiece = s.split(':').join('').split(/(..)/g).filter(s => s)

  // set meridian as AM/PM
  let meridian = timePiece[timePiece.length-1];

  // remove AM/PM from timePiece Array
  timePiece.pop();

  return getMilitaryTime(timePiece, meridian)
}

// console.log('Time:', timeConversion('02:05:45PM'))
// console.log('Time:', timeConversion('12:40:22AM'))

/* ------------------------------------------------------------------------- *
/* 11. Array DS */
/* ------------------------------------------------------------------------- */

// let arr = [1, 4, 3, 2]

const reverseArray = (arr) => {
    // Write your code here

      let i = 0;
      let arrLength = arr.length; 
      let counterDecrease = arrLength - 1; 

      let placeHolder = null;


      do {

        placeHolder = arr[i];
        arr[i] = arr[counterDecrease]; 
        arr[counterDecrease] = placeHolder;

        i++; 
        counterDecrease--;
        
      } while (i <= counterDecrease)
    
      console.log(arr)
}

// reverseArray(arr);

/* ------------------------------------------------------------------------- *
/* 12. 2D Array - DS */
/* ------------------------------------------------------------------------- */

// let arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ]

const hourglassSum = (arr) => {
  // Write your code here

  // - You need to considering the matrix as field and you have to move inside it
  
  // - Space that you can cover (Left -> Right / Top -> Bottom) with every movements has square shape 
  
  // - Square space are 9x9: 3 numbers in rows and 3 number in columns, so you can't iterate over (Arr.length / 2) in row and in colum. Becarefull, 'cose array's index start at 0, so rows.length are 5 unit long (same for columns)

  // - shifting your position over the field you have to iterate the same sum, so, keep the operations clear as as possibile and avoid to overthink and overengineer the for loop

  let rowPosition = 5, columnPosition = 5
  
  let maxSum = -100;

  for(let i = 0; i < rowPosition - 1; i++) {

    for(let j = 0; j < columnPosition - 1; j++) {

      let sum = (arr[i][j] + arr[i][j+1] + arr[i][j+2]) + (arr[i+1][j+1]) + (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
      
      let arrTest = [arr[i][j], arr[i][j+1], arr[i][j+2], (arr[i+1][j+1]), arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]];
      
      console.log('arrTest:', arrTest)
      
      maxSum = Math.max(maxSum, sum);

    }

  }

  return maxSum

}

// console.log(hourglassSum(arr));

/* ------------------------------------------------------------------------- *
/* 13. Left Rotation */
/* ------------------------------------------------------------------------- */

// let arr = [1, 2, 3, 4, 5]

const rotateLeft = (n, arr) => {
  // Write your code here
  let arrFixed = [];
  let index = null; 

  for(let i = arr.length-1; i >= 0; i--) {
    index = i - n; 
    if(index < 0) {
      arrFixed[index + arr.length] = arr[i]
    } else {
      arrFixed[i - n] = arr[i];
    }
  }
    
  return arrFixed
}

// console.log(rotateLeft(4, arr));


/* ------------------------------------------------------------------------- *
/* 14. Dynamic Array */
/* ------------------------------------------------------------------------- */

function dynamicArray(n, queries) {
    // Write your code here
    let col = []
    for(let i = 0; i < n; i++){
      col[i] = []
    }
    let res = []
    let lastAnswer = 0; 
    
    for(let q = 0; q < queries.length; q++){
      let data = (queries[q][1]^lastAnswer)%n;
      if (queries[q][0] === 1) {
        col[data].push(queries[q][2]);
      } else if (queries[q][0] === 2) {
        let x = queries[q][2]%col[data].length
        lastAnswer = col[data][x]
        res.push(lastAnswer)
      }
    }
  return res
}

/* ------------------------------------------------------------------------- *
/* 15. Sparse Arrays */
/* ------------------------------------------------------------------------- */

const strings = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf']
const queries = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']

function matchingStrings(strings, queries) {
    // Write your code here
    let result = []; 
    
    for(let i = 0; i < queries.length; i++) {
      result[i] = 0;
    }
    
    for(let i = 0; i < queries.length; i++) {
      for(let j = 0; j < strings.length; j++) {
        result[i] = queries[i] === strings[j] ? result[i] += 1 : result[i] += 0;
      }
    }
    return result;
  }

  console.log('Result:', matchingStrings(strings, queries))


