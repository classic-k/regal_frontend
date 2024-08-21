import React from 'react';
import logo from "@/public/logo.jpg"
import { FaGlobe,FaLocationArrow,FaEnvelope, FaPhone} from 'react-icons/fa';
import Social from "./socials"


const Card = () => {

  const contacts = [
    
    
    { name: 'Phone', url: 'tel:+1234567890', icon: <FaPhone />, value: "+447960983074" },
     { name: 'Email', url: 'mailto:regalmark.info@gmail.com', icon: <FaEnvelope />, value: "regalmark.info@gmail.com" },
    { name: 'Location', url: '#', icon: <FaLocationArrow />, value: "London" },
    { name: 'Website', url: 'https://www.regal-mark.com', icon: <FaGlobe />, value: "www.regalmark.com" },
    
  ];
  return (
    <div className="card">
    <img className="profile-img" src={logo.src} alt="Profile Image" />
    <h2 className="name">REGAL MARK</h2>
    <p className="tagline">___Dress in style, walk with confidence___ </p>
    <div className="contact-info">

      {contacts.map((contact, index) => {
        return(
          <p key={index}>
<a href={contact.url} target="_blank" rel="noopener noreferrer" >
  {contact.icon} <span> {contact.value} </span>
  </a>
          </p>  
        ) 
      })}
    </div>
    <Social />
</div>

  );
};

export default Card;
