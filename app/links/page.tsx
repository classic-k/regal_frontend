import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp, FaTiktok} from 'react-icons/fa';


const SocialMediaLinks = () => {
  const socialMedia = [
    
    
    { name: 'Instagram', url: 'https://www.instagram.com/regalmark_official?igsh=YnJjN3I3Yjhkenl4 ', icon: <FaInstagram /> },
     { name: 'WhatsApp', url: 'https://api.whatsapp.com/send?phone=https://wa.me/qr/ugpwawux4q3la1', icon: <FaWhatsapp /> },
    { name: 'Email', url: 'mailto:regalmark.info@gmail.com', icon: <FaEnvelope /> },
    { name: 'TikTok', url: 'https://www.tiktok.com/@regalmarkofficial?_t=8oTfDH6rEQg&_r=1', icon: <FaTiktok /> },
    
  ];
  return (
    <div className="social-media-grid">
 
      {socialMedia.map((media, index) => {
        if(media.name === "Email")
        {
          return (
          
          <a key={index} href={media.url} className="social-media-link" target="_blank" rel="noopener noreferrer">
            
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
