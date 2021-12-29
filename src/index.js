import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./index.css";

import MapChart from "./components/MapChart/MapChart.js";

let on = "on-btn"
let off = "off-btn"

function App() { 
  const [content, setContent] = useState("");

  function latestClicked(){
    on = "on-btn"
    off = "off-btn" 
  }
  function reportsClicked(){
    on = "off-btn"
    off = "on-btn"
    
  }
 

  return (
      <div className="main-container">
        <div className="top-secton">
          <div className="button-container">
            <button onClick={latestClicked} className={`button ${on}`}>Latest</button>
            <button onClick={reportsClicked} className={`button ${off}`}>Reports</button>
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
          <div className="widgets-container">
            <div className="bottom-container">
              <h1>Bottom Container 1</h1>
            </div>

            <div className="bottom-container">
              <h1>Bottom Container 2</h1>
            </div>

            <div className="bottom-container">
              <h1>Bottom Container 3</h1>
            </div>

            <div className="bottom-container">
              <h1>Bottom Container 4</h1>
            </div>
          </div>
        </div>
      </div>   
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


