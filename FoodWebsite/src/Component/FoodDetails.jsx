import { useEffect, useState } from "react";
import {DUMMY_MENU_DATA} from "../utils/constant";
import {useParams} from "react-router-dom"


const FoodDetails = ()=>{ 
    const [resdata , setResData] = useState({}) 
    const[menuData , setMenuData] = useState([])

    useEffect(()=>{ 
    fetchDummyData()
    },[])
    
    const {resid} = useParams()
    
    async function fetchDummyData(){
    const data = await fetch(DUMMY_MENU_DATA + resid)
    const apidata =  await data.json()
    setMenuData(apidata?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    setResData(apidata?.data?.cards?.[2]?.card?.card?.info)
    }

    const {name ,cuisines,costForTwo,cloudinaryImageId,avgRating,areaName,locality,sla,totalRatingsString} = resdata
    const {itemCards = [] , title = ""} = menuData?.[1]?.card?.card || {}


    return (
        <>
            <h1 className="text-2xl m-2">{name}</h1>
            <p>{cuisines?.join(",")}</p>
            <p>{costForTwo}</p>
            <p className="font-bold">{title}</p>
            {itemCards?.map((items)=>(
                <div className="flex" key={items?.card?.info?.id}>
                <li className="text-md" >{items?.card?.info?.name}</li>
                <p className="text-md">{items?.card?.info?.price/100} Rs </p>
                </div>
            ))}
        </>
    )

}

export default FoodDetails