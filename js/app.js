// Chrome - V8 -> no file system
// Firefox - SpiderMonkey
// Microsoft -
// Opera -

// Node.js -> file system

// let e const
// let - variabili
// const - costanti

// console.log(pippo);
// var pippo = "pippo";

// console.log(value);
// const value = "mickey";

// var app = document.getElementById("app");
// console.log(app);

// console.log("name", userName);
// const userName = "Raymond";

// var button = document.querySelector("button");

button.addEventListener("click", function () {
  errorMessage("pippo");
});

// const list = [1, 2, 3];
// // list = [5, 6, 7];
// // list.push(4);
// list.pop();
// console.log(list);

// Spread
// let people = ["Clarissa", "Ray"];
// const people2 = ["Francesca", "Cinzia"];
// // const allPeople = people.concat(people2);

// const allPeople = [...people, ...people2];
// console.log(allPeople);
// // console.log(people);

// const person = {
//   name: "Clarissa",
//   lastName: "Mascalchi",
//   address: "Sesto",
// };

// const person2 = {
//   name: "Raymond",
//   lastName: "Codinera",
//   age: "32",
// };

// const mix = { ...person, ...person2 };
// console.log(mix);

// Destructuring
// const person = {
//   userName: "Raymond",
//   lastName: "Codinera",
//   age: "32",
// };

// const listPeople = ["Raymond", "Francesca", "Clarissa"];

// const userName = person.userName;
// let userAge = person.age;

// const { userName, age } = person;
// const [firstPerson, secondPerson] = listPeople;

// const userAge = age * 2;
// const message = "Ciao! " + userName + " " + age;

// console.log(secondPerson);

//functions
add();
function add() {
  const result = 0;
  //   console.log("result func ", result);
  return result;
}
// console.log(result);

// return == =>
const addNumber = (result) => {}; //corpo della funzione
// const addNumber = (result) => ({}); // oggetto vuoto
// const addNumber = (result) => {}; // se singolo argomento posso omettere le ()
// const addNumber = (result) => result + 1; // posso tornare subito la variabile

// const value = addNumber(10);
// const pippo = "disney";
// const animal = { pippo };
// console.log("animal ", animal);
// console.log("result ", value);
// // const value = addNumber(0);
// console.log("result arrow ", value);

// //Class
class Person {
  userName = "";
  age = 0;
  constructor(userName, age) {
    this.userName = userName;
    this.age = age;
  }

  showname() {
    // return this.userName;
    console.log("Welcome! ", this.userName);
  }

  static showMessage = function () {
    console.log("Hi there!!!!");
  };
}

const user = new Person("Ray", 32);
// console.log("user ", user);
user.showname();
Person.showMessage();

const value = Math.floor(32.4);
console.log("value ", value);

// class Employer extends Person {
//   salary = 0;
//   constructor(username, age) {
//     super(username, age);
//   }

//   get salary() {
//     return this.salary;
//   }

//   set salary(newSalary) {
//     this.salary = newSalary;
//   }
// }

// const pippo = new Person("pippo");

// pippo.salary = 10;
// console.log("pippo", pippo);

// const disney = {
//   list: [321, 321312],
// };
// disney.name = "disney";
// console.log(disney);

// const mazzotti = new Employer("mazzotti", 60);
// mazzotti.salary = 10000;
// console.log("mazzotti ", mazzotti.salary);

// pippo.showMessage();
// Person.showname();

// const newValue = Math.floor(3.2);
// console.log(newValue);
