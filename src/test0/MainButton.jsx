import React from 'react';
import './MainButton.css';

const MainButton = ({ href, text }) => {
  return (
    <div className="shiny-wrapper">
      <a className="shiny-button" href={href}>
        {text}
      </a>
    </div>
  );
};

export default MainButton;