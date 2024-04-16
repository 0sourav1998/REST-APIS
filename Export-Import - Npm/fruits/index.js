// combine all the exports and then export the whole dirextory
const apple = require('./apple');
const mango = require('./mango');
const banana = require('./banana');

const fruit = [apple, mango, banana];
module.exports = fruit;
