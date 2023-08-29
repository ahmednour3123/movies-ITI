import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';
export default function Products() {
    const [products, setProducts] = useState([])
    var [change, setchange] = useState(1)
  
    function next(){
        change++
        setchange(change)
    }

    function prev(){
        change--
        setchange(change)
    }


    useEffect(() => {
        axiosInstance.get(`/movie/popular?page=${change}`).then((response) =>
       { setProducts(response.data.results)
        console.log(response)}).catch((err) => {
            console.log(err);
        })

    }, [change])



    useEffect(() => {
        axiosInstance.get('/movie/popular').then((res) => {
            setProducts(res.data.results)
            console.log(res.data.results)
        }).catch((err) => {
            console.log(err);
        })


    }, [])

    return (
        <>
            {products.map((prd) => {

                return (
                    <>
<div class="m-2" style={{display:"inline-block"}}>
<Link to={`/Productdetails/${prd.id}`} style={{textDecoration:"none",color:"black"}}>
         <img src={`https://image.tmdb.org/t/p/w500/${prd.poster_path}`} class="img-fluid rounded " alt="" style={{width:"300px" }}/>        
      <h6 >{prd.title}</h6>
        <p >{prd.release_date}</p>
        </Link>
        
</div>

             </>   
             )})}
      <button class="btn btn-danger" onClick={() => {
           next()
    }}>next</button>
    <button class="btn btn-danger" onClick={() => {
       prev()
       }
    }>prev</button>
        </>
    )
}
