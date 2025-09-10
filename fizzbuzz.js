// This is our main function
function fizzbuzz() {

    

    for (let n = 1; n <= 100; n++) {
        const fizzyArray = [];
        let fizzyOutput = '';

        if (isMult(n, 3)) { fizzyArray.push('Fizz'); }
        if (isMult(n, 5)) { fizzyArray.push('Buzz'); }

        fizzyOutput = fizzyArray.length > 0 ? fizzyArray.join('') : n

        console.log(fizzyOutput);
    }

}

const isMult = (n,m) => {
    return n%m === 0;
}

// Now, we run the main function:
fizzbuzz();

