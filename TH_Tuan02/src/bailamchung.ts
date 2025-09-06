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
// const simulateTask = (time: number):Promise<string> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Done!")
//         }, time)
//     })
// }

// const bai05 = simulateTask(1000);
// bai05.then((rs) => console.log(rs)).catch((error) => console.log(error.message))

//06
// const excercise6 = async ():Promise<void> => {
//     const tasks = [
//         simulateTask(1000),
//         simulateTask(1500),
//         simulateTask(500)
//     ]

//     try{
//         const result = await Promise.all(tasks);
//         console.log(result);
//     } catch(error){
//         console.log("Error: ", error);
//     }
// }
// excercise6();

//07
// const exercise7 = async (): Promise<void> => {
//   const tasks = [
//     simulateTask(1000),
//     simulateTask(1500),
//     simulateTask(800)
//   ];

//   try {
//     const result = await Promise.race(tasks);
//     console.log("First task completed:", result);
//   } catch (error) {
//     console.error("First task failed:", error);
//   }
// };
// exercise7();


//08
// const exercise8 = (): void => {
//   Promise.resolve(2)
//     .then((num) => num * num)
//     .then((num) => num * 2)
//     .then((num) => num + 5)
//     .then((result) => {
//       console.log("Chain result:", result);
//     });
// };
// exercise8();

//09
// const excercise9 = (numbers: number[]): Promise<number[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const evenNumbers = numbers.filter(num => num % 2 === 0);
//       resolve(evenNumbers);
//     }, 1000);
//   });
// };
// const bai09 = excercise9([1, 2, 3, 4, 5, 6, 7]);
// bai09.then((rs) => console.log(rs))


//10
// const randomPromise1 = new Promise<string>((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//         if (random > 0.5) {
//           resolve("Success!");
//         } else {
//           reject(new Error("Failed!"));
//         }
//     }, 1000);
// });
// randomPromise1
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error.message))
//     .finally(() => console.log("Done"));


//11
// async function getHelloAsync(): Promise<string> {
//   return await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello Async");
//     }, 2000)
//   })
// }
// const main  = async () => {
//   const rs = await getHelloAsync();
//   console.log(rs);
  
// }
// main()

//12
// function simulateTask(time: number): Promise<string>{
//   return new Promise((resolve) => {
//    setTimeout(() => resolve("Task done!"), time) 
//   })
// }
// async function runTask() {
//   console.log(await simulateTask(2000));
// }
// runTask()

//13
// function rejectError(): Promise<never>{
//   return new Promise((_, reject) => {
//     setTimeout(() => reject(new Error("Something went wrong")), 2000)
//   })
// }
// const handleError = async () => {
//   try {
//     await rejectError()
//   } catch (error) {
//     console.log((error as Error).message);
    
//   }
// }
// handleError()


//14
// async function tripleNumber(num: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(num*3), 1000)
//   })
// }
// async function main() {
//   console.log(await tripleNumber(5));
// }
// main()

//151617
// async function task1(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {resolve("Done 1")}, 1000)
//   })
// }
// async function task2(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {resolve("Done 2")}, 1000)
//   })
// }
// async function task3(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {resolve("Done 3")}, 1000)
//   })
// }

//15
// async function runSequence(): Promise<void> {
//   const result1 = await task1();
//   console.log(result1);
//   const result2 = await task2();
//   console.log(result2);
//   const result3 = await task3();
//   console.log(result3);
// }
// runSequence()

//16
// async function runParallel(): Promise<void> {
//   console.log(await Promise.all([task1(), task3(), task2()]));
// }
// runParallel()

//17
// async function iteratePromises(): Promise<void> {
//   const tasks = [task1(), task3(), task2()];
//   for await (const rs of tasks){
//     console.log(rs);
//   }
// }
// iteratePromises()


//18
// interface User{
//   id: number;
//   name: string;
// }
// async function fetchUser(id: number): Promise<User> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       return resolve({id, name: `User name ${id}`})
//     }, 1000)
//   })
// }
// async function main() {
//   const user = await fetchUser(1);
//   console.log(user);
// }

// main();

//19
// interface User{
//   id: number;
//   name: string;
// }
// async function fetchUser(id: number): Promise<User> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       return resolve({id, name: `User name ${id}`})
//     }, 1000)
//   })
// }
// async function fetchUsers(ids: number[]): Promise<User[]> {
//   return await Promise.all(ids.map((id) => fetchUser(id)))
// }

// async function main() {
//   console.log(await fetchUsers([2, 4, 5]));
// }
// main()


//20
// interface User {
//   id: number;
//   name: string;
// }

// async function fetchUser(id: number): Promise<User> {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id, name: `User ${id}` }), 3000); // Giả lập API chậm
//   });
// }
// async function fetchUserWithTimeOut(id: number, timeout: number): Promise<User> {
//   const timeoutPromise = new Promise<never>((_, reject) => {
//     setTimeout(() => reject(new Error("Time out")), timeout)
//   })

//   return Promise.race([fetchUser(id), timeoutPromise])
// }
// async function main() {
//   try {
//     console.log(await fetchUserWithTimeOut(1, 2000));
    
//   } catch (error) {
//     console.error((error as Error).message);
//   }
// }
// main()


//21
// interface Todo{
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// async function fetchTodo(): Promise<Todo> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   if(!response.ok) throw new Error("False");
//   return await response.json()
// }

// async function main() {
//   try {
//     console.log(await fetchTodo());
//   } catch (error) {
//     console.error((error as Error).message);
    
//   }
// }
// main()


//22
// interface Todo{
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// async function fetchTodo(id: number): Promise<Todo> {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//   if(!response.ok) throw new Error("False");
//   return await response.json()
// }

// async function fetchMultipleTodos(): Promise<void> {
//   const ids = [1, 2, 3];
//   const todos = await Promise.all(ids.map((id) => fetchTodo(id)))
//   console.log(todos);
  
// }
// fetchMultipleTodos()

//23
// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// async function fetchAndFilter(): Promise<Todo[]> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   if(!response.ok) throw new Error("Failed!");
//   const todos: Todo[] = await response.json();
//   return todos.filter(td => td.completed);
// }
// async function main() {
//   try {
//     const completedTodos = await fetchAndFilter();
//     console.log(completedTodos);
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//   }
// }

// main();


//24
// interface Post{
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }
// async function postData(): Promise<Post> {
//   const newPost = {
//     title: "New Post",
//     body: "Nguyen Quoc Huy",
//     userId: 1
//   };
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newPost)
//   });

//   if(!response.ok) throw new Error("Failed!");
//   return await response.json();
// }
// async function main() {
//   try {
//     const result = await postData();
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//   }
// }
// main();


// //27
// async function fetchWithRetry(url: string, retries: number) {
//   for(let attempt = 1; attempt <= retries; attempt++){
//     try {
//       const response = await fetch(url);
//       if(!response.ok) throw new Error(`HTTP error: ${response.status}`);
//       return await response.json();
//     } catch (error) {
//       if(attempt === retries) throw new Error(`Failed retr: ${retries}, ${(error as Error).message}`);
//       console.log();
//       console.log(`Attempt ${attempt} failed, retrying...`);
//     }
//   }
//   throw new Error("Unexpected error");
// }
// async function main() {
//   try {
//     const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/invalid", 3);
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", (error as Error).message);
//   }
// }
// main();

//30
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodo(id: number): Promise<Todo> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch todo ${id}`);
  return await response.json();
}

async function fetchMultipleWithStatus(): Promise<void> {
  const promises = [
    fetchTodo(1),
    fetchTodo(999), // URL không hợp lệ để mô phỏng lỗi
    fetchTodo(3)
  ];
  const results = await Promise.allSettled(promises);
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Todo ${index + 1}: Success`, result.value);
    } else {
      console.log(`Todo ${index + 1}: Failed`, result.reason.message);
    }
  });
}

// Chạy thử
fetchMultipleWithStatus();