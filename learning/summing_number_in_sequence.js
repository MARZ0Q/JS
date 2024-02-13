

function fibonacciRecursion1(n) {
    // if(n===1){
    //     return 0;
    // }
    // else if (n === 2) {
    //     return 1;
    // }
    if (true) {
        console.log(n)
        return fibonacciRecursion1(n - 1) + fibonacciRecursion1(n - 2);
    }
}

// console.log(fibonacciRecursion1(6))  // for some reason It doesn't give you maximum callstack


function fibonacciRecursion2(n) {
    if(n===1){
        return 0;
    }
    else if (n === 2) {
        return 1;
    }
    return fibonacciRecursion2(n - 1) + fibonacciRecursion2(n - 2);  // Note that calling recursion twice at the same time!!
    
}

console.log(fibonacciRecursion2(5))