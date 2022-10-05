var placesInTheWorld = ['New York', 'London', 'Paris', 'Turkey', 'Dubai'];
var sorted = []

//printing the origincal array
console.log('Original Array');
for (let index = 0; index < placesInTheWorld.length; index++) {
    console.log(placesInTheWorld[index]);
}

// copying the original array into antoher one to sort it
for (let index = 0; index < placesInTheWorld.length; index++) {
    sorted.push(placesInTheWorld[index]);
}

//sorting the array
sorted.sort();

//printing the sorted array
console.log('\n Sorted Array');
for (let index = 0; index < placesInTheWorld.length; index++) {
    console.log(sorted[index]);
}

// get array in reverse alphabetical order
sorted.reverse();

//printing the reverse alphabetical order array
console.log('\n Reverse alphabetical ordered Array');
for (let index = 0; index < placesInTheWorld.length; index++) {
    console.log(sorted[index]);
}

//printing the origincal array
console.log('Original Array');
for (let index = 0; index < placesInTheWorld.length; index++) {
    console.log(placesInTheWorld[index]);
}




