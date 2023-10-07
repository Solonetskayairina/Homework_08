    let numbersInOneRow = '';
    for (let i = 10; i <= 20; i++) {
        numbersInOneRow += i+ (i < 20 ? ', ' : '');
    }

    let squaresOfNumbers = '';
    for (let i = 10; i <= 20; i++) {
        squaresOfNumbers += i * i + (i < 20 ? ', ' : '');
    }

    let multiplicationTable= '<table border="1" cellpadding="10" cellspacing="0">';
    for (let i = 7; i <= 7; i++) {
        multiplicationTable += '<tr>';
       for (let j = 1; j<= 10; j++) {
           multiplicationTable += '<td>';
           multiplicationTable += `${i} * ${j} = ${i * j}`;
           multiplicationTable += '</td>';
       }
        multiplicationTable += '</tr>';
    }
    multiplicationTable += '</table>';

    let sumOfAllIntegers = 0;
    for (let i = 1; i <= 15; i++) {
        sumOfAllIntegers += i;
    }

    let productOfAllIntegers = 1;
    for (let i = 15; i <= 35; i++) {
        productOfAllIntegers *= i;
    }

    let arithmeticMean = 0;
        for (let i = 1; i <= 500; i++) {
            arithmeticMean = arithmeticMean += i;
        }
    arithmeticMean = arithmeticMean / 500;

    let sumOfOnlyEvenNumbers = 0;
    for (let i = 30; i <= 80; i++) {
        if ( i % 2 === 0 ) {
                sumOfOnlyEvenNumbers += i;
        }
    }

    let numbersAreMultiplesOfThree = '';
    for (let i = 100; i <= 200; i++) {
        if (i % 3 === 0){
                if (numbersAreMultiplesOfThree !== '') {
                    numbersAreMultiplesOfThree += ', ';
                }
            numbersAreMultiplesOfThree += i;
        }
    }

    let n= 6;
    let naturalNumberDivisors = '';
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            naturalNumberDivisors += i + (i < n ? ", " : '');
        }
    }

    let evenDivisors = '';
    for (let i = 1; i <= n; i++) {
        if ( n % i === 0 && i % 2 === 0) {
            evenDivisors += i + (i < n ? ", " : '');
        }
    }

    let sumOfEvenNumbers = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 0) {
            sumOfEvenNumbers += i;
        }
    }

    let resultMultiplicationTables = '<table border="1" cellpadding="10" cellspacing="0">'
    for (let i=1; i<=10; ++i) {
        resultMultiplicationTables += '<tr>';
        for (let j=1; j<=10; ++j) {
            resultMultiplicationTables += '<td>';
            resultMultiplicationTables += `${i} * ${j} = ${i * j}`
            resultMultiplicationTables += '</td>';
        }
        resultMultiplicationTables += '</tr>';
    }
    resultMultiplicationTables += '</table>';

    let result = `1. Display the numbers from 10 to 20 on the page in one line separated by commas : ${numbersInOneRow}`
        + '<br>'
    + `2. Print the squares of numbers from 10 to 20 : ${squaresOfNumbers}`
        + '<br>'
    + `3. Display the multiplication table by 7 : ${multiplicationTable}`
    + `4. Find the sum of all integers from 1 to 15 : ${sumOfAllIntegers}`
        + '<br>'
    + `5. Find the product of all integers from 15 to 35 : ${productOfAllIntegers}`
        + '<br>'
    + `6. Find the arithmetic mean of all integers from 1 to 500 : ${arithmeticMean}`
        + '<br>'
    + `7. Output the sum of only even numbers in the range from 30 to 80 : ${sumOfOnlyEvenNumbers}`
        + '<br>'
    + `8. Output all numbers in the range from 100 to 200 multiples of 3 : ${numbersAreMultiplesOfThree}`
        + '<br>'
    + `9. A natural number is given. Find and display all its divisors on the page : ${naturalNumberDivisors}`
        + '<br>'
    + `10. Determine the number of its even divisors : ${evenDivisors}`
        + '<br>'
    + `11. Find the sum of its even divisors : ${sumOfEvenNumbers}`
        + '<br>'
    + `12. Print the complete multiplication table from 1 to 10 : ${resultMultiplicationTables}`

   document.write(result);