/*
Author: Paul
Title: Arrays
Date: 02/13/2024
*/

let cars = ['Wrangler', 'Forester', "Defender", 'Land Cruiser'];//array literal
let makes = new Array("Jeep", "Subaru", "Land Rover", "Toyota");// Array object instance

let add = 'y';
let myNumbers = [];

while (add == 'y') {
    let number = prompt('Add a number to the array');

    if (number != '' && !isNaN(number)) {
        myNumbers.push(parseFloat(number));
    }

    add = prompt('Continue adding numbers?', 'y');
}