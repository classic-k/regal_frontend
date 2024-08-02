import React from 'react';
import logo from "@/public/logo.jpg"

const Card = () => {
  return (
    <div className="image-container">
      <img src={logo.src} alt="Image centered" className="centered-image"  />
    </div>
  );
};

export default Card;
