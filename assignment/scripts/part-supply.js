console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
console.log( '---1 my work starts here------------------------------------');
let partNeeded = 40; 
console.log( 'This is what we need for parts', partNeeded );
console.log( '---1 my work ends here--------------------------------------');
// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
console.log( '---2 my work starts here-------------------------------------');

let supplyChanges = [3, 5, -6, 0, 7, 11, ]
console.log('this is our supply changes', supplyChanges);
console.log( '---2 my work ends here---------------------------------------');

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log( '---3 my work starts here-------------------------------------');

console.log('this is the second value of supplyChanges;', supplyChanges[2]);

console.log( '---3 my work ends here-----------------------------------------');

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log( '---4 my work starts here---------------------------------------');

supplyChanges.pop()
console.log('removed 11 from the supplyChanges');
console.log('The supplychanges new update:',supplyChanges);

console.log( '---4 my work ends here-----------------------------------------');


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
console.log( '---5 my work starts here-----------------------------------------');

supplyChanges.push(25);
console.log('update the supplyChanges', supplyChanges);

console.log( '---5 my work ends here-------------------------------------------');

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
console.log( '---6 my work starts here-------------------------------------------');



for(let x = 0; x < supplyChanges.length; x++){
    if( supplyChanges[x] > 0){
        console.log('Added parts', supplyChanges[x]);
    }else if( supplyChanges[x] == 0 ){
        console.log('no changes', supplyChanges[x]);
    }
    else{
        console.log('Removed parts', supplyChanges[x]);
    }
}

console.log( '---6 my work ends here---------------------------------------------');

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
console.log( '---7 my work starts here---------------------------------------------');

for(x of supplyChanges ){
    if( x > 0){
        console.log('Added parts', x);
    }else if( x == 0 ){
        console.log('no changes', x);
    }
    else{
        console.log('Removed parts', x);
    }
}

console.log( '---7 my work ends here-----------------------------------------------');

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

console.log( '---8 my work stars here-----------------------------------------------');


let sumAll = 0; 
for (let index = 0; index  < supplyChanges.length; index++) {
    sumAll += supplyChanges[index];
}
    
console.log(sumAll);
console.log( '---8 my work ends here-----------------------------------------------');


// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

//572%7 = 81 boxes == 567 parts ; 5 parts left over
// while leftOver > 5 keep filling the boxex

let totalParts = 572; 
boxFillled = 0; 

while( totalParts > 6 ) { //while totalParts is greater than six run the code below. 
        totalParts -= 7; // remove 7 from totalParts   
        boxFillled++; // increase boxFilled by one.  This loop back to the beginning 

}
console.log(`parts left over: ${totalParts} and how many boxes filled: ${boxFillled}` );