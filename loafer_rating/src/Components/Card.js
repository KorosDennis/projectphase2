import React,{useState,useEffect} from "react";
import "../index.css"

const SNEAKER_CARD= "http://localhost:8000/sneakers"



function Card(){

const [sneakers, setSneakers]= useState([]);

  useEffect(() => {
    fetch (SNEAKER_CARD)
    .then((response)=>response.json())
    .then((data)=> {
      console.log (data)
      setSneakers(data)
    });
  },[])

    return (

     <div className="wrapper">
        {Object.keys(sneakers).map(key=>(
         <div className="card_body">
            
            <img className="image" src= {sneakers[key].image} alt='loading...'/>
            <h2 className="card_title">{sneakers[key].brand}  {sneakers[key].year}</h2>
            <p className="card_description"> Worth: {sneakers[key].retailPrice}$</p>
            <button className="card_button">Details</button>
        </div>
         ))}
        </div>
    )
}
export default Card;