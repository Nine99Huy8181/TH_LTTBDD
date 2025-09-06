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
// Polyfill cho Promise.allSettled
if (!Promise.allSettled) {
    Promise.allSettled = function (promises) {
        return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({ status: "fulfilled", value }), reason => ({ status: "rejected", reason }))));
    };
}
async function fetchTodo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok)
        throw new Error(`Failed to fetch todo ${id}`);
    return await response.json();
}
async function fetchMultipleWithStatus() {
    const promises = [
        fetchTodo(1),
        fetchTodo(999), // URL không hợp lệ để mô phỏng lỗi
        fetchTodo(3)
    ];
    const results = await Promise.allSettled(promises);
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Todo ${index + 1}: Success`, result.value);
        }
        else {
            console.log(`Todo ${index + 1}: Failed`, result.reason.message);
        }
    });
}
// Chạy thử
fetchMultipleWithStatus();
