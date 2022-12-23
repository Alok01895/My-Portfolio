import React from 'react'
import Content from "./Content"
export default function About() {
  return (
    <div className='about-content'>
      <div className="box">
           <Content/>
       </div>
       <div className="box3">
       <div className="box2">
        <div className="head-about"><div>About Me</div></div>
      </div>
         <div className="about-myself">
              <div className="heading">I'm <b>ALOK KUMAR THAKUR</b>,</div> <div className="skills2">Developer / Designer / Programmer</div> 
         </div>
         <div className="about-text">
               <div className="text-body">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat voluptates rerum autem debitis reprehenderit assumenda quasi ducimus! Modi ex doloremque inventore dolore voluptate sapiente iure sunt nulla quisquam perspiciatis! ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos non nobis, corrupti aut iusto magnam, aliquid at ipsa provident totam saepe rem corporis quibusdam voluptate? Magni atque nihil voluptates.</div>
         </div>
         <div className="box4">
         <div className="profession-box">
              <div className="skill-box">
                  <div className="work-exp">
                    <div className="p-info">
                      <div style={{fontSize:'3vw',textAlign:'center'}}><b>3+</b></div>
                      <div>Months experience</div>
                    </div>
                    <div>
                      <div style={{fontSize:'3vw'}}><b>Student</b></div>
                    <div className="grow" style={{textAlign:'center'}}>Growing/Exploring</div>
                    </div>
                  </div>
                  <div className="info2">
                  <div className="projects">
                    <div style={{fontSize:'3vw',textAlign:'center'}}> <b>4</b> </div>
                    <div>Projects done</div>
                  </div>
                   <div className="cgpa"><div style={{fontSize:'3vw',textAlign:'center'}}> <b>8.5+</b> </div><div>Average CGPA</div></div>
                  </div>
              </div>
              <div className="I-do">
                  <div style={{textAlign:'center',fontSize:'3vw'}}> <b>What I do?</b> </div>
                  <div className="i-do-imgs">
                    <div className="do-box1">
                      <div style={{width:'50%',padding:'10px'}}><img src="/Myimages/code.jpg" alt="" style={{width:'6vw',borderRadius:'50%',height:'6vw',border:'4px solid rgb(6, 2, 52)'}}/></div>
                      <div style={{width:'50%',padding:'10px'}}><img src="/Myimages/edit.jpg" alt="" style={{width:'6vw',borderRadius:'50%',height:'6vw',border:'4px solid rgb(6, 2, 52)'}}/></div>
                    </div>
                  
          
                    <div className="do-box1">
                      <div style={{width:'50%',padding:'10px'}}><img src="/Myimages/prrogram.jpg" alt="" style={{width:'6vw',borderRadius:'50%',height:'6vw',border:'4px solid rgb(6, 2, 52)'}}/></div>
                      <div style={{width:'50%',padding:'10px'}}><img src="/Myimages/uiux.jpg" alt="" style={{width:'6vw',borderRadius:'50%',height:'6vw',border:'4px solid rgb(6, 2, 52)'}}/></div>
                    </div>
                  </div>
              </div>
         </div>
         </div>
       </div>
       
      
    </div>
  )
}
