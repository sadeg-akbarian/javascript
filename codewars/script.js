/*
class Attendee {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  getName() {
    return this.name;
  }
}

class BootCampAttendee extends Attendee {
  constructor(name, age, city, onlineStatus) {
    super(name, age, city);
    this.onlineStatus = onlineStatus;
  }

  getOnlineStatus() {
    return this.onlineStatus;
  }
}

console.log(Attendee);
const klaus = new Attendee("Klaus");
console.log(klaus.getName());

//console.log(BootCampAttendee);
const eva = new BootCampAttendee("Eva", 30, "", "online");
console.log(eva.getOnlineStatus());

//........................................................................................................

class Animal {
  constructor(color, race, diet, sound, legs = 4) {
    this.legs = legs;
    this.color = color;
    this.diet = diet;
    this.race = race;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

const dog = new Animal("burger", "White");
dog.makeSound();
dog.sound = "wuff";
dog.makeSound();
console.log(dog.legs);
*/
/*
const whosOnline = (friends) => {
  const outputObject = {};
  if (friends.length === 1) {
    return outputObject;
  }
  const onlineArray = [];
  const offlineArray = [];
  const awayArray = [];
  /*
  for (let i = 0; i < friends.length; i++) {
    if(friends[i].status === "online" && friends[i].lastActivity <= 10) {
      onlineArray.push(friends[i].username);
    }
    else if (friends[i].status === "online" && friends[i].lastActivity > 10) {
      awayArray.push(friends[i].username);
    }
    else if (friends[i].status === "offline") {
      offlineArray.push(friends[i].username);
    }
  }
  */
/*
  friends.forEach((friend) => {
    if (friend.status === "online" && friend.lastActivity <= 10) {
      onlineArray.push(friend.username);
    } else if (friend.status === "online" && friend.lastActivity > 10) {
      awayArray.push(friend.username);
    } else if (friend.status === "offline") {
      offlineArray.push(friend.username);
    }
  });
  if (onlineArray.length > 0) {
    outputObject.online = onlineArray;
  }
  if (offlineArray.length > 0) {
    outputObject.offline = offlineArray;
  }
  if (awayArray.length > 0) {
    outputObject.away = awayArray;
  }
  return outputObject;
};

console.log(
  whosOnline([
    {
      username: "David",
      status: "online",
      lastActivity: 10,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
  ])
);
*/

//......................................................................................................

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

const animal1 = new Animal("Robert", 44, 8, "human", "single");
console.log(animal1.introduce());

const shark1 = new Shark("Billy", 3, "Alive and well");
console.log(shark1.introduce());

const dog1 = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(dog1.introduce());
console.log(dog1.greetMaster());

//.................................................................................................

class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

console.log(Person.greetExtraTerrestrials("Marsianer"));
