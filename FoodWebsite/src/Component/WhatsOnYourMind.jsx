const WhatsOnYourMind = ({data})=>{
    // console.log(data[0].card.card.gridElements.infoWithStyle.info)
    
    return (
        <>
            <div className="flex ">
            {data[0].card.card.gridElements.infoWithStyle.info?.map((res)=>(
                <div className="">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${res.imageId}`} alt="" />
                </div>
            )
            )}
            </div>
            
        </>
    )

}

export default WhatsOnYourMind