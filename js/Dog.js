// jeigu .js faile yr class,
// failo pavadinimas is didziosios raides

export class Dog {
  constructor(name, furColor, age) {
    this.name = name;
    this.furColor = furColor;
    this.age = age;
    this.legsCount = 4;
    this.hasTail = true;
  }

  // informacijos atnaujinimas ojekte
  birthday() {
    // this.age = this.age + 1;
    this.age++;
    return `Suns ${this.age} gimtadienis! 🥳🥳🥳`;
  }

  lostLeg() {
    if (this.legsCount === 0) {
      return 'Suo jau turi 0 (nuli) koju... daugiau nera ko prarasti 😭!';
    }

    this.legsCount--;
    return `Suo prarado koja... 😢`;
  }

  // elementari logika, nekeicia ojekto informacijos



  hi() {
    return 'Suo sako: au au!!';
  }

  walk() {

    return 'Go for a walk 🐕!!!'
  }


  think() {
    return 'Suo galvoja: 🦴🦴🦴';
  }

  // parametrai pasiekiami tik metodo ribose
  addNumbers(a, b) {
    if (a + b < 0) {
      return 'Suo yra liudnas... negali suskaiciuoti neigiamo kaulu kiekio :(';
    }

    if (a + b === 0) {
      return 'Suns reakcija 👀';
    }

    return `Suo suskaiciavo: ${a} + ${b} = ${'🦴'.repeat(a + b)}.`;
  }

  manyBones(howMany) {
    return `Many bones: ${'🦴'.repeat(howMany)}.`;
  }
}