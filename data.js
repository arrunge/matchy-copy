/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare variable animal - empty object
var animal = {};
//assign species property to animal using dot notation
animal.species = 'dog';
//assign name property to animal using bracket notation
animal["name"] = 'Scout';
//assign property noises to animal with empty array
animal["noises"] = [];
//print animal object to console
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare array 'noises' and assign empty array
var noises = [];
//use bracket notation to add noise - string to array
noises[noises.length] = "bark";
//adding another noises using push method
noises.push('howl');
//add element to start of noises array
noises.unshift('whine');
//using bracket notation at another noise - not hard coded
noises[noises.length] = 'growl';
//console log length of noises
console.log(noises.length);
//console log last element in noises
console.log(noises[noises.length - 1]);
//console log array - noises
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign noises array from part 2 to animal object
//use bracket notation
animal['noises'] = noises;
//adding another noise to array within object
animal['noises'][noises.length] = 'sigh';
//console log updated animal object
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Able to access properties of an object using the key. dot and bracket notation can both be used to access values from an object.
 * Example of each: object.key or object["key"];
 * 2. What are the different ways of accessing elements on arrays?
 *Arrays can be accessed using the index. Determining the length of an array is helpful so you dont have to hard code.
 different methods can also be used - examaple: .pop() - remove from end
.push() - add element to end of array; .unshift() - add element to start of array; .shift() -0 remove element from start of array
 * ******************************************************************* 
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare array - animals and assing empty array
var animals = [];
//push animal object to array
animals.push(animal);
//create duck object
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh'],
}
//push duck object to animals array
animals.push(duck);
//creat 2 more objects and add to animals array
var cat = {
  species: 'cat',
  name: 'Baggy',
  noises: ['hiss', 'meow', 'snore', 'purr'],
}
var axolotl = {
  species: 'axolotl',
  name: 'Xibalba',
  noises: ['hiss', 'splash', 'snore'],
}
animals.unshift(axolotl);
animals.unshift(cat);
//console log length of animals array
console.log(animals.length);
//console log animals array
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//data structure for friends list - array
//selected array because you can store strings - names of friends in a list 
//declare variable friends - array
var friends = [];
//function getRandom takes animals array - to return a random number for index
//using Math.random
//indexNum - to return index 

function getRandom(animals) {
  //getting length of animals array - using full length instead of length - 1 because 1 not included in MAth.random
  var animalsLen = animals.length;
  var randomIndex;
    //get random index: 0 to length and rounding (0-3)
  //math.floor() -rounds down so need to go to array length instead of last index
  randomIndex = Math.floor(Math.random() * animalsLen);
  //returns animal at random index
  return randomIndex;
}
//add random animal name to friends array - assign indexNum from getRandom func
var indexNum;
indexNum = (getRandom(animals));

friends.push(animals[indexNum]["name"]);
//add friends array as friends proprty to animal in animals array - bracket notation
animals[indexNum]["friends"] = friends;

console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}