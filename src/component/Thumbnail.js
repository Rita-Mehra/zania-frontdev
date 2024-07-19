import React from 'react';

const Thumbnail = ({ src, alt, loading }) => {
  return (
    <img className="popver-img" src={loading? 'images/pinner.gif' : src} alt={alt} />
  );
};

export default Thumbnail;