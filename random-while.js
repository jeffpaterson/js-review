var upper = 100000000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber ) {
   guess = getRandomNumber( upper );
  attempts += 1;
}

document.write("<p>The random number was " + randomNumber + "</p><p>It took " + attempts + " attempts to find it.</p>");