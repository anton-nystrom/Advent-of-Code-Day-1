import { input } from "./puzzleInput.js";
let coordinates = input;
coordinates = coordinates.split("\n").map(Number);

console.log("Part One: " + partOne());
console.log("Part Two: " + partTwo());

function partOne() {
    let count = 0;

    for (let i = 0; i < coordinates.length - 1; i++) {
        const coordinate = coordinates[i];
        if(coordinate < coordinates[i + 1]) {
            count += 1;
        }
    }

    return count;
}

function partTwo() {
    let count = 0;

    function createWindow(i) {
        const window = coordinates[i] + coordinates[i + 1] + coordinates[i + 2];
        return window;
    }

    for (let i = 0; i < coordinates.length; i++) {
        const window = createWindow(i);
        const nextWindow = createWindow(i + 1);
        if(window < nextWindow) {
            count += 1;
        }
    }

    return count;
}