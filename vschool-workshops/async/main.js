const axios = require('axios');

// const myPromise = new Promise((resolve, reject) => {
//     //Simulating an asynchronous task
//     setTimeout(() => {
//         const randomValue = Math.random();
//         if (randomValue > 0.5) {
//             resolve(randomValue); // Resolve the promise with a value
//         } else {
//              reject(new Error("Random value is too low.")) // Reject the promise with an error
//         }
//     }, 300) // this represents a delay before the operation completes
// });

// myPromise
//     .then((result) => {
//         console.log(`Promise resolved with value: ${result}`)
//     })
//     .catch((err) => {
//         console.error(`Promise rejected with error: ${err.message}`)
//     })

// // console.log(myPromise)

// Promise.resolve('goodbye').then(res => console.log(res))

// console.log('hello')

//Function to fetch data using Axios and return a promise

// function fetchData(id){
//     return axios.get(`https://swapi.dev/api/people/${id}`)
//     .then((res) => res.data.name)
//     .catch((err) => {
//         throw err;
//     });
// }

// // callback-based dataRequest function
// function dataRequest(){
//     const info = [];

//     fetchData(1)
//     .then((data) => {
//         info.push(data);
//         return fetchData(2)
//     })
//     .then((data) => {
//         info.push(data);
//         return fetchData(3)
//     })
//     .then((data) => {
//         info.push(data);
//         return fetchData(4)
//     })
//     .then((data) => {
//         info.push(data);
//         return fetchData(5)
//     })
//     .then((data) => {
//         info.push(data);
//         console.log("All data fetched: ", info)
//     })
//     .catch((err) => {
//         console.error("Ann error occured: ", err)
//     })
// }

// dataRequest()

// Async

async function fetchData(id) {
    try{
        const response = await axios.get(`https://swapi.py4e.com/api/planets/${id}`);
        return response.data.name;
    } catch (error) {
        throw error.message;
    }
}

async function dataRequest(){
    try{
        const data1 = await fetchData(1)
        console.log('test')
        const data2 = await fetchData(2)
        console.log('test')
        const data3 = await fetchData(3)
        console.log('test')
        const data4 = await fetchData(4)
        console.log('test')
        const data5 = await fetchData(5)
        console.log('test')

        return[data1, data2, data3, data4, data5]
    } catch (error) {
        console.error("An error occured: ", error)
    }
}

console.log("async function is working...waiting for data to return ")

dataRequest().then(res => console.log(res))