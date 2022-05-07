import React, { useEffect, useRef } from "react";
import './Footer.css';

function Footer() {

  // use a copy event listener to replace obfuscated email address with actual email address
  const mailRef = useRef(null);

  useEffect(() => {
    const span = mailRef.current;
    // subscribe event
    span.addEventListener('copy', handleCopy);
    return () => {
      // unsubscribe event
      span.removeEventListener('copy', handleCopy);
    };
  }, []);

  const handleCopy = (e) => {
    e.preventDefault();

    const selection = document.getSelection();
    e.clipboardData.setData('text/plain', selection.toString().replace('[at]', '@'));
  }

  return (
    <div className='footer'>
      ©Sydney Sisco  | <span ref={mailRef} className='animated-border-bottom'>hello[at]sydneysisco.com</span>  | Vancouver, Canada
    </div>
  );
}

export default Footer;
