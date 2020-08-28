console.log('JavaScript Loaded!');

let person = 'Kelsey';
console.log(person);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// All numbers plus one - map

const numbersPlusOne = numbers.map((number) => number + 1);

console.log(numbersPlusOne)

// All numbers greater than 5 - filter

const numbersGreaterThanFive = numbers.filter(function(number){
    return number > 5;
});

console.log('numbers greater than five', numbersGreaterThanFive);

// First number who’s exponent is 64 - find

const exponentIsSixtyFour = numbers.find((number) => number **2 === 64)
console.log('number with exponent of 64', exponentIsSixtyFour)

// Sum of all numbers - reduce

const sumOfAllNumbers = numbers.reduce((total, number) => total + number);
console.log('sum of all numbers', sumOfAllNumbers);

const cookies = [  
{name: 'snickerdoodle', deliciousness: 10},  
{name: 'oatmeal', deliciousness: 15},  
{name: 'm&m', deliciousness: 5},  
{name: 'mint chocolate chip', deliciousness: 17}
]
// All cookies’ names

const cookieNames = cookies.map(cookie => cookie.name);
console.log('name of cookies', cookieNames)

// Average deliciousness

const deliciousnessArray = cookies.map(cookie => cookie.deliciousness);
const averageDeliciousness = deliciousnessArray.reduce((total, rating) => total + rating) / cookies.length
console.log('average deliciousness', averageDeliciousness)


