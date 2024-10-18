const palindromes = function (string) {
    const myArray = string.replace(/[\s,.!]+/g, '').split('');
    return myArray.join().toLowerCase() === myArray.reverse().join().toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
