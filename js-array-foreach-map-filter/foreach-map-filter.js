
function forEachMachinery(arr, callback){ //This is the function like a forEach
    let output = [];
    for( let i = 0; i < arr.length; i ++){ 
        const val = callback(arr[i], i, arr); //Poner en callback es como decir ¿Que quieres poder llamar después en la siguiente función? 
        output.push(val);
    }
    return output;
};  

function doubleValues(arr){
    let output = [];
    arr.forEach(function(i){
        output.push(i * 2);
    })
    return output;
}

function onlyEvenValues(arr){
    let output = [];
    arr.forEach(function(i, j){            
        if (i % 2 === 0){
            output.push(i);
            }
    })
    return output;
}

function showFirstAndLast(arr){
    let output = [];
    arr.forEach(function(i, j){
        let str = i[0]+i[i.length -1];
        output.push(str);
    })
    return output;
}

function addKeyAndValue(arr,key,value){
    let updatedArr = [];
    arr.forEach(function(i){
        i[key] = value;
        updatedArr.push(i);
    })
    return updatedArr;  
}

function isVowel(char){
    return 'aeiou'.indexOf(char) !== -1;
}

function vowelCount(str){
   let obj = {};
   str = str.toLowerCase();
   arr = str.split(""); 
   //first loop
   arr.forEach(function(i){
        if (isVowel(i)){
            let letterCount = 0;
            //second nested loop
            arr.forEach(function(j){
                if ( i === j){
                    letterCount ++;
                    }
                })
            obj[i] = letterCount;
            }
    })
    return obj;
}
//Nailed at the first attempt!!!

//#### M A P   F U N C T I O N S ####

//THIS FUNCTION IS WRITTEN LIKE A forEach FUNCTION, NOT MAP
// function doubleValuesWithMap(arr){
//     let output = [];
//     arr.map(function(i){
//         output.push(i * 2);
//     })
//     return output;
// }

//THIS IS WRITTEN FOR MAP, BECAUSE IT CREATES A NEW ARRAY
function doubleValuesWithMap(arr){
    let output = arr.map(function(i){
        return i * 2;
    })
    return output;
}

// DITTO LINE 74
// function valTimesIndex(arr){
//     let output = [];
//     arr.map(function(i){
//         output.push(arr.indexOf(i) * i);
//     })
//     return output;
// }

function valTimesIndex(arr){
    output = arr.map(function(i){
        return (arr.indexOf(i) * i);
    })
    return output;
}

// function extractKey(arr, key){
//     let output = [];
//     arr.forEach(function(i){
//         output.push(i[key]);
//     })
//     return output;
// }

function extractKey(arr, key){
    output = arr.map(function(i){
        return (i[key]);
    })
    return output;
}

function extractFullName(arr){
    output = arr.map(function(i){
        let keys = Object.keys(i);
        let item = "";
        keys.forEach(function(j){
            item += (i[j]) + " ";
        })
        return item.slice(0, -1); //just to get rid of the last " " char in the stringitem;
    })
    return output;
}

//#### F I L T E R   F U N C T I O N S ####

function filterByValue(arr, key) {
    output = arr.filter(function(i){
        return i[key] === true;           
    }) 
    return output;
}

function find(arr, searchValue){
    output = arr.filter(function (i){
        return i === searchValue;
    })
    return output[0];
}

function findInObj(arr, key, searchValue) {
    output = arr.filter(function(i){
        return i[key] === searchValue;
    })
    return output[0];
}

function removeVowels(str) {
    str = str.toLowerCase();
    arr = str.split(""); 
    let output = "";
    arr2 = arr.filter(function(i){
        return 'aeiou'.indexOf(i) === -1;
    })
    arr2.forEach(function(i){
        output += i;
    })
    return output
}

function doubleOddNumbers(arr) {
    oddArr = arr.filter(function(i){
        return i % 2 !== 0;
    })
    output = oddArr.map(function(j){
        return j * 2;
    })
    return output;
}
