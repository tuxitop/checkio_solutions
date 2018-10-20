#!/usr/bin/env checkio --domain=js run compass-map-and-spyglass

// https://js.checkio.org/mission/compass-map-and-spyglass/

//
// END_DESC

'use strict';

function distance(from, to) {
  // if both nodes are on the same row or column or diagonal
  if (from[0] === to[0] || from[1] === to[1]) {
    return Math.abs(to[0] - from[0]) + Math.abs(to[1] - from[1]);
  }
  // if nodes are diagonal
  if (Math.abs(to[0] - from[0]) === Math.abs(to[1] - from[1])) {
    return Math.abs(to[0] - from[0]);
  }

  // if they are note diagonal/vertical/horizantal we should find a midPoint
  let midPoint = [...from];
  while (midPoint[0] !== to[0] && midPoint[1] !== to[1]) {
    if (to[0] > midPoint[0]) {
      midPoint[0]++;
    } else if(to[0] < midPoint[0]){
      midPoint[0]--;
    }
    if (to[1] > midPoint[1]) {
      midPoint[1]++;
    } else if (to[1] < midPoint[1]) {
      midPoint[1]--;
    }
  }
  return distance(from, midPoint) + distance(midPoint, to);

}

function navigation(seaside) {
  let Y, C, M, S;
  // find the position of items
  for (let row = 0; row < seaside.length; row++) {
    for (let col = 0; col < seaside[row].length; col++) {
      switch (seaside[row][col]) {
        case 'Y':
          Y = [row, col];
          break;
        case 'C':
          C = [row, col];
          break;
        case 'M':
          M = [row, col];
          break;
        case 'S':
          S = [row, col];
          break;
      }
    }
  }

  return distance(Y, C) + distance(Y, M) + distance(Y, S);
}

var assert = require('assert');
if (!global.is_checking) {
  console.log('Example:');
  console.log(navigation([
    ['Y', 0, 0, 0, 'C'],
    [ 0,  0, 0, 0,  0],
    [ 0,  0, 0, 0,  0],
    ['M', 0, 0, 0, 'S']]));

  // These "asserts" are used for self-checking and not for an auto-testing
  assert.equal(navigation([
    ['Y', 0, 0, 0, 'C'],
    [ 0,  0, 0, 0,  0],
    [ 0,  0, 0, 0,  0],
    ['M', 0, 0, 0, 'S']]), 11);

  assert.equal(navigation([
    [ 0,  0, 'C'],
    [ 0, 'S', 0],
    ['M','Y', 0]]), 4);

  assert.equal(navigation([
    [ 0,  0, 0,  0,  0,  0,  0],
    [ 0,  0, 0, 'M', 0, 'S', 0],
    [ 0,  0, 0,  0,  0,  0,  0],
    [ 0,  0, 0, 'C', 0,  0,  0],
    [ 0, 'Y',0,  0,  0,  0,  0],
    [ 0,  0, 0,  0,  0,  0,  0]]), 9);
  console.log('Coding complete? Click \'Check\' to earn cool rewards!');
}
