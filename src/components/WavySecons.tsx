import React from 'react';

type WavyProps = {
  className?: string;
  fillColor?: string;
};

const WavySecond: React.FC<WavyProps> = ({ className, fillColor }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={fillColor}
          fillOpacity="1"
          d="M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,192C672,160,768,96,864,101.3C960,107,1056,181,1152,218.7C1248,256,1344,256,1392,256L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default WavySecond;
