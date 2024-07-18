import React from 'react';
import flower from '../../../public/sakura.png'
import Image from 'next/image'

const FlowerTopLeft = () => {
  return (
    <div className="absolute bottom-0 right-0 m-4">
      <Image src={flower} alt="Flower" width={50} height={50} />
    </div>
  );
};

export default FlowerTopLeft;
