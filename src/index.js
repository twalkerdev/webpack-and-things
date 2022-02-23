import _ from 'lodash';
import { add } from './add.js';

console.log(add(5, 6));

const myNums = {
  x: 56,
  y: 43,
};

const numsValue = add(myNums.x, myNums.y);
const joining = _.join('Hello', 'world');

console.log(numsValue);
console.log(joining);
