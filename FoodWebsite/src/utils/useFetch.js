import { useEffect, useState } from "react"
import { Swiggy_URL } from "./constant"

const useFetch = ()=>{
    const [resinfo , setresinfo] = useState(null)

    useEffect(()=>{ 
            fetchSwiggyData()
        },[])
    
        async function fetchSwiggyData(){
            const ApiData = await fetch(Swiggy_URL)
            const apiJsonDta = await ApiData.json()
            setresinfo(apiJsonDta.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }


    return resinfo

}
export default useFetch