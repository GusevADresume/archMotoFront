import React from 'react';
import {useState, useEffect} from 'react';

export default function ScrollToTop() {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
      };
    
      const handleUpButton = () => {
        window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    

  return (
    <div onClick={handleUpButton} className={document.documentElement.scrollTop>900 ? 'ScrollToToop': 'Hidden'}>
      <p onClick={handleUpButton} className={document.documentElement.scrollTop>900 ?'TopArrow': 'Hidden'}>&#5171;</p>
    </div>
  )
}