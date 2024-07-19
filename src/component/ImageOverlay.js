import React from 'react'

const ImageOverlay = ({ image, onClose }) => {
    return (
      <div className="image-overlay">
        <div className="pop-img-container">
            <img src={image} alt="Document List" />
            <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default ImageOverlay