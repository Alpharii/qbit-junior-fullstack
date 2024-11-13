import React from 'react';

type WavyProps = {
  className?: string;
  fillColor?: string;
};

const Wavy: React.FC<WavyProps> = ({ className, fillColor }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={fillColor}
          fillOpacity="1"
          d="M0,0L60,26.7C120,53,240,107,360,122.7C480,139,600,117,720,128C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Wavy;
