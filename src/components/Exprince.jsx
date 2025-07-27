import React from 'react'
import expreince from "../matrial/Data/experience.json"
import "./exprince.css"
const Exprince = () => {
  return (
    <div>
      <h1> Projects </h1>

      <div className="exprince-container" id='exprince'>
       {expreince.map((data)=>{
          return(
            
         <div className="ex-ietems" 
         data-aos="zoom-in"
         data-aos-duration="1000">
          <div className="left">
            <img src={data.imageSrc} alt="" />
          </div>
           <div className="right">
              <div key={expreince.id}>
              <h2>{ data.role}</h2>
            <h4>{data.startDate}</h4> <h4>{data.endDate}</h4><h4>{data.location}</h4>
            </div>
          </div>
         </div>
          )
        })}

      </div>
    </div>
  )
}

export default Exprince
