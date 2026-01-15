// import { Outlet } from "react-router-dom"
// import BodySection from "./Component/BodySection"
// import Heading from "./Component/Heading"

// const Applayout = ()=>{
//     return <div>
//         <Heading/>
//         <Outlet/> {/* ye outlet replace ho jayega  with the children of  / . and accourding to the route it will render  */}
        
//     </div>
// }

// export default Applayout



import { Outlet } from "react-router-dom"
import BodySection from "./Component/BodySection"
import Heading from "./Component/Heading"
import userinfo from "./utils/UserDetailsContext"
import { useContext, useEffect, useState } from "react"

const Applayout = ()=>{
    const contextdata = useContext(userinfo)
    // console.log('contextdata: ', contextdata);
    const [userData , setData] = useState()
    useEffect(()=>{
        const jsondata = { name : "Diwaker Dwivedi" , course : "Digital Marketing" , courseFee:"50k"}
        setData((prev)=>({
            ...prev,
            ...jsondata
        }))

    },[])

    return <div>
    <userinfo.Provider value={{userData , setData}}> 
        <Heading/>
        <Outlet/>
    </userinfo.Provider>
        
    </div>
}

export default Applayout