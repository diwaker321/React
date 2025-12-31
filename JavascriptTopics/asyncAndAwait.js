/*

how this async function is different with the normal function
ans) this async function will always return a promise 
    but normal function will return the simple values



*/


//it will return the promise
async function getpayment(){
    return 'payment successfull' //this is not a promise but ye async function ise promise me wrap krke hi return krega 
}
// console.log(getpayment())


// you can write as in this way too
async function getOrder(){
    const promise = new Promise((res, rej)=>{
        res('order successfull')
    })
    return promise
}

// console.log(getOrder())

// getOrder().then((res)=>{
//     console.log(res)
// })

//how we handle the promise before async and await 

const pr = new Promise((res , rej)=>{
     res('Promised has been resolved')
})

function getPromise(){
    pr.then((res)=>{
        console.log(res);
        
    })
}
// getPromise()

// how we can use promise after async and await ( this combo is used to handle the promise)

async function get_Promise_async_way(){
    const res = await pr // this await keyword is used to resolve the promise ( jese hum then() lgake krte he ) and this await keyword is used inside the async function only
    console.log(res)
    // console.log(await pr)
}

// get_Promise_async_way()




// // why async await is special and how this is different with the normal promise method

// //lets take an promise with a settimeout
// const promise = new Promise((res , rej)=>{
//     setTimeout(()=>{
//         res("hello corders good evening . i am resolved now")
//     },5000)
// })

// //older way 
// function older_way_of_promise(){
//     promise.then((res)=>{
//         console.log(res);
//     }) // this will print after 5 sec
//     console.log("i will be printed first"); // this will print first 
// }

// // older_way_of_promise()



// //new way of promise using async and await
// async function newer_way_of_promise(){
//     console.log('i will be printed quickly. js engine is not waiting for me ');
    
//     const res =await promise // our js engine is waiting for promise to be resolved

//     console.log('i will be printed once thise promise is resolved') // this will print only after the promise gets resolved 
//     console.log(res) // this will print first then only line no. 85 will print
// }

// newer_way_of_promise()








// // lets make it complecated using 2 promise of different settimeout timings

// const promise1 = new Promise((res , rej)=>{
//     setTimeout(()=>{
//         res('promise1 has been resolved in 5 second')
//     } ,5000)
// })

// const promise2 = new Promise((res , rej)=>{
//     setTimeout(()=>{
//         res('promise2 has been resolved in 10 second')
//     } ,10000)
// })

// async function guess_the_output() {
//     console.log('the timer has been started');

//     const pr1 = await promise1
//     console.log(pr1)
    
//     const pr2 = await promise2
//     console.log(pr2)
// }

// guess_the_output()






// // change the timings of the set time out and see the results

// const promise3 = new Promise((res , rej)=>{
//     setTimeout(()=>{
//         res('promise1 has been resolved in 10 second')
//     } ,10000)
// })

// const promise4 = new Promise((res , rej)=>{
//     setTimeout(()=>{
//         res('promise2 has been resolved in 5 second')
//     } ,5000)
// })

// async function guess_the_output_part2() {
//     console.log('the timer has been started');

//     const pr1 = await promise3
//     console.log(pr1)
    
//     const pr2 = await promise4
//     console.log(pr2)
// }

// guess_the_output_part2() // only after 10 second both the output will be shown in the console 
// //aesa nhi hoga ki 5 sec bad phele pr2 print ho jayega 
// // pr2 have to wait for pr1 to be printed 







// now we see how fetch works
 /*
    fetch return promise =====> 
    then jo bhi response ata he usme we put .json() (this will also give us a promise) ===> 
    then promise resolve krke we get the data
 */

 const GITHUB_URL = "https://api.github.com/users/diwaker321"
 // this is the async way
 async function handle_Fetch_Promise(){
    const fetch_promise = await fetch(GITHUB_URL) // this will return the promise 
   const git_data = await fetch_promise.json() // this will also give us a promise
   console.log(git_data);
 }
 handle_Fetch_Promise()

 /* this is the old promise way */

 function handle_fetch_Old_Way(){
     const fetch_promise = fetch(GITHUB_URL)
     fetch_promise.then((res)=>res.json().then((res)=>console.log(res)))
 }

 handle_fetch_Old_Way()
