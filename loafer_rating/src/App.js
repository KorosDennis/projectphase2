import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Comments from "./Components/Comments/Comments";
import Search from "./Components/Search";
import "./index.css"





function App (){

  return (
    <>
      <NavBar/>
      <div className="container">
      <Routes>
          <Route path="/" element=
            {<Home/>}/>
            <Route path="/Comments" element=
            {<Comments/>}/>
            <Route path="/Search" element=
            {<Search/>}/>
      </Routes>
    </div>
    </>
  );
};

export default App;

