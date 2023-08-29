import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Movvies from '../../store/action/movies'
import Fav from './../../store/action/fav';
import { Link } from 'react-router-dom';

 const Movies=() =>{
    const moviess= useSelector((state)=>state.movies.movies)
    const favv= useSelector((state)=>state.fav.fav)
    var [change, setchange] = useState(1)
  
    function next(){
        change++
        setchange(change)
    }

    function prev(){
        change--
        setchange(change)
    }

    function addfav (obj) {
    

        dispatch(Fav([ ...favv, obj]))
        
       }
    const dispatch=useDispatch()
useEffect(() => {
 dispatch(Movvies(change))
},[])
useEffect(() => {
    dispatch(Movvies(change))
},[change])
    return (
<>


{moviess.map((prd) => {

return (
    <>
<div class="m-2 " style={{display:"inline-block"}} >

<Card className="m-auto d-grid " style={{ width: "20rem" }}>
    <Link to={`/Productdetails/${prd.id}`} style={{textDecoration:"none",color:"black"}} >
 
           
               <img src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`} class="img-fluid rounded" style={{width:"100%"}} alt="" />        

               <Card.Title className="p-2">{prd.title}</Card.Title>
       
          
      
      
            </Link>
            <Card.Body>
<div className="d-flex justify-content-between">
    
                <p style={{marginTop:"5px"}}>{prd.release_date}</p>
                <a onClick={() => {addfav(prd)}} style={{display:"inline",width:"50px",cursor:"pointer",fontSize:"20px"}}><i className={ ` ${moviess.includes(prd.id) ?"fa-solid fa-heart":"fa-regular fa-heart"}`}  ></i></a>
    
</div></Card.Body>
            </Card>
     


</div>

</>   
)


}

)

}

<br /><br />
<div className="d-flex justify-content-evenly">
    <button class="btn btn-secondary"  onClick={() => {
           prev()
           }
        }>&larr; previous</button>
    <button class="btn btn-primary" onClick={() => {
               next()
        }}>next &rarr; </button>
</div>
 <br></br>
</>
    )}
 export default Movies