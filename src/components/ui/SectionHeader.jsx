import React from 'react';
import './ui.css'; // Common UI styles

const SectionHeader = ({ preText, highlightText, theme = 'light' }) => {
  return (
    <div className={`section-header text-center mb-12`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>
        {preText} <span className={`highlight ${theme === 'dark' ? 'text-secondary' : 'text-primary'}`}>{highlightText}</span>
      </h2>
    </div>
  );
};

export default SectionHeader;
