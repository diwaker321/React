import React from 'react'
import ReactDOM from 'react-dom/client'

// // react element
// const heading=(
//     <h1 className="header">this is main heading</h1>
// )

// //react functional component
// const Heading2 =()=>{
//     return <h1> this is the functional heading</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Heading2/>) // components ko aese render kra jata he 

// root.render(heading) // react elements ko aese render kra jata he 

                                    // now we will be discussing about react component composition

const Heading= () => {
    return <div>
        <h1 className="header">this is main heading</h1>
        <h2 className="header">this is the second heading</h2>
          </div>
}

const Heading2 = () => {
 return <div>
            <Heading/> {/* that is ki app ek component ko dusre component me use kr skte ho  this is what COMPONENT COMPOSITION */}
         <h1>this is the heading</h1>
        </div>
}

// how can you write the jaascript code inside the jsx 
    //by simply put {} inside your jsx () 


//this is a react component
const JsxExample = ()=>{
    return <div>
        {console.log('this message is print using this {} inside a component')}
          </div>
}

//this is a react element

const jsxElement = (
    <h1>this</h1>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<JsxExample/>)

