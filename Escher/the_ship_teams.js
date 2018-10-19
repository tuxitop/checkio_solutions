#!/usr/bin/env checkio --domain=js run the-ship-teams

// https://js.checkio.org/mission/the-ship-teams/

//
// END_DESC

"use strict";

function twoTeams(sailors) {
    const [ teamOne, teamTwo ] = [[], []];

    Object.keys(sailors).sort().forEach((sailor) => {
      if (sailors[sailor] > 40 || sailors[sailor] < 20) {
        teamOne.push(sailor);
      } else {
        teamTwo.push(sailor);
      }
    });
    return [
        teamOne,
        teamTwo
    ];
}

var assert = require('assert');
if (!global.is_checking) {
  console.log('Example:')
  console.log(twoTeams({
    'Smith': 34,
    'Wesson': 22,
    'Coleman': 45,
    'Abrahams': 19
  }))
}
