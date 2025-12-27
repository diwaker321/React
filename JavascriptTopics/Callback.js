// setTimeout(() => {
//     console.log('hello i am in')
    
// }, 10000);

function x (xyz){
    console.log('x called')
    xyz() // this is y function

}
x(function y(){
    console.log('y called')
})

/* 
output will be 
x called
y called 
and after 5 sec
hello i am in
*/

                                            //event listeners concept 

// document.getElementById('btn').addEventListener('click' , ()=>{
//     console.log('button clicked')
// })

let val = 0 // it has a script scope . it can be access by both the button and any button can change this value

function callbackFunction(){
    let clickcount = 0 // this form a closure
    console.log('i called everytime whenever this function called')
    document.getElementById('btn').addEventListener('click', function xyz(){
        console.log('clicked' , clickcount++ , val++)
    })
}
document.getElementById('btn2').addEventListener('click' , ()=>{
    console.log('clicked from second button' , val++)
})
callbackFunction()



