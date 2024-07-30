import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';
import '../global.css'; // Assuming global styles are in global.css

const SocialMediaLinks = () => {
  const socialMedia = [
    { name: 'Twitter', url: 'https://x.com/regalmark', icon: <FaTwitter /> },
    { name: 'Instagram', url: 'https://instagram.com/regalmark', icon: <FaInstagram /> },
    { name: 'Facebook', url: 'https://facebook.com/regalmark', icon: <FaFacebook /> },
    // Add more social media as needed
  ];

  return (
    <div className="social-media-grid">
      {socialMedia.map((media, index) => (
        <a key={index} href={media.url} className="social-media-link" target="_blank" rel="noopener noreferrer">
          <div className="social-media-icon">{media.icon}</div>
          <span>{media.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;