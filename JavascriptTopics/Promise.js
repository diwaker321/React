// promise are user to handle the async operation in js 

/*
as we seen earlier in callback hell file 
promise ke concept se phele async operation ko call back se handle kra jata tha jis vjh se developer lost the control

but after the concept of promise backend me ab api aese design hone lgi ki ab callback dene ki jrurt nhi he and these api will return us a promise

Q> WHAT IS PROMISE 
we get the promise like this 

const cart = ['shirts' , 'kurtas' , 'pants']
const promise = createorder(cart)
so basically createorder gives us a object of data and undefined  and ye obj diya he is createorder api ne 

{data : 'undefined'}

Q> WHY UNDEFINED
q ki at this movement abhi tk ye data me value nhi ayi he q ki promise async behave krta he and after some time jease hi order create ho jayega
tb data me value aajayegi 
{data "orderdetails"}

Q> ISKE BAD? AB KESE IS OBJECT KO ACCESS KRE?
 after that we attach a callback with this promise

 i.e promise.then(()=>{ // jese hi vo undefined se orderdetails me convert hoga toh ye then ka callback function chl pdega
        api.proccedtopayment()
    })


    Q> WHATS THE DIFFERENCE BETWEEN CALLBACK AND PROMISE THEN 
        1.) callback me we give the call back function to it and we lost the control
        and promise me we attach a call back to promise 

        2.)callback me we dont know ki function kbhi call hoga bhi ya nhi
        but in case of promise jese hi promise me data ayega ye javascript garuntee deta he toh call the callback function
        and it will call it once 
        but callback hell me it can be called more than once

        lets take an example of how promise works with debugging. we use fetch q ki fetch promise return krta he 


*/

const GIT_URL = "https://api.github.com/users/diwaker321"
const users = fetch(GIT_URL)
console.log(users)

users.then((res)=>{
    console.log(res)
})












// callback hell ke problem ko kese solve kr skte ho using promise

const cart = ['shirts' , 'kurtas' , 'pants']

api.createOrder(cart , (orderid)=>{
    api.proceedtopayment(orderid , (paymentinfo)=>{
        api.showOrderSumery(paymentinfo , ()=>{
            api.updateWallet()
        })
    })
}) // this is the wrong approach

// but in promise we can do like this 

const promise = createorder(cart) // it gives us a orderid

promise.then((orderid)=>{
   return proceedtopayment(orderid) // it gives us a paymentinfo
}).then((paymentinfo)=>{
    return showOrderSumery(paymentinfo)
}).then(()=>{
    return updateWallet()
})

