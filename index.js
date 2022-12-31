
const superheroe = require('superheroes');
const supervillains = require('supervillains');

superheroe.all;
//=> ['3-D Man', 'A-Bomb', …]

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

superheroe.random();
//=> 'Spider-Ham'

supervillains.random();
//=> 'Mud Pack'

/* The console.log prints out the output of the packages
you can try it in your terminal/command line
by typing node then your file name
inside the project folder */
console.log(superheroe);
console.log(supervillains);





