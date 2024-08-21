import {FaInstagram, FaWhatsapp, FaTiktok} from 'react-icons/fa';


const Social = () => {

    const socialMedia = [
    
    
        { name: 'Instagram', url: 'https://www.instagram.com/regalmark_official?igsh=YnJjN3I3Yjhkenl4 ', icon: <FaInstagram /> },
         { name: 'WhatsApp', url: 'https://wa.me/+447960983074', icon: <FaWhatsapp /> },
        { name: 'TikTok', url: 'https://www.tiktok.com/@regalmarkofficial?_t=8oTfDH6rEQg&_r=1', icon: <FaTiktok /> },
        
      ];
  return (
    
    <div className="social-icons">
        {socialMedia.map((media, index) => {
        
      return  (

        <a key={index} href={media.url} target="_blank" rel="noopener noreferrer">
          {media.icon}
        </a>
      )
})}
    </div>


  );
};

export default Social;
