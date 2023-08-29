import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosConfig/instance';
export default function Productdetails(props) {

    const params = useParams()
    const [product,setProduct] = useState({})
   

  useEffect(()=>{
     axiosInstance.get(`/movie/${params.id}`).then((res)=>{
           console.log(res.data);

        setProduct(res.data)
     }).catch((err)=>{
             console.log(err);
     })
    })
    return (
        <>
             <div >
             <img src={`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`} class="img-fluid rounded rounded-5 m-5" style={{width:"800px"}} alt="" />  
           <h1 class="m-5">{product.title}</h1>
           <h3 class="m-5">{product.release_date}</h3>
     <h6 class="m-5">{product.overview}</h6>
     
     
   
     
        </div>
        </>
    )
}


