const cart = ['shirts' , 'kurtas' , 'pants']

api.createOrder(cart , ()=>{
    api.proceedtopayment(()=>{
        api.showOrderSumery(()=>{
            api.updateWallet()
        })
    })
})

// this is the callback hell jisme we see one api is calling another api and is me issue ye he ki developer lost the control

/* 
for eg proceedtopayment ka control ab  createorder ke pass he and ye createorder ki responsiblity he ki ye call krega proceedtopayment ko 
same as showordersummery and updatewallet

you are just bliendy trusting it 
what if createorder never called toh fir kuch bhi nhi chlega
*/