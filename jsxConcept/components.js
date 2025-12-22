import React from 'react'
import ReactDOM from 'react-dom/client'

// react element
const heading=(
    <h1 className="header">this is main heading</h1>
)

//react functional component
// const Heading2 =()=>{
//     return <h1> this is the functional heading</h1>
// }

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
        </div>
}



const jsxElement = (
    <div>
        <h1>this is jsxelement</h1>
    </div>
)

const Subheading = ()=>{
    return <div>
        <p>this is subheading</p>
    </div>
}

//we can also write our functional component like this .

const Subheading2 = function (){// it is recommended that use arrow function instead of this 
    return (
        <div>
            <h1>this is first heading</h1>
        </div>
    )
}

//also you can put react element into a React component

const Subheading3=()=>{
    {jsxElement} // this is how you can use the react element inside a component
}

// you can use any variable inside the jsx by using curly bracket
const value = 101;
const Subheading4=()=>{
    {value} // this is how you can use the react element inside a component
}



const JsxExample = ()=>{
    return <div>
        {console.log('this message is print using this {} inside a component')}
        {jsxElement}
        {<Subheading/>}
        {Subheading()}  {/* you can call the components like this too */}
        {value}
          </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<JsxExample/>)
// root.render(<Heading2/>) // components ko aese render kra jata he and this is how babel get to know that this is a functional compoment
// root.render(heading) // react elements ko aese render kra jata he 

