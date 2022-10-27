'use strict';

const movies = require('./movies');

let sortYearComparator = (a, b) => {
  if (a.year < b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
};

console.log(movies);

let sortTitleComparator = (a, b) => {
  const titleA = a.title.replace('The ', '');
  const titleB = b.title.replace('The ', '');

  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
};


// Complete for Code Challenge 28
function sortYear(movies) {
  return movies.sort(sortYearComparator);
}

function sortTitle(movies) {
  return movies.sort(sortTitleComparator);
}

function inGenre(movies, genre) {
  return movies.filter(movie => movie.genres.includes(genre));
}

module.exports = { sortYear, sortTitle, inGenre };
