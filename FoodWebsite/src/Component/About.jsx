import { useEffect } from "react"
import UserClass from "./UserClass"
import {RESTAURANT_MENU} from "../utils/constant"
const About = ()=>{
    useEffect(()=>{
        getmenu()
    },[])

    async function getmenu(){
        const data = await fetch(RESTAURANT_MENU)
        const jsondata = await data.json()
        
    }
    return <>
    <div className="classcomp">
    <UserClass location ={"dehradun"}  Qualification = {"Masters in computer Application"} Experience = {"Full Stack Developer"}/>
    </div>

    </>
}

export default About