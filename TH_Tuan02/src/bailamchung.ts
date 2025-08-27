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
const simulateTask = (time: number):Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done!")
        }, time)
    })
}

// const bai05 = simulateTask(1000);
// bai05.then((rs) => console.log(rs)).catch((error) => console.log(error.message))

//06
const excercise6 = async ():Promise<void> => {
    const tasks = [
        simulateTask(1000),
        simulateTask(1500),
        simulateTask(500)
    ]

    try{
        const result = await Promise.all(tasks);
        console.log(result);
    } catch(error){
        console.log("Error: ", error);
    }
}
// excercise6();

//07
const exercise7 = async (): Promise<void> => {
  const tasks = [
    simulateTask(1000),
    simulateTask(1500),
    simulateTask(800)
  ];

  try {
    const result = await Promise.race(tasks);
    console.log("First task completed:", result);
  } catch (error) {
    console.error("First task failed:", error);
  }
};
// exercise7();


//08
const exercise8 = (): void => {
  Promise.resolve(2)
    .then((num) => num * num)
    .then((num) => num * 2)
    .then((num) => num + 5)
    .then((result) => {
      console.log("Chain result:", result);
    });
};
// exercise8();

//09
const excercise9 = (numbers: number[]): Promise<number[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
};
const bai09 = excercise9([1, 2, 3, 4, 5, 6, 7]);
bai09.then((rs) => console.log(rs))

