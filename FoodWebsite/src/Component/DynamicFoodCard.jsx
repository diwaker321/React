import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/constant";

const DynamicFoodCard = ({resObj})=>{
    
    return (
        <div className='mainCont w-[20.5vw] h-[72vh] rounded-xl '>
        <div className='foodimg w-[100%] h-[50%] relative'>
            <img className="w-[100%] h-[100%] rounded-xl object-cover "  src={CDN_URL + resObj?.info?.cloudinaryImageId} alt=""/>
            <h3 className='imgtext absolute text-white text-lg font-bold'>{resObj?.info?.aggregatedDiscountInfoV3 ? `${resObj?.info?.aggregatedDiscountInfoV3.header} ${resObj?.info?.aggregatedDiscountInfoV3?.subHeader}` : null }</h3>
        </div>
        <div className='foodContent !pl-[10px] !pt-[10px]'>
            <h2 className="text-xl">{resObj?.info?.name}</h2>
            <div className="ratingsection flex items-center ">
              <FontAwesomeIcon icon={faStar} />
              <p className="text-xl">{resObj?.info?.avgRatingString}</p>
              <span>.</span>
              <span className="text-xl">{resObj?.info?.sla?.deliveryTime} mins</span>
            </div>
            <div className=' text-gray-500 mt-[7px] pl-[3px] text-xl'>
                <p className="cuisines my-[5px] mx-0 break-words">{resObj?.info?.cuisines.join()}</p>
                <p className="text">{resObj?.info?.areaName}</p>
            </div>
        </div>

        </div>
    )
}

export  const eahanceFoodCard = (DynamicFoodCard)=>{
    return (props)=>{
        return (
            <div className="flex flex-col relative">
                <p className=" bg-black text-amber-50 rounded !py-1 !px-5 absolute z-10 top-2 left-1 ">veg</p>
                <DynamicFoodCard {...props} />  
            </div>
        )
    }
}
export default DynamicFoodCard