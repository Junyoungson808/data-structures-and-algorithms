'use strict';

const { Stack } = require(".");

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function called backButtonHistory that simulates the behavior of a back button in a web browser using a stack. The function should take an array of website URLs as input and return the URL of the previous website when the back button is clicked.

------------------------------------------------------------------------------------------------ */

const websites = [
  'https://www.google.com',
  'https://www.facebook.com',
  'https://www.github.com',
  'https://www.linkedin.com'
];

function backButtonHistory(websites) {
  const history = new Stack();
  websites.forEach((site) => {
    history.push(site);
  });
  function back() {
    if(history.isEmpty()) {
      return null;
    }
    return history.pop();
  }

  console.log(back()); // should print 'https://www.linkedin.com'
  console.log(back()); // should print 'https://www.github.com'
  console.log(back()); // should print 'https://www.facebook.com'
  console.log(back()); // should print 'https://www.google..com'
  console.log(back()); // should print null (stack is empty)
}

backButtonHistory();
