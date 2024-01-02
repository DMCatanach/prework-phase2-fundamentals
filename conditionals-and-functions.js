//Equals
let equals = 1 === 1; //compares values and types; ignore type with ==
console.log(equals)

//Greater than
let greeaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//Greater than or equals
let greaterThanEq = 5 >= 5;

//Less than or equals
let lessThanEq = 4 <= 9;

//Not equals
let notEquals = 5 != 2;

let storeA = 1.40;
let storeB = 3.40;

let storeAIsLower = storeA < storeB;
console.log(storeAIsLower);

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    let squared = number * number;
    return squared;
}

let squaredNumber = squareNum(7);
console.log(squaredNumber);

let x = 10;

function addNumbers(n, m, x) {
    console.log(x);
    let b;
    if (1===1) {
        let b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers (2, 3, 7);
console.log(x);

let ourArray = [1, 2, 3, 4, 5, 6, 7];
 let arrLen = ourArray.length;
for(let i = 0; i < arrLen; i++) {
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for (let j = 0; j < 10; j++) {
        console.log("j is equal to: " + j);
    }
}

let y = 0;
while (y < 10) {
    console.log('Ran');
    y = y + 1;
}

