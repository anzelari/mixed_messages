const planets = ['Moon', 'Sun', 'Mercury', 'Venus', 'Mars'];

const elements = ['Water', 'Earth', 'Fire', 'Air'];

const activities = {
   'Moon and Water': "mediate",
   'Sun and Water': "express your emotions through art",
   'Mercury and Water': "talk about your feeleing",
   'Venus and Water': "fall in love",
   'Mars and Water': "go for swimming",

   'Moon and Earth': "do yoga",
   'Sun and Earth': "take a massage",
   'Mercury and Earth': "play with modeling clay ",
   'Venus and Earth': "eat something delicious ",
   'Mars and Earth': "cook a dinner for your family",

   'Moon and Fire': "dance",
   'Sun and Fire': "add your picture to Instagram",
   'Mercury and Fire': "be straightforward and tell the truth",
   'Venus and Fire': "show your love, be expressive and creative",
   'Mars and Fire': "start something new",

   'Moon and Air': "visit Facebook",
   'Sun and Air': "do volunteering or donate",
   'Mercury and Air': "meet your friends ",
   'Venus and Air': "do something silly together with your partner",
   'Mars and Air': "do coding"
};

// random number generator
const randomNum = (arr) => {
   return Math.floor(Math.random()*arr.length);
};

//choose random planet and random element, and concatenate them
const randomPlanetIndex = randomNum(planets);
const randomElementIndex = randomNum(elements);
const planetElement = `${planets[randomPlanetIndex]} and ${elements[randomElementIndex]}`;
console.log(planetElement);


const messageOne = "Your planet is ";
const messageTwo = "Your element is ";
const messageThree = "It is time to ";