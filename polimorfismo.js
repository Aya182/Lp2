class Naruto {
    usarJutsu() {
      console.log('Rasengan!');
    }
  }
  
  class Sasuke extends Naruto {
    usarJutsu() {
      console.log('Chidori!');
    }
  }
  
  const characters = [new Naruto(), new Sasuke()];
  characters.forEach(character => character.usarJutsu());
