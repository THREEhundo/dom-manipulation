// import _ from 'lodash';
//
// function component() {
//   const element = document.createElement('div');
//
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//   return element;
// }

// document.body.appendChild(component());

import myName from './myName';

function component() {
  var element = document.createElement('div');

  element.innerHTML = myName('Sam');
  return element;
}

document.body.appendChild(component());

import {
  functionOne,
  functionTwo
} from './myModule'

function functs() {
  var element = document.createElement('div');

  element.innerHTML = `${functionOne()}, ${functionTwo()}, THREE, FOUR, FIVE`;
  return element;
}

document.body.appendChild(functs());