// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import resData from "../utils/dummyData";
// import DynamicFoodCard from "./DynamicFoodCard";
// import { useState } from "react";
// const BodySection = ()=>{
//     const [ resturantData , setResturantData] = useState(resData) // Whenever the state variables changes. React re-render the components
//     return (
//         <div className='mainBody'>
//             <div className=" upperMainBody">
//             <div className='searchbarSection'>
//                 <input type="search" className='searchinput' placeholder='Enter your Food'  />
//                 <FontAwesomeIcon style={{cursor:'pointer'}} icon={faMagnifyingGlass} size="lg" color="gray" />
//             </div>
            
//             <button className="rated-btn"onClick={()=>{
//                 const updatedData=resturantData.filter((res)=>{
//                     return res.info.avgRating > 4.2
//                 })
//                 console.log(updatedData)
//                 setResturantData(updatedData)

//             }}>Top Rated Resturants</button>

//             </div>
//             <div className='cardSection'>
//             {resturantData?.map((foodData)=>{
//                 return <DynamicFoodCard resObj={foodData} key={foodData?.info?.id} />
//             })}                
//             </div>
//         </div>
        
//     )
// }
// export default BodySection



{
/*
WHY REACT IS SO FAST?

 ans) react is good at DOM manipulations
      basically it uses the reconciliation algorithm aka react fibre

      FIRST OF ALL YOU HAVE TO KNOW WHAT IS VIRTUAL DOM 
      ans) this is the representation of the actual dom in forms of objects (earlier we see in react.createElement)

      WHATS AN ACTUAL DOM LOOKS LIKE?
      ans) actual dom contains div , tags , etc

      WHAT IS DIFF ALGORITHM
      ans) this algorithm is used to find the diference between old virtual dom and the new virtual dom 

      eg. filter se phele ui me 15 cards show hore the  ( toh us time ka ek virtual dom bna hoga )
      after using the filter tb ui me 5 cards show hue ( toh is hiz ka ek virtual dom bna hoga )

      toh diff algorithm is try to find the difference between the old V.dom and the newly updated V.dom

      after calculating the difference and it will then actually update the dom so fast 
      this algo is also known as react fibre
*/
}

/* in this section now we see how the data is coming from backend using fetch  */

{
/*
first of all what is a monolith and microservice arch.
ans) IN MONOLITH
    -jisme app ek single project ko ek hi language me likh dete ho eg. UI , AUTH , DB , API etc. ye sb ek hi language me likha jata he 
    and isme problem ye dekhi jati thi ki eg. if you have to change a minor thing in you code then you have to deploy or build the whole application which is a time consuming process

    IN MICROSERVICE ARCH
    -isme apki application me jruri nhi he ki sari service ek hi lang. follow kre 
    UI and frontend may be write in javascript
    and you can write your backend service code in any other lang. you can use python for it 
    and these small microservice are combine to form a single large application

    then these services need to intract with each other to produce the results 

    we can say that react is our ui micro service and this perticular service is running in a respective ports
    currentry this is working in a localhost 5173

    aese hi for eg. backend ki koi service kisi port me chlti he eg localost5500

    and last me ye sare ports ko map kr diya jata he in their domain name 

    eg for react port we can make the domain called /frontend
    and for node js and any other backend service we can make /backend
    for all the api work we can make called /api

    SO HOW THEY INTERACT
    ans) they make calls 
     suppose UI wants to connect with backend
     it will call the /backend domain

*/
}

/* now we learn how we can fetch the data and make it dynamic */


import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import resData from "../utils/dummyData";
import DynamicFoodCard from "./DynamicFoodCard";
import { useState } from "react";
import { useEffect } from "react";
import { Swiggy_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
const BodySection = ()=>{
    const [ resturantData , setResturantData] = useState([]) 
    const [filterData , setFilterData] = useState([]) // this is for the search functionality
    const [handleSearchInput , setHandleSearchInput] = useState("")

    useEffect(()=>{ /* this use effect will be called once this component will be rendered and last me ye useeffect call ho jayega   */
        // console.log('i called in last');
        fetchSwiggyData()
    },[])

    // console.log('i called before the use effect console log');


    async function fetchSwiggyData(){
        const ApiData = await fetch(Swiggy_URL)
        const apiJsonDta = await ApiData.json()
        // console.log(apiJsonDta.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        /*
        THIS GIVES YOU THE ERROR 

        due to the CORS POLICY 
            - the browser did not allow you to access the api from localhost (i.e from one origin to another origin )
        
        to bypass this cors issue 
            - install the extension in chrome i.e allow cors access
        */
    //setResturantData(apiJsonDta) // this will not give the data properly  you have to penetrate 
    setResturantData(apiJsonDta.data.cards[1].card.card.gridElements.infoWithStyle.restaurants) // after rendering ye dynamic data show ho jayega
    setFilterData(apiJsonDta.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    const handleSearch = ()=>{
        //write your filter logic
        console.log(handleSearchInput)
         const newFilterData = resturantData?.filter((res)=>res.info.name.toLowerCase().includes(handleSearchInput.toLowerCase()))
         console.log(newFilterData);
         setFilterData(newFilterData)
         

    }
    
    /* this is the concept of conditional rendering */
    return resturantData.length === 0 ? <Shimmer/> :  (
        <div className='mainBody'>
            <div className=" upperMainBody">
            <div className='searchbarSection'>
                <input type="text"
                 className='searchinput'
                 placeholder='Enter your Food'
                 value={handleSearchInput}
                 onChange={(e)=>{
                    setHandleSearchInput(e.target.value)
                 }} /* you have to use this . if you want to see the results in search input   */
                  />
                <FontAwesomeIcon 
                style={{cursor:'pointer'}}
                 icon={faMagnifyingGlass}
                size="lg"
                color="gray"
                onClick={handleSearch}
                 />
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
            {filterData?.map((foodData)=>{
                return <DynamicFoodCard resObj={foodData} key={foodData?.info?.id} />
            })}                
            </div>
        </div>
        
    )
}
export default BodySection