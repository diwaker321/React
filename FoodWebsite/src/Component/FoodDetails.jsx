import { useEffect, useState } from "react"
import { RESTAURANT_MENU , Swiggy_URL ,CDN_URL } from "../utils/constant"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"

const FoodDetails = ()=>{
    const [foodinfo , setfoodinfo] = useState(null)
    const [foodDetails , setFoodDetails] = useState(null)

    const params = useParams()
    console.log(params);
    
    
    useEffect(()=>{
        fetchFoodDetails()
        fetchFood()
    },[])

    async function fetchFoodDetails(){
        const res = await fetch(RESTAURANT_MENU);
        const jsonData = await res.json()
        setFoodDetails(jsonData.data.cards)
    }

    async function fetchFood(){
        const res = await fetch(Swiggy_URL)
        const jsonData = await res.json() 
        setfoodinfo(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info)
    }

    if(foodinfo === null){
        return <Shimmer/>
    }

    const {locality ,name,id,avgRating,cloudinaryImageId,costForTwo,cuisines,sla} = foodinfo

    return <>
    <div><h1>this is the food detail section</h1>
    <p>Locality : {locality}</p>
    <p>name : {name}</p>
    <p>deliviry time : {sla.slaString}</p>
    <p>distance : {sla.lastMileTravelString}</p>
    <p>id : {id}</p>
    <p>avg rating : {avgRating}</p>
            <div className='foodDetailscard'>
                <img  className="fooddetailsimgtext" src={CDN_URL + cloudinaryImageId} alt=""/>
                <h3 className='foodtext'>{foodinfo?.aggregatedDiscountInfoV3 ? `${foodinfo?.aggregatedDiscountInfoV3.header} ${foodinfo?.aggregatedDiscountInfoV3?.subHeader}` : null }</h3>
            </div>
    <p>Cost for two : {costForTwo}</p>
    <p>Cuisines : {cuisines.join(",")}</p>
    <div className="Recommend-food">
        <h2>Recommended Food</h2>
        {foodDetails?.map((res)=>{  
            if(!res?.card?.card?.info) return null;
            return(
                <li key={res?.card?.card?.info?.id}> {res?.card?.card?.info?.name}</li>
            
            )  
        })}
    </div>
    </div>
    </> 

}

export default FoodDetails