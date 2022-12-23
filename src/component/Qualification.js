
import React from 'react'
import Content from "./Content"
export default function Qualification() {
  return (
    <div className='quali-content'>
           <div className="quali-box">
             <Content/>
           </div>
           <div className="quali-box2">
             <div className="box2">
                <div className="head-about"><div>Qualification</div></div>
             </div>
             <div className="about-myquali">
                 <div className="about-myquali-box">
                    <div className="heading-quali">
                        <div className="education">
                            <div className="quali-title">
                                <div className='edu'><b>Education</b></div>
                                <div className="boards">
                                   <div className="tenth">
                                        <div style={{fontSize:'3vw'}}><b>86%</b></div>
                                        <div style={{width:'55%',fontSize:'0.8vw',textAlign:'center'}}>National English School,ICSE Board,High School-Kolkata <div style={{textAlign:'center'}}>Year 2017</div></div>
                                   </div>
                                   <div className="twelth">
                                      <div style={{fontSize:'3vw'}}><b>84%</b></div>
                                      <div style={{width:'55%',fontSize:'0.8vw',textAlign:'center'}}>National English School,ISC Board,Intermediate-Kolkata <div style={{textAlign:'center'}}>Year 2019</div></div>
                                    </div>
                                </div>
                                <div className="college">
                                      <div style={{fontSize:'3vw'}}><b>8.5+</b></div>
                                      <div style={{width:'27.5%',fontSize:'0.8vw',textAlign:'center'}}>Average CGPA, Currently in 3rd year pursuing B.tech in CSE  <div style={{textAlign:'center'}}>Year 2020-2024</div></div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="quali-skills">
                              <div className='Quali-Skill-head'><b>Skills</b></div>
                              <div className="list">
                               
                                 <li>Java/C/C++</li>
                                 
                                 <li>Data Structure and Algorithms/Problem Solving</li>
                                 
                                 
                                 <li>UI/UX Design</li>
                                 <li className='li1'>Communication</li>
                                 <li className='li2'>Web Development (Scratch-Frameworks-Libraries)</li>
                               
                              </div>
                        </div>
                    </div>
                 </div> 
             </div>
        </div>
    </div>
  )
}
