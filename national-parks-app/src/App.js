import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ParkDetail from "./components/ParkDetail";
import axios from "axios";
import './App.css';
import Footer from "./components/Footer";

function App() {
  //setting and getting the park info
  const [parkInfo, getParkInfo] = useState([]);
  //load info from API when the page loads
  //takes 2 parameters, anonymous (callback) function and dependency array
  useEffect(() => {
    //async is a function that pauses until specified operatiom completes
    const getPark = async () => {
      
      //response is set to the axios get request
      const response = await axios.get(
        `https://developer.nps.gov/api/v1/parks?api_key=QrjjhyQ161zSmrEcR5kvWTV3yavowQTFON1trMox`
      );
      //set park info to response.data (array of objects from api)  
      getParkInfo(response.data.data)
      console.log(response)
    }
    getPark()
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route exact path="/">
        <Home parkData={parkInfo} />
        </Route>
        <Route path="/park/:parkCode">
          <ParkDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
