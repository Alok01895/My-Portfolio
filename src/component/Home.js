import {Link} from 'react-router-dom';
import React from 'react';
import './nav.css'



export default function Home() {
 
  return (
    <div className='body'>
      <div className="intro">
        <div className="hi">
            Hi There!
        </div>
        <div className="name">
            I'M ALOK
        </div>
        <div className="skills">
            <div>Developer</div>
            <div>Programmer</div>
            <div>Designer</div>
        </div>
        <div className="text">
             <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis repellendus a voluptatem amet soluta libero, error corporis! Obcaecati optio, officiis tempora nihil tenetur itaque, consectetur vel alias perferendis sunt ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, iste consequuntur itaque eaque illum quisquam doloribus officiis sint aperiam accusantium tempore expedita nemo eligendi harum aliquid at quos labore dignissimos.</div>
        </div>
        <div className="know-more"><Link to="/About" id='aboutme' style={{textDecoration:'none'}} > More About Me</Link> </div>
      </div>
      <div className="mypic">
        <img src="/Myimages/myPic.jpeg" alt="Myself" />
      </div>
    </div>
  )
}

