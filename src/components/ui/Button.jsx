import React from 'react';

const Button = ({ variant = 'filled', color = 'primary', onClick, children, href }) => {
  const baseClass = `btn btn-${variant} btn-${color}`;
  
  if (href) {
    if (href.startsWith('#')) {
      return <a href={href} className={baseClass} onClick={onClick}>{children}</a>;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass} onClick={onClick}>{children}</a>;
  }
  
  return (
    <button className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
