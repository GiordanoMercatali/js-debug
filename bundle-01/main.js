/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1: Prints "i"'s value in console until "i" becomes higher than 5.
for (let i = 0; i < 5; i++) { // Change "major" with "minor" symbol, or else it'll stop immediately since 0 is already lower than 5.
    
    console.log(i);
}


// ESERCIZIO 2: Returns the value of "num" if it is Even, so it's divisible by 2 without returning any. It should also add 5 to the result.
function addIfEven(num) {
    if (num % 2 === 0) { // We need "===" to compare the two values, since "=" is used to set the first equal to the second.
        return num + 5; // The function will return "num" without the +5
    }
    
    return num;
}
let number = 4; // Declared an element to use as "num".

let exerciseTwo = addIfEven(number);

console.log(exerciseTwo);


// ESERCIZIO 3: Prints "i"'s value in console until "i" becomes higher than 5.
function loopToFive() {
    for (let i = 0; i <= 5; i++) { // We need to change the "commas" with "semicolons".
        console.log(i);
    }
}

let ciao = loopToFive();
console.log(ciao);


// ESERCIZIO 4 (suggerimento: ci sono 7 errori) : Pushes even numbers to "evenNumbers" array and returns the array itself.
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) { // The last condition of the for loop must not have the "semicolon", also if we want the "evenNumber" array to contain 8, we don't need the - 1 after numbers.length.
        const curNumber = numbers[i];
        if (curNumber % 2 === 0) { // We don't compare the entire array, just the value in the "i" position, so I made a curNumber element to contain that value. We need "===" to compare the two values, since "=" is used to set the first equal to the second. Removed semicolon.
            evenNumbers.push(curNumber); //We don't need "i", but the current element of "numbers" array. We use curNumber for it.
        }
         //Return goes outside the for loop.
    }
    // console.log(evenNumbers);
    return evenNumbers;
}
let exerciseFour = displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(exerciseFour);