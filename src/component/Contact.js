import emailjs from 'emailjs-com'
import React from 'react'
import Content from "./Content"
export default function About() {
    
   function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm("service_ru0xf48","template_xa41jsf",e.target,"hyJkikQhdxWwV7UGO").then(res=>{
      alert("Message sent Succesfully!")
    }).catch(err=>console.log(err))
    document.getElementById('get-in-touch').reset()
   }
  
  return (
    <div className='about-content'>
      <div className="box">
           <Content/>
      </div>
       <div className="box3">
          <div className="box2">
             <div className="head-about"><div>Contact</div></div>
          </div>
          <div className="contact-page">
             <div className="contactbox">
               <div className="contactbox2">
                  <div className="name-con"> <i class="fa-solid fa-user"> </i>Alok Kumar Thakur</div>
                  <div className="email-box"><i class="fa-solid fa-envelope"></i>alok01895@gmail.com</div>
                  <div className="phone"><i class="fa-solid fa-phone"></i>7980131233</div>
                  <div className="address-con"><i class="fa-solid fa-address-book"></i>Nilmatha,Lucknow-226002</div>
                  <div className="social">
                        <div className="insta"> <a href="https://www.instagram.com/_alokkr/"><img src="/Myimages/ins.png" alt="" /></a></div>
                        <div className="facebook"><a href="https://www.facebook.com/alok.kr.902604"><img src="/Myimages/face.webp" alt="" /></a></div>
                        <div className="github"><a href="https://github.com/Alok01895"><img src="/Myimages/github.webp" alt="" /></a></div>
                        
                  </div>
               </div>
               <form action='submit' id='get-in-touch' onSubmit={sendEmail}>
                 <div className="touch-title"><div><b>Get In Touch!</b></div></div>
                 <div className="touch-name"><label htmlFor="name">Name:</label><input type="text" name='Name' placeholder='Enter your name' required/></div>
                 <div className="touch-email"><label htmlFor="Email">Email:</label><input type="email" name='user_email' placeholder='example@gmail.com' required/></div>
                 <div className="touch-phone"><label htmlFor="Phone Number">Phone Number:</label><input type="tel" name='number' placeholder='Enter your number' required/></div>
                 <div className="touch-message"><textarea name="message"  id="text-mssg" cols="50" rows="4" placeholder='Enter your Message' required></textarea></div>
                 <div className="send"><button>Send</button></div>
               </form>
               
             </div>
          </div>


        </div>
       
      
    </div>
  )
}
