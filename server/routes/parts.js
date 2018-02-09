const express = require("express");
const router = express.Router();
let spaceshipParts = require('../modules/spaceship-parts');

router.get('/parts', function(req, res){ // parts/parts baby
  res.send(spaceshipParts);
});

router.get('/new', function(req, res){ // keep me posted if you solve this one
  spaceshipParts.push(req.body);
  res.sendStatus(200);
});

router.get('/countRocket', function(req, res){ // count your rockets or rocket your count?
  let numberOfSpaceships = Math.floor(spaceshipParts[0].inStock/spaceshipParts[0].needed);
  for(let i = 1; i < spaceshipParts.length; i++){
    numberOfSpaceships = Math.min(numberOfSpaceships, Math.floor(spaceshipParts[i].inStock/spaceshipParts[i].needed));
  }

  let howMany = { count: numberOfSpaceships }
  res.send(numberOfSpaceships);  // numberOfSpaceships is a number, how does express like that? howMany ways to say this...
});

module.exports = router;
