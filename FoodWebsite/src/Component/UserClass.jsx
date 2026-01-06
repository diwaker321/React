// import React from "react"
// class UserClass extends React.Component{
//     constructor(props){ // this is how you can call the props and you can use this . it gives you an object
//         super(props)

//         this.state={ // inside the constructor you can make state here
//             count:0,
//             count2:0
//         }
//         console.log("i will be called first");
        
//     }

//     componentDidMount(){
//         console.log("i will be called in the end ");
        
//     }

    
//     render(){
//         console.log("i will be called second");
        
//         const {location , Qualification , Experience}  = this.props
//         const {count , count2} = this.state
//         return <>
//         <h1>this is the class based component</h1>
//         <p>Location : {location}</p>
//         <p>Qualification : {Qualification}</p>
//         <p>Experience : {Experience}</p>
//         <div className="classcomp">
//             <h2>this container contain the state variables</h2>
//                 <div className="classdiv">
//                     <p style={{fontSize:'20px'}}>{count}</p>
//                     <button
//                     className="classbtn-style" 
//                     onClick={()=>{
//                         this.setState({
//                         count : count + 1
//                         })
//                     }}
//                      >By Clicking You Can Change The Count</button>

//                      {count !==0 && ( // this will only show when count != 0
//                          <button className="classbtn-style" onClick={()=>{
//                             this.setState({
//                                 count:0
//                             })
//                          }} >Reset the Count</button>
//                      )}
//                 </div>

//                 <div className="classdiv " style={{ paddingLeft:'2px' , marginTop:"10px"}}>
//                     <p style={{fontSize:'20px'}}>{count2}</p>
//                     <button
//                     className="classbtn-style" 
//                     onClick={()=>{
//                         this.setState({
//                         count2 : count2 + 1
//                         })
//                     }}
//                      >By Clicking You Can Change The Second count</button>

//                      {count2 !==0 && (
//                          <button className="classbtn-style" onClick={()=>{
//                             this.setState({
//                                 count2:0
//                             })
//                          }} >Reset the Count</button>
//                      )}
//                 </div>
//         </div>
//         </>
//     }
// }

// export default UserClass




                                /*    now we learn how to fetch in class based component     */
// import React from "react"
// class UserClass extends React.Component{
//     constructor(props){ 
//         super(props)

//         this.state={
//             gitapiData: {
//             }
//         }
        
//     }

//     async componentDidMount(){ // this is how we called the api
//         const data = await fetch("https://api.github.com/users/diwaker321")
//         const jsonData = await data.json()
//         console.log(jsonData); 
//         this.setState({
//             gitapiData:jsonData
//         })   
//     }
    

    
//     render(){
//         const {location , Qualification , Experience}  = this.props
//         const {login , avatar_url , public_repos ,followers} = this.state.gitapiData
        
//         return <>
//         <h1>this is the class based component</h1>
//         <div style={{display:'flex' , alignItems:'center' , gap:'20px' , margin:"10px 0px"}}>
//         <div className="gitimg">
//         <img src={avatar_url} alt="" />
//         </div>
//         <div>
//         <p>Name : {login}</p>
//         <p>Public Repo : {public_repos}</p>
//         <p>Followers: {followers}</p>
//         </div>
//         </div>
//         <p>Location : {location}</p>
//         <p>Qualification : {Qualification}</p>
//         <p>Experience : {Experience}</p>
//         </>
//     }
// }

// export default UserClass






/* Now we learn about the code flow ki phele ky chlta he */

import React from "react"
class UserClass extends React.Component{
    constructor(props){ 
        super(props)

        this.state={
            gitapiData: {
            }
        }
        
    }

    async componentDidMount(){ // this is how we called the api
        const data = await fetch("https://api.github.com/users/diwaker321")
        const jsonData = await data.json()
        console.log(jsonData); 
        this.setState({
            gitapiData:jsonData
        })   
    }
    

    
    render(){
        const {location , Qualification , Experience}  = this.props
        const {login , avatar_url , public_repos ,followers} = this.state.gitapiData
        
        return <>
        <h1>this is the class based component</h1>
        <div style={{display:'flex' , alignItems:'center' , gap:'20px' , margin:"10px 0px"}}>
        <div className="gitimg">
        <img src={avatar_url} alt="" />
        </div>
        <div>
        <p>Name : {login}</p>
        <p>Public Repo : {public_repos}</p>
        <p>Followers: {followers}</p>
        </div>
        </div>
        <p>Location : {location}</p>
        <p>Qualification : {Qualification}</p>
        <p>Experience : {Experience}</p>
        </>
    }
}

export default UserClass
