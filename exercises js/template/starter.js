// //Constructor/ prototype way
// function Person(name) {
//   this.name = name; //-> constructor
// }
// Person.prototype.getName = function () {
//   console.log(this.name);
// };
// const danglinh = new Person("danglinh");
// // danglinh.getName();
// //Class
// class Person2 {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     return (this._name = newName);
//   }
// }
// const linh = new Person2("Linh");
// linh.name = "hihi";
// // console.log(linh.name);
// //class expresstion
// let Student = class {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     return (this._name = newName);
//   }
// };
// const vu = new Student("VuPham");
// console.log(vu.name);
// function company(aclass) {
//   return new aclass();
// }
// let hello = company(
//   class {
//     sayHello() {
//       console.log("hello");
//     }
//   }
// );
// hello.sayHello();
// //static method
// class Artical {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }
//   static compare(a, b) {
//     return a.date - b.date;
//   }
// }
// let articals = [
//   new Artical("HTML", new Date(2022, 1, 1)),
//   new Artical("CSS", new Date(2022, 12, 1)),
//   new Artical("JS", new Date(2022, 9, 1)),
// ];
// // articals.sort((a, b) => a.date - b.date);
// articals.sort(Artical.compare);
// // console.log(articals[0].title);
// //static properties
// class Item {
//   constructor(name) {
//     this.name = name;
//     this.constructor.count++;
//   }
//   static count = 0;
//   static getCount() {
//     return Item.count;
//   }
// }
// const pencil = new Item("pencil");
// const pencil1 = new Item("pencil");
// console.log(Item.getCount());
// //super and extends
// class Animal {
//   constructor(legs) {
//     this.legs = legs;
//   }
//   walking() {
//     console.log(`walking on ${this.legs} legs`);
//   }
// }
// class Bird extends Animal {
//   constructor(legs) {
//     super(legs);
//   }
//   fly() {
//     console.log("Can flying");
//   }
// }
// let bird = new Bird(2);
// console.log(bird.walking());

//API: Application Programming Interface
const endpoint = "https://api.github.com/users";
const userEl = document.querySelector(".username");
//fetch
async function displayUser(username) {
  userEl.textContent = "...Loading";
  const promise = await fetch(`${endpoint}/${username}`);
  console.log(promise);
  // const data = await promise.json();
  // userEl.textContent = `${data.login}`;
  // console.log(data.login);
  // promise
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data.login);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}
function handleErr(err) {
  console.log("Something wrong with your API");
  userEl.textContent = "No data found";
}
displayUser("evondev").catch(handleErr);
