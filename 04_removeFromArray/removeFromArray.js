const removeFromArray = function(array, ...otherArguments) {
    for (const arg of otherArguments) {
        while(array.includes(arg)) {
            let indexOfArg = array.indexOf(arg);
            array.splice(indexOfArg, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
