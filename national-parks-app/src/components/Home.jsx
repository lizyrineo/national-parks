import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";


function Home(props) {
  
  const parkNameImage = props.parkData[0] && props.parkData.map((park, index) => {
    return (
      <div key={index} className="parkName">
        <Link to={`/park/${park.parkCode}`}>
          <div className="homePageName">
            <h2>{park.fullName}</h2>
          </div>
          <div className="homePageImages">
            <img src={park.images[0] && park.images[0].url} />
          </div>  
          
          </Link>

      </div>

    )
  })
  return (
    <div className="thumbNails">{parkNameImage}</div>
  )
}
export default Home;
