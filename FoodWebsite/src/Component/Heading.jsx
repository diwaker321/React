import { LOGO_URL } from "../utils/constant"

const Heading = ()=>{
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

            </ul>
        </div>
    </div>

    )
}

export default Heading