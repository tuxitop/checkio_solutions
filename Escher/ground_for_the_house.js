#!/usr/bin/env checkio --domain=js run ground-for-the-house

// https://js.checkio.org/mission/ground-for-the-house/

//
// END_DESC

'use strict';

function house(plan) {
  const ground = plan.trim().split('\n');
  let upperLeft = null;
  let bottomRight = null;

  ground.forEach((line, row) => {
    line.split('').forEach((piece, col) => {
      if (piece === '#') {
        if (!upperLeft) {
          upperLeft = [row, col];
          bottomRight = [row, col];
        } else {
          if ( col < upperLeft[1] ) {
            upperLeft[1] = col;
          }
          if (row > bottomRight[0]) {
            bottomRight[0] = row;
          }
          if (col > bottomRight[1]) {
            bottomRight[1] = col;
          }
        }
      }
    });
  });
  if (!upperLeft) {
    return 0;
  }
  return (bottomRight[0] - upperLeft[0] + 1) * (bottomRight[1] - upperLeft[1] + 1);
}

var assert = require('assert');
if (!global.is_checking) {
  console.log('Example:');
  console.log(house(`
0000000
##00##0
######0
##00##0
#0000#0
`));

  // These "asserts" are used for self-checking and not for an auto-testing
  assert.equal(house(`
0000000
##00##0
######0
##00##0
#0000#0
`), 24);

  assert.equal(house(`0000000000
#000##000#
##########
##000000##
0000000000
`), 30);

  assert.equal(house(`0000
0000
#000
`), 1);

  assert.equal(house(`0000
0000
`), 0);

  assert.equal(house(`0##0
0000
#00#
`), 12);

  console.log('Coding complete? Click \'Check\' to earn cool rewards!');
}
