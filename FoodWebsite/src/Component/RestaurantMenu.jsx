import { useEffect, useState } from "react";
import RestaurantItems from "./RestaurantItems";
const RestaurantMenu = ({Menudata , isOpen , setShowIndex})=>{
    const {title} = Menudata?.card?.card
    function handleToggle(){
        setShowIndex()
    }
    return (
        <>
        <div className="bg-gray-50 !mx-auto coardian-header shadow-sm rounded-md !p-2 w-6/12 ">
        <div className="flex justify-center cursor-pointer" onClick={handleToggle} >
        <p className="font-bold text-xl">{title}</p>
        <p className="font-bold text-xl">({Menudata?.card?.card?.itemCards?.length})</p>
        </div>

        {/* component for restaurant menus  */}
        {isOpen && <RestaurantItems  itemData = {Menudata?.card?.card?.itemCards} showAddButton = {true}/> }   
        </div>
        </>
    )

}

export default RestaurantMenu