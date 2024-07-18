import React from 'react';
import FlowerTopLeft from './FlowerTopLeft';
import FlowerBottomRight from './FlowerBottomRight';

const Card = ({ title, content }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 mb-6 w-80">
      <FlowerTopLeft />
      <FlowerBottomRight />
      <h3 className="relative text-2xl font-playfair text-navy-blue mb-4 z-10">{title}</h3>
      <p className="text-lato text-navy-blue">{content}</p>
    </div>
  );
};

export default Card;
