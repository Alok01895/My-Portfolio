import React from 'react'
import Content from "./Content"



export default function resume() {

   
const event=()=>{
  
  document.getElementById('Myresume').style.display='block';
  document.getElementById('forpop').style.backgroundColor='rgb(6, 2, 52)'
  document.getElementById('forpop').style.opacity='0.9'

}
const event2=()=>{
  document.getElementById('Myresume').style.display='none';
  document.getElementById('forpop').style.backgroundColor='transparent'
  document.getElementById('forpop').style.opacity='1'
}

  return (
   
    <div className='resume-content'>
           <div className="resume-box" >
             <Content/>
           </div>
           <div className="resume-box2" id='forpop'>
             <div className="box2">
                <div className="head-about"><div>Resume</div></div>
             </div>
             <div className="summary">
              <div className="resu" ><iframe  id='resume' title='resume' src="/Myimages/resume.pdf#toolbar=0" type='application/pdf' alt="Myself" /><div className="buttons"><button className='view-pdf' id='view' onClick={event} >View</button><button className='down-pdf' id='download'  ><a href="/Myimages/resume.pdf#toolbar=0" download>Download</a></button></div></div>
              <div className="sum-text"><div className="Summary-quote">"An ambitious,logical and organized 3rd year student pursuing B.tech in CSE with experience of two Internships.
                                 Proficient in Java,DSA and Web development, seeking to raise my engineering professionalism. Excellent teamworker
                                 with interpersonal and communication skills. Looking for the oppurtunities with which I can help myself grow so that I
                                 can start my carrer on a good note with a reputed comapny"</div></div>
             </div>

           </div>
           <div className="Myresume" id='Myresume'><iframe title='resume' src="/Myimages/resume.pdf#toolbar=0" type='application/pdf' alt="Myself" /><div className="cross" onClick={event2}>x</div></div>
    </div>
  )
}
