const count = 100;

for (let i = 1; i <= count; i++) {
    if (modThreeAndFive(i)) console.log('FizzBuzz');
    else if (modThree(i)) console.log('Fizz');
    else if (modFive(i)) console.log('Buzz');
    else console.log(i);
}


// Function
function modThree(i) {
    return i % 3 === 0;
}

function modFive(i) {
    return i % 5 === 0;
}

function modThreeAndFive(i) {
    return i % 3 === 0 && i % 5 === 0;
}