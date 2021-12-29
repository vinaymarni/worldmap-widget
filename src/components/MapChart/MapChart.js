import React, { memo } from "react";

import './index.css'

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const MapChart = ({ setTooltipContent }) => {
  return (  
      <ComposableMap data-tip="" projectionConfig={{ scale: 160 }}>                
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography                        
                  key={geo.rsmKey}
                  geography={geo}

                  /*
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;                   
                    setTooltipContent(NAME);                    
                  }}
                  
                  onMouseLeave={() => {
                    setTooltipContent("");                 
                  }}
                  */
                  style={{
                    default: {
                      fill: "#9299B8",
                      outline: "none",
                      top: '171px',
                      left: '170px',
                      backgroundColor: '#1F1F1F'
                   },

                    hover: {
                      stroke: "#3689FD",
                      fill: "#9299B8",
                      outline: "none",                                       
                    },
                    pressed: {
                      fill: "black",
                      outline: "none"
                    },

                  }}
                />
              ))
            }
          </Geographies>
            <Marker coordinates={[234, 132]}>                         
            <svg
            variant="contained"
            onMouseEnter={() =>{setTooltipContent("Data Cener-1")}}
            onMouseLeave={() => {setTooltipContent("")}}
            width="31" height="18" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_13_658)">
                    <path d="M13.1379 0.25H17.8621C18.8286 0.25 19.6121 1.0335 19.6121 2V20.3707H11.3879V2C11.3879 1.0335 12.1714 0.25 13.1379 0.25Z" fill="#FC981F" stroke="#7E7E7E" stroke-width="0.5"/>
                    <line x1="13.5172" y1="4.25862" x2="17.4828" y2="4.25862" stroke="black"/>
                    <line x1="13.5172" y1="7.43103" x2="17.4828" y2="7.43103" stroke="black"/>
                    <line x1="13.5172" y1="10.6034" x2="17.4828" y2="10.6034" stroke="black"/>
                    <path d="M20.2758 5.80173H25C25.9665 5.80173 26.75 6.58523 26.75 7.55173V20.3707H18.5258V7.55173C18.5258 6.58523 19.3094 5.80173 20.2758 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                    <path d="M6 5.80173H10.7241C11.6906 5.80173 12.4741 6.58523 12.4741 7.55173V20.3707H4.25V7.55173C4.25 6.58523 5.0335 5.80173 6 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                    <line x1="6.3793" y1="10.6034" x2="10.3448" y2="10.6034" stroke="black"/>
                    <line x1="20.6552" y1="10.6034" x2="24.6207" y2="10.6034" stroke="black"/>
                    <line x1="6.3793" y1="12.9828" x2="10.3448" y2="12.9828" stroke="black"/>
                    <line x1="20.6552" y1="12.9828" x2="24.6207" y2="12.9828" stroke="black"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_13_658" x="0" y="0" width="31" height="28.6207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_658"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_658" result="shape"/>
                  </filter>
                  </defs>                      
              </svg>         
            </Marker>

            <Marker coordinates={[264, 143]}>
              <svg
              variant="contained"
              onMouseEnter={() =>{setTooltipContent("Data Cener-2")}}
              onMouseLeave={() => {setTooltipContent("")}}
              width="31" height="18" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_13_658)">
                  <path d="M13.1379 0.25H17.8621C18.8286 0.25 19.6121 1.0335 19.6121 2V20.3707H11.3879V2C11.3879 1.0335 12.1714 0.25 13.1379 0.25Z" fill="#FC981F" stroke="#7E7E7E" stroke-width="0.5"/>
                  <line x1="13.5172" y1="4.25862" x2="17.4828" y2="4.25862" stroke="black"/>
                  <line x1="13.5172" y1="7.43103" x2="17.4828" y2="7.43103" stroke="black"/>
                  <line x1="13.5172" y1="10.6034" x2="17.4828" y2="10.6034" stroke="black"/>
                  <path d="M20.2758 5.80173H25C25.9665 5.80173 26.75 6.58523 26.75 7.55173V20.3707H18.5258V7.55173C18.5258 6.58523 19.3094 5.80173 20.2758 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                  <path d="M6 5.80173H10.7241C11.6906 5.80173 12.4741 6.58523 12.4741 7.55173V20.3707H4.25V7.55173C4.25 6.58523 5.0335 5.80173 6 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                  <line x1="6.3793" y1="10.6034" x2="10.3448" y2="10.6034" stroke="black"/>
                  <line x1="20.6552" y1="10.6034" x2="24.6207" y2="10.6034" stroke="black"/>
                  <line x1="6.3793" y1="12.9828" x2="10.3448" y2="12.9828" stroke="black"/>
                  <line x1="20.6552" y1="12.9828" x2="24.6207" y2="12.9828" stroke="black"/>
                </g> 
              </svg>           
            </Marker>
            
            <Marker coordinates={[309, 192]}>
            <svg
            variant="contained"
            onMouseEnter={() =>{setTooltipContent("Data Cener-3")}}
            onMouseLeave={() => {setTooltipContent("")}}
            width="31" height="18" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_13_658)">
                <path d="M13.1379 0.25H17.8621C18.8286 0.25 19.6121 1.0335 19.6121 2V20.3707H11.3879V2C11.3879 1.0335 12.1714 0.25 13.1379 0.25Z" fill="#FC981F" stroke="#7E7E7E" stroke-width="0.5"/>
                <line x1="13.5172" y1="4.25862" x2="17.4828" y2="4.25862" stroke="black"/>
                <line x1="13.5172" y1="7.43103" x2="17.4828" y2="7.43103" stroke="black"/>
                <line x1="13.5172" y1="10.6034" x2="17.4828" y2="10.6034" stroke="black"/>
                <path d="M20.2758 5.80173H25C25.9665 5.80173 26.75 6.58523 26.75 7.55173V20.3707H18.5258V7.55173C18.5258 6.58523 19.3094 5.80173 20.2758 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <path d="M6 5.80173H10.7241C11.6906 5.80173 12.4741 6.58523 12.4741 7.55173V20.3707H4.25V7.55173C4.25 6.58523 5.0335 5.80173 6 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <line x1="6.3793" y1="10.6034" x2="10.3448" y2="10.6034" stroke="black"/>
                <line x1="20.6552" y1="10.6034" x2="24.6207" y2="10.6034" stroke="black"/>
                <line x1="6.3793" y1="12.9828" x2="10.3448" y2="12.9828" stroke="black"/>
                <line x1="20.6552" y1="12.9828" x2="24.6207" y2="12.9828" stroke="black"/>
                </g>              
              </svg>            
            </Marker>

            <Marker coordinates={[344, 159]}>
            <svg
            variant="contained"
            onMouseEnter={() =>{setTooltipContent("Data Cener-4")}}
            onMouseLeave={() => {setTooltipContent("")}}
            width="31" height="18" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_13_658)">
                <path d="M13.1379 0.25H17.8621C18.8286 0.25 19.6121 1.0335 19.6121 2V20.3707H11.3879V2C11.3879 1.0335 12.1714 0.25 13.1379 0.25Z" fill="#FC981F" stroke="#7E7E7E" stroke-width="0.5"/>
                <line x1="13.5172" y1="4.25862" x2="17.4828" y2="4.25862" stroke="black"/>
                <line x1="13.5172" y1="7.43103" x2="17.4828" y2="7.43103" stroke="black"/>
                <line x1="13.5172" y1="10.6034" x2="17.4828" y2="10.6034" stroke="black"/>
                <path d="M20.2758 5.80173H25C25.9665 5.80173 26.75 6.58523 26.75 7.55173V20.3707H18.5258V7.55173C18.5258 6.58523 19.3094 5.80173 20.2758 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <path d="M6 5.80173H10.7241C11.6906 5.80173 12.4741 6.58523 12.4741 7.55173V20.3707H4.25V7.55173C4.25 6.58523 5.0335 5.80173 6 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <line x1="6.3793" y1="10.6034" x2="10.3448" y2="10.6034" stroke="black"/>
                <line x1="20.6552" y1="10.6034" x2="24.6207" y2="10.6034" stroke="black"/>
                <line x1="6.3793" y1="12.9828" x2="10.3448" y2="12.9828" stroke="black"/>
                <line x1="20.6552" y1="12.9828" x2="24.6207" y2="12.9828" stroke="black"/>
                </g>             
              </svg>
            </Marker>

            <Marker coordinates={[428, 159]}>
            <svg
            variant="contained"
            onMouseEnter={() =>{setTooltipContent("Data Cener-5")}}
            onMouseLeave={() => {setTooltipContent("")}}
            width="31" height="12" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_13_658)">
                <path d="M13.1379 0.25H17.8621C18.8286 0.25 19.6121 1.0335 19.6121 2V20.3707H11.3879V2C11.3879 1.0335 12.1714 0.25 13.1379 0.25Z" fill="#FC981F" stroke="#7E7E7E" stroke-width="0.5"/>
                <line x1="13.5172" y1="4.25862" x2="17.4828" y2="4.25862" stroke="black"/>
                <line x1="13.5172" y1="7.43103" x2="17.4828" y2="7.43103" stroke="black"/>
                <line x1="13.5172" y1="10.6034" x2="17.4828" y2="10.6034" stroke="black"/>
                <path d="M20.2758 5.80173H25C25.9665 5.80173 26.75 6.58523 26.75 7.55173V20.3707H18.5258V7.55173C18.5258 6.58523 19.3094 5.80173 20.2758 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <path d="M6 5.80173H10.7241C11.6906 5.80173 12.4741 6.58523 12.4741 7.55173V20.3707H4.25V7.55173C4.25 6.58523 5.0335 5.80173 6 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <line x1="6.3793" y1="10.6034" x2="10.3448" y2="10.6034" stroke="black"/>
                <line x1="20.6552" y1="10.6034" x2="24.6207" y2="10.6034" stroke="black"/>
                <line x1="6.3793" y1="12.9828" x2="10.3448" y2="12.9828" stroke="black"/>
                <line x1="20.6552" y1="12.9828" x2="24.6207" y2="12.9828" stroke="black"/>
                </g>             
              </svg>
            </Marker>

            <Marker coordinates={[469, 152]}>
            <svg
            variant="contained"
            onMouseEnter={() =>{setTooltipContent("Data Cener-6")}}
            onMouseLeave={() => {setTooltipContent("")}}
            width="31" height="18" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_13_658)">
                <path d="M13.1379 0.25H17.8621C18.8286 0.25 19.6121 1.0335 19.6121 2V20.3707H11.3879V2C11.3879 1.0335 12.1714 0.25 13.1379 0.25Z" fill="#FC981F" stroke="#7E7E7E" stroke-width="0.5"/>
                <line x1="13.5172" y1="4.25862" x2="17.4828" y2="4.25862" stroke="black"/>
                <line x1="13.5172" y1="7.43103" x2="17.4828" y2="7.43103" stroke="black"/>
                <line x1="13.5172" y1="10.6034" x2="17.4828" y2="10.6034" stroke="black"/>
                <path d="M20.2758 5.80173H25C25.9665 5.80173 26.75 6.58523 26.75 7.55173V20.3707H18.5258V7.55173C18.5258 6.58523 19.3094 5.80173 20.2758 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <path d="M6 5.80173H10.7241C11.6906 5.80173 12.4741 6.58523 12.4741 7.55173V20.3707H4.25V7.55173C4.25 6.58523 5.0335 5.80173 6 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <line x1="6.3793" y1="10.6034" x2="10.3448" y2="10.6034" stroke="black"/>
                <line x1="20.6552" y1="10.6034" x2="24.6207" y2="10.6034" stroke="black"/>
                <line x1="6.3793" y1="12.9828" x2="10.3448" y2="12.9828" stroke="black"/>
                <line x1="20.6552" y1="12.9828" x2="24.6207" y2="12.9828" stroke="black"/>
                </g>               
              </svg>
            </Marker>

            <Marker coordinates={[474, 198]}>
            <svg
            variant="contained"
            onMouseEnter={() =>{setTooltipContent("Data Cener-7")}}
            onMouseLeave={() => {setTooltipContent("")}}
            width="31" height="18" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_13_658)">
                <path d="M13.1379 0.25H17.8621C18.8286 0.25 19.6121 1.0335 19.6121 2V20.3707H11.3879V2C11.3879 1.0335 12.1714 0.25 13.1379 0.25Z" fill="#FC981F" stroke="#7E7E7E" stroke-width="0.5"/>
                <line x1="13.5172" y1="4.25862" x2="17.4828" y2="4.25862" stroke="black"/>
                <line x1="13.5172" y1="7.43103" x2="17.4828" y2="7.43103" stroke="black"/>
                <line x1="13.5172" y1="10.6034" x2="17.4828" y2="10.6034" stroke="black"/>
                <path d="M20.2758 5.80173H25C25.9665 5.80173 26.75 6.58523 26.75 7.55173V20.3707H18.5258V7.55173C18.5258 6.58523 19.3094 5.80173 20.2758 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <path d="M6 5.80173H10.7241C11.6906 5.80173 12.4741 6.58523 12.4741 7.55173V20.3707H4.25V7.55173C4.25 6.58523 5.0335 5.80173 6 5.80173Z" fill="#FC981F" stroke="#9299B8" stroke-width="0.5"/>
                <line x1="6.3793" y1="10.6034" x2="10.3448" y2="10.6034" stroke="black"/>
                <line x1="20.6552" y1="10.6034" x2="24.6207" y2="10.6034" stroke="black"/>
                <line x1="6.3793" y1="12.9828" x2="10.3448" y2="12.9828" stroke="black"/>
                <line x1="20.6552" y1="12.9828" x2="24.6207" y2="12.9828" stroke="black"/>
                </g>               
              </svg>             
            </Marker>       
      </ComposableMap>   
  );
};

export default memo(MapChart);
