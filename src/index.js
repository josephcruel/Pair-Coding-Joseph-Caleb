// arrayOfStuff = [1, 2, 3, 4,'five', 5, 6, 7, 8, 9, 10,'one','two','three','four','six','seven','eight','nine','ten'];

// function removeStrings(arr){
//     let listOfNumbers = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'number') {
//             listOfNumbers.push(arr[i])
//         }
    
//     }
//     return listOfNumbers
// }

// console.log(removeStrings(arrayOfStuff))


// //A different solution 

// function arrayNumber(arr) {
//     return arr.filter(i => typeof i == 'number')
// }

// console.log(arrayNumber([1,2, "Joseph", 4,5, "Caleb"]))


// myArray = [[1,2,3],[4,5,6],[10,20,5],[2000,4000,6000]];

// function largeNumber(arr) {
//     let outputArray = []
//     for(let i = 0; i < arr.length; i++) {
//         outputArray.push (Math.max(...arr[i]))
//     }
//     return outputArray
// }
// console.log(largeNumber(myArray));

// //Another way

// function arrayOfArray(arr) {
//     let newArray = []
//     for(let i = 0; i < arr.length; i++) {
//         let largest = arr[i][0]
//         for(let j = 0; j < arr[i].length; j++) {
//             if(arr[i][j]>largest) {
//                 largest = arr[i][j]
//             }
//         }
//         newArray.push(largest)
//     }
//     return newArray
// }
// console.log(arrayOfArray(myArray));


// //function to find the area of a rectangle
// let a = 3
// let b = 8
// function recArea(a,b) {
//     return a * b
// }
// console.log(recArea(a,b))

//Reverse Array

let forwardsArray = [1,2,3,4,5,6,7]

function reverseArray(arr){
    let output = []
    for (i = 0; i < arr.length; i++){
        output.unshift(arr[i])
    }
    return output
}

console.log(reverseArray(forwardsArray))

//Another way

function reverseArray(arr){
    let output = []
    for (i = arr.length; i > 0; i--){
        output.push(arr[i])
    }
    return output
}

console.log(reverseArray(forwardsArray))