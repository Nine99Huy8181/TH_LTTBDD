//4
const excercise4 = ():void => {
    const randomPromise = new Promise<number>((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if(random > 0.5) resolve(random)
            else reject(new Error("Random number too low"))
        }, 500)
    })

    randomPromise.then((rs) => console.log(rs))
    .catch((error) => console.log(error.message)
    )
}

excercise4();
