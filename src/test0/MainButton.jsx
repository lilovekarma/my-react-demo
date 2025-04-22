import React from 'react';
import './tet1.css'; // 等下會寫CSS檔

const MainButton = ({ href, text }) => {
  return (
    <a className="main-button" href={href}>
      <div className="glow"></div>
      <div className="stroke"></div>
      <div class="glow-strong"></div>
      <div className="fill"></div>
      <div className="text">{text}</div>
    </a>
  );
};

export default MainButton;
