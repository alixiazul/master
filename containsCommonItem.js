// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem2(array1, array2) {
    let map = {}

    for (let i=0; i<array1.length; i++) {
        if(!map[array1[i]]) {
            let item = array1[i];
            map[item] = true;
        }
    }
    console.log('Map: ' + map);

    for (i=0; i<array2.length; i++) {
        console.log(array2[i]);
        console.log(map[array2[i]]);
        if (map[array2[i]]) { 
            return true; 
        }
    }
    return false;
}


// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
console.log(containsCommonItem2(array1, array2));