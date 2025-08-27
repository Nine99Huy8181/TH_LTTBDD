const excercise3 = (): Promise<never> => {
    return new Promise((_, reject) => {
        setTimeout(() =>{
            reject(new Error("Some went wrong"))
        }, 1000)
    })
}

const bai03 = excercise3();
bai03.then((rj) => console.log(rj)).catch((error) => console.log(error.message));