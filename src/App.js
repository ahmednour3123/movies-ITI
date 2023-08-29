import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from "react";
import Products from './components/products/products';
import Productdetails from './components/productdetails/productdetails';
import Header from './components/header/header';
import Movies from './components/pages/mov/movies';
import Favorites from './components/pages/favorites/favorites';
import { LangProvider } from './contexts/language';

function App() {
  const [lan,setlan]=useState("")
  
  return (
    
    <div className="App container-fluid text-center">
      <LangProvider value={{lan,setlan}}>
  < Header/>
         <Routes>

         {/* <Route path='' element={<Products/>}/>
         <Route path='/Product' element={<Products/>}/> */}
         <Route path='/Productdetails/:id' element={<Productdetails/>}/>

  
             <Route path='/'  element={<Movies/>}/>
  

         <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         </LangProvider>
    </div>
  );
}

export default App;
