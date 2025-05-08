/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*I- function - 2 params array and string
O: return object from array if string exists, otherwise null
C
e 
*/
function search(array, string) {
    //iterate through the array
    var index = 0;
    while (index < array.length) {
        //determine if string matches a name in array
        if (array[index]["name"].toLowerCase() === string.toLowerCase()) {
            //matches - returns the object from array 
            return array[index];
        } else {
            //if string does not match increase index to check next name
            index++;
        }
    }
    //returns null if no match
    return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    //iterate through array to find match to name
    for (var index = 0; index < animals.length; index++) {
        if (animals[index]["name"].toLowerCase() === name.toLowerCase()) {
            //if name matches - replace that index with new replacement object 
            animals[index] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    //iterate through array of animales
    for (var index = 0; index < animals.length; index++) {
        if (animals[index]["name"].toLowerCase() === name.toLowerCase()) {
            //if name matches - remove that name -> at the index  
            animals.splice(index, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    //determine if object has name property and it's greater than 0
    //determine if object has species > 0
    if ((animal["name"].length > 0) && (animal["species"].length > 0)) {
        //iterate through array to determine names dont match
        var index = 0;
    // while (index < animals.length) {
    //     //determine if string matches a name in array
    //     if (animals[index]["name"].toLowerCase() !== animal["name"].toLowerCase()) {
    //          index++;
    //     } else if (index === animals.length){
    //         //if string does not match increase index to check next name
            animals.push(animal);
    //     }
    // }
    }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}