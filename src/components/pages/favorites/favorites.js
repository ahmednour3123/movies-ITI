import { useDispatch, useSelector } from "react-redux"
import { useContext, useEffect, useState } from "react";
import Fav from './../../store/action/fav';
import { LangContext } from "../../../contexts/language";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
export default function Favorites(props) {

const favo= useSelector((state)=>state.fav.fav)
console.log(favo)
const dispatch=useDispatch()

const del =(id)=>{ 
const list = favo.filter(f => f.id !== id)
dispatch(Fav(list))
}


return (
<>
{favo.map((prd) => {
    console.log(prd)
    
return (
    <>
    <Card className="m-auto " style={{ width: "20rem" ,display:"inline-block"}}>
<Link to={`/Productdetails/${prd.id}`} style={{textDecoration:"none",color:"black",display:"inline-block"}}>
         <img src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`} class="img-fluid rounded " alt="" style={{width:"100%" }}/>        
      <h6 >{prd.title}</h6>
    
        </Link>
        <div className="d-flex justify-content-between p-3">
        <p style={{marginTop:"3px"}}>{prd.release_date}</p>   
            
    <a onClick={()=>{del(prd.id)}} style={{cursor:"pointer" ,fontSize:"20px"}}><i class="fa-solid fa-trash"></i></a>
    
</div>
</Card>
</>   
)



}
)
}
</>
    )}

   
    

