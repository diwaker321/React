import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/constant";

const DynamicFoodCard = ({resObj})=>{
    
    return (
        <div className='mainCont'>
        <div className='foodimg'>
            <img src={CDN_URL + resObj?.info?.cloudinaryImageId} alt=""/>
            <h3 className='imgtext'>{resObj?.info?.aggregatedDiscountInfoV3 ? `${resObj?.info?.aggregatedDiscountInfoV3.header} ${resObj?.info?.aggregatedDiscountInfoV3?.subHeader}` : null }</h3>
        </div>
        <div className='foodContent'>
            <h2>{resObj?.info?.name}</h2>
            <div className="ratingsection">
              <FontAwesomeIcon icon={faStar} />
              <p>{resObj?.info?.avgRatingString}</p>
              <span>.</span>
              <span>{resObj?.info?.sla?.deliveryTime} mins</span>
            </div>
            <div className='subheadingSection'>
                <p className="cuisines">{resObj?.info?.cuisines.join()}</p>
                <p>{resObj?.info?.areaName}</p>
            </div>
        </div>

        </div>
    )
}
export default DynamicFoodCard