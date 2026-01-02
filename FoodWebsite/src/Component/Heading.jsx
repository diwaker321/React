import { useState } from "react"
import { LOGO_URL } from "../utils/constant"

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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="btn" onClick={handleInput}>{handleButtonIinput}</button>
            </ul>
        </div>
    </div>

    )
}

export default Heading