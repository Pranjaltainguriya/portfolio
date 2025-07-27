import React from 'react'
import skills from "../matrial/Data/skills.json"
import "./skills.css"
const Skills = () => {
  return (
    <div>
        <h1>My skills</h1>
      <div className="skills-container">


    {skills.map((data)=>{
return(
    <div className="skills-items"  
     data-aos="flip-up"
         data-aos-duration="1000"
         id='Skills'>
       <div className="item"
     >
        <img src={data.imageSrc} alt="" />
        <p>{data.title}</p>
       </div>
    </div>
)


    })}

      </div>
    </div>
  )
}

export default Skills
