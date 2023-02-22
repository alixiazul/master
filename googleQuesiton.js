//Google Question = First recurring character
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//const array = [2,5,1,2,3,5,1,2,4];
//const array = [2,1,1,2,3,5,1,2,4];
//const array = [2,3,4,5];
const array = [2,5,5,2,3,5,1,2,4];

// First approach: go through the array twice
function firstRecurringCharacter(array){
    for (let i=0; i<array.length; i++) {
        for (let j=i+1; j<array.length; j++) {
            if (array[i] == array[j]) {
                return array[i];
            }
        }
    }
    return undefined;
}

// Second approach: use a hash table to store unique values
function firstRecurringCharacter2(array){
    let characters = new Set();
    for (let i=0; i<array.length; i++) {
        if (characters.has(array[i])) {
            return array[i];  
        } else {
        characters.add(array[i]);
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter2(array));
