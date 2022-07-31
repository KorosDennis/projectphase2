import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Comments from "./Components/Comments/Comments";





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
      </Routes>
    </div>
    </>
  );
};

export default App;

