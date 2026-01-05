import { Outlet } from "react-router-dom"
import BodySection from "./Component/BodySection"
import Heading from "./Component/Heading"

const Applayout = ()=>{
    return <div>
        <Heading/>
        <Outlet/> {/* ye outlet replace ho jayega  with the children of  / . and accourding to the route it will render  */}
        {/* <BodySection/> */}
    </div>
}

export default Applayout