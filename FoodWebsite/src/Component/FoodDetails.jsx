import { useEffect, useState } from "react";
import {DUMMY_MENU_DATA} from "../utils/constant";
import {useParams} from "react-router-dom"
import RestaurantMenu from "./RestaurantMenu";


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

    const categories = menuData?.filter((item)=>(
        item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))

    return (
            <div className="text-center">
                <h1 className="text-2xl font-bold foodname">{name}</h1>
                <div className="flex justify-center">
                <p className="font-bold">{cuisines?.join(" , ")}</p>
                <p className="font-bold">{costForTwo}</p>
                </div>

                {/* <p className="font-bold">{title}</p>
                {itemCards?.map((items)=>(
                    <div className="flex justify-center" key={items?.card?.info?.id}>
                    <p className="text-md" >{items?.card?.info?.name}</p>
                    <p className="text-md">{items?.card?.info?.price/100} Rs </p>
                    </div>
                ))} */}
                {/* make a accordian   */}
                {categories?.map((res)=>(
                    <RestaurantMenu Menudata = {res}/>
                ))}
            </div>
    )

}

export default FoodDetails