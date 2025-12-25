import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resData from "../utils/dummyData";
import DynamicFoodCard from "./DynamicFoodCard";
const BodySection = ()=>{
    return (
        <div className='mainBody'>
            <div className='searchbarSection'>
                <input type="search" className='searchinput' placeholder='Enter your Food'  />
                <FontAwesomeIcon style={{cursor:'pointer'}} icon={faMagnifyingGlass} size="lg" color="gray" />
            </div>
            <div className='cardSection'>
            {resData?.map((foodData)=>{
                return <DynamicFoodCard resObj={foodData} key={foodData?.info?.id} />
            })}                
            </div>
        </div>
        
    )
}
export default BodySection