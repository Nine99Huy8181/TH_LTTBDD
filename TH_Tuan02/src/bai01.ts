const excercise = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello")
        }, 2000)
    })
}