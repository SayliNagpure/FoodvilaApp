import { useRouteError } from "react-router-dom"

const Errors=()=>{
    const err=useRouteError()
   
    return(
       <div>
         <h1>Ooops!!!</h1>
        <h2>{err.error?.message + " : " + err.status}</h2>
       </div>
    )
}
export default Errors