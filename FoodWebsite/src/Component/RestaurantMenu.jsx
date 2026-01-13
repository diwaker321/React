import { useEffect } from "react";
import RestaurantItems from "./RestaurantItems";
const RestaurantMenu = ({Menudata})=>{
    const {title} = Menudata?.card?.card
    return (
        <>
        <div className="bg-gray-100 !mx-auto !my-2 shadow-sm rounded-md !p-2 w-8/12 ">
        <div className="flex justify-center">
        <p>{title}</p>
        <p>({Menudata?.card?.card?.itemCards?.length})</p>
        </div>

        {/* component for restaurant menus  */}
        <RestaurantItems  itemData = {Menudata?.card?.card?.itemCards}/>
        </div>
        </>
    )

}

export default RestaurantMenu