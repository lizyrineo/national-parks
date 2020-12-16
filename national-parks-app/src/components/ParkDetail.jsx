import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


function ParkDetail() {
  const { parkCode } = useParams()
  //setting and getting the park info
  const [parkInfo, getParkInfo] = useState(null);
  //load info from API when the page loads
  //takes 2 parameters, anonymous (callback) function and dependency array
  useEffect(() => {
    //async is a function that pauses until specified operatiom completes
    const getPark = async () => {
      
      //response is set to the axios get request
      const response = await axios.get(
        `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=QrjjhyQ161zSmrEcR5kvWTV3yavowQTFON1trMox`
      );
      //set park info to response.data (array of objects from api)  
      getParkInfo(response.data.data[0])
      console.log(response)
    }
    getPark()
  }, []);
  return (
    parkInfo && 
    <div>
      <div className="main-image" style={{ backgroundImage: `url(${parkInfo.images[0].url})` }}>
        <h2>{parkInfo.fullName}</h2>
      </div>
      <h3>{parkInfo.addresses[0].line1}</h3>
      <h3>{parkInfo.addresses[0].city},</h3>
      <h3>{parkInfo.addresses[0].stateCode} {parkInfo.addresses[0].postalCode}</h3>
      <br />
      <p>{parkInfo.description}</p>
      <div className="images">{parkInfo.images && parkInfo.images.map(image => <img src={image.url}/>)}
      </div>
  
    
    </div>
    
  )
}

  export default ParkDetail;

