const planets = ['Moon', 'Sun', 'Mercury', 'Venus', 'Mars'];

const elements = ['Water', 'Earth', 'Fire', 'Air'];

/*Note: all data could be placed in one object,
like {water: {moon: "", sun: ""...}, earth: {moon:""...}}
leave this for another project*/

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

   'Moon and Fire': "go for dancing",
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

//random planet and random element concatenation
const randomPlanet = planets[randomNum(planets)];
const randomElement = elements[randomNum(elements)];
const planetElement = `${randomPlanet} and ${randomElement}`;

//log the messages
for (let activity in activities ) {
   if (activity === planetElement) {
      console.log(`At the moment your planet is ${randomPlanet}`);
      console.log(`and your element is ${randomElement}.`);
      console.log(`It is time to ${activities[activity]}`);
   }
};
