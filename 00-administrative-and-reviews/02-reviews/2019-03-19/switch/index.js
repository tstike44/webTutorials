var HELLO = 3;
var WORLD = 7;
var BEAR = 9;
var CAT = 12;
var GIRAFFE = 24;
var CHANNEL = 27;
var JAVASCRIPT = 29;
var JAM = 31;
$(document).ready(function () {
    var item = parseInt(prompt("enter a number"));
    // if (item === 3) {
    //     console.log('hello');
    // } else if (item === 7) {
    //     console.log('world');
    // } else if (item === 12) {
    //     console.log('world');
    // } else if (item === 21) {
    //     console.log('world');
    // } else if (item === 27) {
    //     console.log('world');
    // } else if (item === 32) {
    //     console.log('world');
    // } else if (item === 39) {
    //     console.log('world');
    // } else if (item === 42) {
    //     console.log('world');
    // }
    switch (item) {
        case HELLO:
            console.log('hello');
            break;
        case WORLD:
            console.log('world');
            break;
        case BEAR:
            console.log('bear');
            break;
        case CAT:
            console.log('cat');
            break;
        case GIRAFFE:
            console.log('giraffe');
            break;
        case CHANNEL:
            console.log('channel');
            break;
        case JAVASCRIPT:
            console.log('javascript');
            break;
        case JAM:
            console.log('jam');
            break;
        default:
            console.log('test');
            break;
    }
})