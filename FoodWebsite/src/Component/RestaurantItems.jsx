const RestaurantItems = ({itemData})=>{
    return (
        <>
        {itemData?.map((res)=>(
            <div key={res?.card?.info?.id}>
            <div className="text-left border-b border-gray-300">
                <p>{res?.card?.info?.name}</p>
                <p>{res?.card?.info?.price /100} Rs</p>
            </div>

            <p >{res?.card?.info?.description}</p>


            </div>
        ))} 
        </>
    )

}

export default RestaurantItems