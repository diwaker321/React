import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resData from "../utils/dummyData";
import DynamicFoodCard from "./DynamicFoodCard";
import { useState } from "react";
const BodySection = ()=>{
    const [ resturantData , setResturantData] = useState(resData)
    return (
        <div className='mainBody'>
            <div className=" upperMainBody">
            <div className='searchbarSection'>
                <input type="search" className='searchinput' placeholder='Enter your Food'  />
                <FontAwesomeIcon style={{cursor:'pointer'}} icon={faMagnifyingGlass} size="lg" color="gray" />
            </div>
            
            <button className="rated-btn"onClick={()=>{
                const updatedData=resturantData.filter((res)=>{
                    return res.info.avgRating > 4.2
                })
                console.log(updatedData)
                setResturantData(updatedData)

            }}>Top Rated Resturants</button>

            </div>
            <div className='cardSection'>
            {resturantData?.map((foodData)=>{
                return <DynamicFoodCard resObj={foodData} key={foodData?.info?.id} />
            })}                
            </div>
        </div>
        
    )
}
export default BodySection