// let buyIphone = true;
// let willBuyIphone = new Promise(function (resolve, reject) {
//   if (buyIphone) {
//     resolve("Qua da");
//     console.log("ok");
//   } else {
//     reject("Qua bun");
//     console.log("Fail");
//   }
// });

// .then(fullFilled, rejected)
// function makePromise(buyIphone) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (buyIphone) {
//         resolve("Qua da");
//       } else {
//         reject("Qua bun");
//       }
//     }, 5000);
//   });
// }
// let haveIphone = makePromise(false);
// haveIphone
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("hi");
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Run the first time");
//   }, 2000);
//   //data la cai truoc do
// }).then((data) => {
//   console.log(data);
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Run the second time");
//     }, 2000);
//   }).then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("Run the third time");
//       }, 2000);
//     }).then((data) => {
//       console.log(data);
//     });
//   });
// });

// function makeTimer(timer = 1000, str) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve(str);
//     }, timer);
//   });
// }
// const timer1 = makeTimer(1000, "first time");
// const timer2 = makeTimer(2000, "second time");
// const timer3 = makeTimer(3000, "third time");
// //Promise.all -> sau khi chay xong thi se lam gi do
// //Mang dau vao cua promise tat ca phai resolve neu co 1 reject thi se tra ve reject
// const timerTotasl = Promise.all([timer1, timer2, timer3]).then((data) =>
//   console.log(data)
// );
// console.log(timerTotasl);
// //Promise.race -> timer nao nho nhat thi return truoc
// const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) =>
//   console.log(data)
// );
// //Promise.allSettled -> return ca resolve va reject

// function wait(timer = 0) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, timer);
//   });
// }
// async function run() {
//   console.log("Starting");
//   await wait(2000);
//   console.log("Ending");
// }
// run();
function wait(timer = 0) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, timer);
  });
}
function makeTimer(timer = 0, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
async function allTimer() {
  const timer1 = makeTimer(1000, "first time");
  const timer2 = makeTimer(2000, "second time");
  const timers = await Promise.all([timer1, timer2]);
  console.log(timers);
  // const [a, b] = await Promise.all([timer1, timer2]);
  // console.log(a, b);
  // console.log(timer1);
  // console.log(timer2);
  // const timer3 = await makeTimer(3000, "third time");
  // console.log(timer3);
}
allTimer();
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not Frontend developer");
    }
    setTimeout(() => {
      resolve("You are frontend developer");
    }, 1000);
  });
}

// async function go() {
//   try {
//     const dev1 = await isFrontendDev(["css"]);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function go() {
  const dev1 = await isFrontendDev(["css"]);
  console.log(error);
  return dev1;
}
go()
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
