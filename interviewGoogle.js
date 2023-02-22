function findSumInArray(array, sum) {
    let complements = new Set()

    for (let i= 0; i<array.length; i++) {
        console.log('number: ' + array[i])
        if (complements.has(array[i])) {
            return true
        }
        complements.add(sum - array[i])
    }
    return false
}

const array = [1, 2, 3, 9];
//const array = [1, 2, 4, 4];
const sum = 8;
console.log(findSumInArray(array,sum));