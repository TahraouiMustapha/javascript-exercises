function getAge (birth, death) {
    if(!death) {// if death != undefined, null , 0, NaN..
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
   return people.reduce((oldest, current) => {
    const oldestAge = getAge(
        oldest.yearOfBirth, 
        oldest.yearOfDeath
    );
    const currentAge = getAge(
        current.yearOfBirth, 
        current.yearOfDeath
    );

    return currentAge < oldestAge ? oldest: current;
   })
};

// Do not edit below this line
module.exports = findTheOldest;
