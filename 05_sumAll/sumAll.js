const sumAll = function(startNum, endNum) {
    if(startNum < 0 || endNum < 0) return 'ERROR';
    else if(!Number.isInteger(startNum) 
        || !Number.isInteger(endNum)) return 'ERROR';

    let sum = 0;
    let minNum = startNum < endNum ? startNum : endNum ;
    let maxNum = startNum > endNum ? startNum : endNum ;
    for(let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
