arrayOfStuff = [1, 2, 3, 4,'five', 5, 6, 7, 8, 9, 10,'one','two','three','four','six','seven','eight','nine','ten'];

function removeStrings(arr){
    let listOfNumbers = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            listOfNumbers.push(arr[i])
        }
    
    }
    return listOfNumbers
}

console.log(removeStrings(arrayOfStuff))