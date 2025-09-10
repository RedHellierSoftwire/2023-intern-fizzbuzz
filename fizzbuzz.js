function fizzbuzz() {
    for (let n = 0; n <= 255; n++) {
        let fizzyArray = [];
        let fizzyOutput = '';

        // Check Divisibility and Apply each Rule
        if (isMultiple(n, 3)) { fizzyArray.push('Fizz'); }
        if (isMultiple(n, 5)) { fizzyArray.push('Buzz'); }
        if (isMultiple(n, 7)) { fizzyArray.push('Bang'); }
        if (isMultiple(n, 11)) { fizzyArray = ['Bong']; }
        if (isMultiple(n, 13)) {  insertFezzBeforeFirstBWord(fizzyArray) }
        if (isMultiple(n, 17)) { fizzyArray.reverse() }

        // Convert fizzyArray to string output OR original number
        fizzyOutput = fizzyArray.length > 0 ? fizzyArray.join('') : n;

        console.log(fizzyOutput);
    }
}

/**
 * 
 * @param {number} divisor 
 * @param {number} dividend 
 * @returns A boolean for whether the divisor is a multiple of the dividend
 */
const isMultiple = (divisor,dividend) => {
    return divisor%dividend === 0;
}

/**
 * Inserts the word Fezz before the first word beginning with B OR at the end of no B word exists
 * @param {Array} fizzyArray 
 */
const insertFezzBeforeFirstBWord = (fizzyArray) => {
    const firstBIndex = fizzyArray.findIndex(word => /^B/.test(word));
    firstBIndex === -1 ? fizzyArray.push('Fezz') : fizzyArray.splice(firstBIndex,0,'Fezz');
}


// Now, we run the main function:
fizzbuzz();

