import React from "react";
import ReactDOM from "react-dom/client"

console.log('hello')

const heading = React.createElement('h1' , {} , "hello world"); // this is not the recommended approach 
                                                                //instead of this you can use jsx
                                                                
const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
const jsxheading = <h1>hello jsx world</h1> // this is single line jsx
// root.render(jsxheading)

const multilineheading = ( // this is basically a multiline jsx in which you can write multi line html here
    <div>
        <h1>
            hello first heading
        </h1>
        <h1>
            hello second heading
        </h1>
    </div>
)

root.render(multilineheading)
