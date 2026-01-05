import { useRouteError } from "react-router-dom" 


const Error = ()=>{
    const Err = useRouteError() // this will give you all the errors jo us path ke dauran aaye honge
    console.log(Err)
    return <>
    <h1>Opps This Page Is Not Found {Err.status}</h1>
    </>

}
export default Error