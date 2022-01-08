/* 
  Component Tree:

    1. Solve Me First
    2. Simple Array Sum
    3. Compare The Triplets
    4. A Very Big Sum
    5. Diagonal Difference 

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
