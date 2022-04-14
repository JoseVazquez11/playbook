class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("[" + this.name + "]: ¡Hola!");
  }

  sayMessage(message) {
    console.log("[" + this.name + "]: " + message);
  }
}


module.exports = Pokemon; // Clase Pokemon

