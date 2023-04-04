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


myArray = [[1,2,3],[4,5,6],[10,20,100]];

function largeNumber(arr) {
    let outputArray = []
    for(let i = 0; i < arr.length; i++) {
        outputArray.push (Math.max(...arr[i]))
    }
    return outputArray
}
console.log(largeNumber(myArray));