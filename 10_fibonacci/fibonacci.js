const fibonacci = function(num) {
    const number = Number(num); 
    if(number < 0) return "OOPS";
    const fibonacciSerie = [0, 1];
    for(let i = 2; i <= number; i++) {
        fibonacciSerie[i] = fibonacciSerie[i - 1] + fibonacciSerie[i - 2];
    }
    return fibonacciSerie[number];
};

// Do not edit below this line
module.exports = fibonacci;
