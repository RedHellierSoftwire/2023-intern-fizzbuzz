// This is our main function
function fizzbuzz() {

    

    for (let n = 0; n <= 255; n++) {
        let fizzyArray = [];
        let fizzyOutput = '';

        if (isMult(n, 3)) { fizzyArray.push('Fizz'); }
        if (isMult(n, 5)) { fizzyArray.push('Buzz'); }
        if (isMult(n, 7)) { fizzyArray.push('Bang'); }
        if (isMult(n, 11)) { fizzyArray = ['Bong']; }
        if (isMult(n, 13)) { 
            const firstBIndex = fizzyArray.findIndex(word => /^B/.test(word));
            firstBIndex === -1 ? fizzyArray.push('Fezz') : fizzyArray.splice(firstBIndex,0,'Fezz');
        }
        if (isMult(n, 17)) { fizzyArray.reverse() }

        fizzyOutput = fizzyArray.length > 0 ? fizzyArray.join('') : n;

        console.log(fizzyOutput);
    }

}

const isMult = (n,m) => {
    return n%m === 0;
}

// Now, we run the main function:
fizzbuzz();

