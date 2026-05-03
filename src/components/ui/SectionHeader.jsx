import React from 'react';
import './ui.css'; // Common UI styles

const SectionHeader = ({ preText, highlightText, theme = 'light' }) => {
  const renderRevealText = (text, className = '') => {
    return text.split(' ').map((word, i, arr) => (
      <React.Fragment key={i}>
        <span className="reveal-container">
          <span className={`reveal-text ${className}`}>
            {word}
          </span>
        </span>
        {i < arr.length - 1 && <span className="reveal-word-space" />}
      </React.Fragment>
    ));
  };

  return (
    <div className={`section-header text-center mb-12`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>
        {preText && renderRevealText(preText)}
        {preText && highlightText && <span className="reveal-word-space" />}
        {highlightText && (
          <span className={`highlight ${theme === 'dark' ? 'text-secondary' : 'text-primary'}`}>
            {renderRevealText(highlightText)}
          </span>
        )}
      </h2>
    </div>
  );
};

export default SectionHeader;
