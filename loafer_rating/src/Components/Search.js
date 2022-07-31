import React, { useEffect, useState, } from "react";


const SEARCH= "http://localhost:8000/sneakers"

function Search(){

const [searchItem, setSearchItem] = useState('')
const [results,setResults]=useState(0)

const handleSearch= (event) =>{
    setSearchItem(event.target.value)
}
const handleSubmit = (event)=>{
    event.preventDefault()
}

const searchInfo=()=>{
    const actualSearch = SEARCH + searchItem
    
    fetch(actualSearch)
    .then((response)=>response.json())
    .then ((data)=>{
         setSearchItem('')
         setResults(data.sneakers == null ? 0 : data.sneakers.length)
         data.forEach((sneaker)=>{
            // setImage(sneaker.image)
            // setTitle(sneaker.brand)
            // setPrice(sneaker.retailPrice)
         })
            
         
    })



    return(
        <div className="containe">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="search" className="form-label">Search sneaker</label>
                <input type="text" className="form-control" id="search" name="search" value={searchItem} onChange={handleSearch}/>
            </div>
            <h3>Search Results({results})</h3>
            <div>
               {}
            </div>
        </form>
        </div>

    )
}

}
export default Search;