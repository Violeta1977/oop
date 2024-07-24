import { Dog } from "./js/Dog.js";

const rexas = new Dog('Rexas', 'black', 3);
console.log(rexas);
console.log(rexas.name);
console.log(rexas.furColor);
console.log(rexas.age);

console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(3, 2));
console.log(rexas.addNumbers(3, -2));
console.log(rexas.addNumbers(-3, -2));
console.log(rexas.addNumbers(-3, 3));
console.log(rexas.manyBones(20));


const brisius = new Dog('Brisius', 'white', 2);
console.log(brisius);

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius);

console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius);

const bobikas = new Dog('bobikas', 'red', 7);
console.log(bobikas);
console.log(bobikas.legsCount);
console.log(bobikas.name);

console.log(bobikas.hi());
console.log(bobikas.walk(7));
console.log(bobikas.lostLeg());
console.log(bobikas.lostLeg());
console.log(bobikas.lostLeg());
console.log(bobikas.lostLeg());
console.log(bobikas.lostLeg());

console.log(bobikas.addNumbers(0, 0));
console.log(bobikas.manyBones(5));
console.log(bobikas.manyBones(2));
console.log(bobikas.hasTail);

// overraidini objekto reiksmes
bobikas.legsCount = 3;
console.log(bobikas.legsCount);
console.log(bobikas.lostLeg());
console.log(bobikas);