"use strict";
//4
// const excercise4 = ():void => {
//     const randomPromise = new Promise<number>((resolve, reject) => {
//         const random = Math.random();
//         setTimeout(() => {
//             if(random > 0.5) resolve(random)
//             else reject(new Error("Random number too low"))
//         }, 500)
//     })
//     randomPromise.then((rs) => console.log(rs))
//     .catch((error) => console.log(error.message)
//     )
// }
// excercise4();
//05
const simulateTask = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done!");
        }, time);
    });
};
const bai05 = simulateTask(1000);
bai05.then((rs) => console.log(rs)).catch((error) => console.log(error.message));
