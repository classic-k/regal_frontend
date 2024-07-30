import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp} from 'react-icons/fa';
//import '../global.css'; // Assuming global styles are in global.css

const SocialMediaLinks = () => {
  const socialMedia = [
    { name: 'Twitter', url: 'https://x.com/regalmark', icon: <FaTwitter /> },
    { name: 'Instagram', url: 'https://instagram.com/regalmark', icon: <FaInstagram /> },
    { name: 'Facebook', url: 'https://facebook.com/regalmark', icon: <FaFacebook /> },
     { name: 'WhatApss', url: 'https://api.whatsapp.com/send?phone=https://wa.me/qr/ugpwawux4q3la1', icon: <FaWhatsapp /> },
    { name: 'Email', url: 'mailto:olanrewaju.atobatele360@gmail.com', icon: <FaEnvelope /> },
    // Add more social media as needed
  ];

  return (
    <div className="social-media-grid">
    
      {socialMedia.map((media, index) => {
        if(media.name === "Email")
        {
          return (
          
          <a key={index} href="#" className="social-media-link" target="_blank" rel="noopener noreferrer">
            
            <div className="social-media-icon">{media.icon}</div>
            <span>{media.name} </span>
          </a>)
        }
        else {
      return  (
        <a key={index} href={media.url} className="social-media-link" target="_blank" rel="noopener noreferrer">
          <div className="social-media-icon">{media.icon}</div>
          <span>{media.name}</span>
        </a>
      )
}})}
    </div>
  );
};

export default SocialMediaLinks;