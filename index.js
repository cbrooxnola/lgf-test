// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./lgf-test
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = (array) => {
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });

    return males.length;
};

var femaleCount = (array) => {
    let females = _.reduce(array, function(acc, current){
        if (current.gender === 'female'){
            acc += 1;
        }
        return acc;
    }, 0);

    return females;
};

var oldestCustomer = (array) => {
    let oldest = _.reduce(array, function(acc, current){
        if (current.age > acc.age){
            acc = current.name;
        } 
        return acc;
    });

    return oldest;
};

var youngestCustomer = (array) => {
    let youngest = _.reduce(array, function(acc, current){
        if (current.age < acc.age){
            acc = current.name;
        } 
        return acc;
    }, array[array.length - 1]);

    return youngest;
};

var averageBalance = (array) => {
    let bal = _.pluck(array, 'balance');
    bal = _.map(bal, function(element){
        let num = element.slice(1);
        num = num.replace(',','');
        return Number(num);
    });
    let sum = _.reduce(bal, function(total, element){
        return total + element;
    }, 0);
    let average = (sum / bal.length);
    return average;
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;