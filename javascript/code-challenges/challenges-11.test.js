'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named transformToLis that, given an object, returns an array of the key value pairs as html list items.

For example:
{
  name: 'bob',
  age: 32
}

Becomes:
[
<li>name: bob</li>,
<li>age: 32</li>
]

// Object.entreies(obj) -> [[name, bob], [age, 32]]
// iterate through return from object.entries - pull out those elements in each array - map
// .join -> array method, join all the elemnts in an array and return a string based what it to join on
// fashion them into a html list item -> <li>name: bob</li>
------------------------------------------------------------------------------------------------ */

function transformToLis(obj) {
  // Solution code here...
  return Object.entries(obj).map(
    (keyValuePair) => `<li>${keyValuePair.join(': ')}</li>`
  );
}

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
                   3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 2.
                      [1, 3, 5, 7, 9, 5, 5, 5, 1, 2, 3].filter(number => number === target)

// use flat() to remove the nested array situation
// once i have one array of numbers -> to start iterating through the array
// compare my target to each number in the array - does the target = the number at the iteration?
//counter that if the numbers match, increment my counter..
// filter is going to retunr me an array of elements that pass a test... return filtered array length..
------------------------------------------------------------------------------------------------ */

const count = (target, input) => {
  // Solution code here...
  let matchArr = input.flat().filter((number) => number === target);

  return matchArr.length;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.

// use flat to give me one array of all the numbers -> [1, 2, 3, 4, 5, 6, 7, 2, 4, 5, 7, 9, 2, 3, 6,] = matchArr
// use reduce to add all the numbers in taht array that return my reduce value
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  // Solution code here...
  return input
    .flat()
    .reduce((runningTotal, currentValue) => runningTotal + currentValue, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].

// nested loop
// outer loop iterate and look at every nested array
// inner loop:
// 1st - remove elements taht are not numbers and not divisible by five - filter returns me an array of numbers and numbers taht are divisible by 5. (typeOf === 'number && % 5)
// filteredNumbers ..map -> for every filteredNum Math.pow(base, exponent) -> Math.pow(2, filteredNum)
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  // Solution code here...
  return input.map((nestedArr) => {
    return nestedArr
      .filter((number) => number % 5 === 0 && typeof number === 'number')
      .map((filteredNumber) => Math.pow(2, filteredNumber));
  });
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
];

// output = 'Luke Skywalker and Darth Vader and Leia Organa'
// input = an array of objects
// iterate through that array of objects and I need to find only the objects where the gender matches male or female.. -> filter return an array of objects that passs the test.
// once I have those specific objs then I am going to pull the values from the name probperty -> and return a string fo all those values separated by an ' and '
// once I have those specific objs then I am going to pull the values from the name probperty -> map through that array of objs and only return person.name -> ['Leia', 'Luke', 'Darth']
// .join array => string
// and return a string fo all those values separated by an ' and '

let findMaleAndFemale = (data) => {
  // Solution code here...
  return data
    .filter((personobj) => personobj.gender.includes('male'))
    .map((person) => person.name)
    .join(' and ');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the character who is the shortest in height.

// iterate through that array of objects
// look at the height of each personObj
// compare it to the next person's height
// if that next person is taller or shorter ... keep track of the shortest person
// end of my reduce --- return name of accumulator from reduce

------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  // Solution code here...
  return data.reduce((shortestSoFar, nextPerson) => +shortestSoFar.height < +nextPerson.height ? shortestSoFar : nextPerson).name;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return a list of key value pairs inside of li tags', () => {
    expect(transformToLis({ name: 'bob', age: 32 })[0]).toStrictEqual(
      `<li>name: bob</li>`
    );
    expect(transformToLis({ name: 'bob', age: 32 })[1]).toStrictEqual(
      `<li>age: 32</li>`
    );
    expect(transformToLis({})).toStrictEqual([]);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(
      count(5, [
        [1, 3, 5, 7, 9],
        [5, 5, 5],
        [1, 2, 3],
      ])
    ).toStrictEqual(4);
    expect(
      count(3, [
        [1, 3, 5, 7, 9],
        [5, 5, 5],
        [1, 2, 3],
      ])
    ).toStrictEqual(2);
    expect(
      count(12, [
        [1, 3, 5, 7, 9],
        [5, 5, 5],
        [1, 2, 3],
      ])
    ).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(
      count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])
    ).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 3', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [
      [1, 2, 3, 4, 5],
      [6, 7, 2, 4, 5, 7],
      [9, 2, 3, 6],
    ];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 4', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(
      divisibleByFiveTwoToThePower([
        [10, 20, 5, 4],
        [5, 6, 7, 9],
        [1, 10, 3],
      ])
    ).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(
      divisibleByFiveTwoToThePower([
        [1, 2, 3],
        [5, 10, 15],
      ])
    ).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(
      divisibleByFiveTwoToThePower([
        ['one', 'two', 'five'],
        ['5', '10', '15'],
        [5],
      ])
    ).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 5', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual(
      'Luke Skywalker and Darth Vader and Leia Organa'
    );
    expect(
      findMaleAndFemale([
        { name: 'person', gender: 'female' },
        { gender: 'lol' },
        { name: 'persontwo', gender: 'male' },
      ])
    ).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 6', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
