import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./index.css";

import MapChart from "./components/MapChart/MapChart.js";


function App() { 
  const [content, setContent] = useState("");
 
  return (
    <div className="outer-container">
      <div className="main-container">
            <div className="top-secton">
              <div className="button-container">
                <button className="button latest-btn">Latest</button>
                <button className="button reports-btn">Reports</button>
              </div>
              <div className="search-container">
                <div>
                  <input list="inputs-drop-down" type="search" className="search" placeholder="Search..."/>
                  <datalist className="drop-list"  id="inputs-drop-down">
                    <option value="America" >America</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="Russia">Russia</option>
                  </datalist>
                </div>          
                <img alt="" className="settings-icon" src="https://res.cloudinary.com/di01osmzz/image/upload/v1638366535/icons8-settings-50_1_nrszuo.png" />               
              </div>
            </div>

            <div className="map-container">          
              <MapChart setTooltipContent={setContent} />
              <ReactTooltip>{content}</ReactTooltip>           
            </div>
      </div>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


