import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"

const Heading = ()=>{
    let [handleButtonIinput , setHandleButtonInput] = useState("LOGIN")
    const handleInput = (e)=>{
        handleButtonIinput ==="LOGOUT"? setHandleButtonInput('LOGIN') : setHandleButtonInput('LOGOUT')    
        
    }
    return (
    <div className='headerSection'>
        <div className='logoSection'>
            <img src={LOGO_URL}/>
        </div>
        <div className='itemsSection'>
            <ul className='itemsList'>
               <Link to="/"> <li>Home</li></Link>
               <Link to="/about"> <li>About Us</li> </Link>
               <Link to="/contact"> <li>Contact Us</li></Link>
                <li>Cart</li>
                <button className="btn" onClick={handleInput}>{handleButtonIinput}</button>
            </ul>
        </div>
    </div>

    )
}

export default Heading

/*
never use anchor tag q ki vo pure page ko reload kr dega and ye user experience khr krega q ki images load hote hue dikhengi
instead of this use Link tag by react - router -dom

so basically Link tag doesnt reload the page . it just change the component of the page 
and thats why react application is known as single page application ---- i.e it just a one page and the component is just changeing

2 TYPES OF ROUTING
    -client side routing
        - eg link tag from react-router-dom jisme network call nhi hoti just hmare component ko hi call kiya jata he jo already loaded rhete he
    -server side routing
        -eg anchor tag se routing jisme click krte hi vo network call krta he and data ko fetch krke page me show krwata he 

*/