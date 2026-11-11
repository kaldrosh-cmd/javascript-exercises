const findTheOldest = function(people) {
    const oldest = people.reduce((acc, curr) => {
        if (getAge(curr) > getAge(acc)) {
            return curr;
        } else {
            return acc;
        }
    });
    return oldest;
};

const getAge = function(person) {
    let endYear = person.yearOfDeath;
    if (!endYear) {
        endYear = new Date().getFullYear();
    }
    return endYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
