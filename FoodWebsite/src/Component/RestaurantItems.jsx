import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import userinfo from "../utils/UserDetailsContext";

const RestaurantItems = ({itemData})=>{
    const userDetails = useContext(userinfo)
    return (
        <>
        {itemData?.map((res)=>(
            <div key={res?.card?.info?.id}>
            <div className="flex !py-2">
            <div className="w-3/12 relative">
                <img  className="w-100 rounded-xl " src={CDN_URL+res?.card?.info?.imageId} alt="food img" />
                <button className="border !px-4 rounded-md bg-white text-green-800 absolute bottom-1 left-9 cursor-pointer ">Add +</button>
            </div>
            <div className=" !py-2 w-9/12">
                <p className="text-md text-left">{res?.card?.info?.name} -</p>
                <p className="text-sm text-left ">₹{res?.card?.info?.price /100} Rs</p>
            </div>
            </div>
            <div className="text-left border-b border-gray-300">
                <p className="text-gray-500 text-sm" >{res?.card?.info?.description}</p>
            </div>


            </div>
        ))} 
        </>
    )

}

export default RestaurantItems