import React, { useState, useEffect } from 'react';
import "./Resume/Resume.css"
// import "./Resume/fontello.css"

function Resume() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('https://rahmlad-aramide.github.io/resume')
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
      })
      .catch((error) => {
        console.error('Error fetching HTML content:', error);
      });
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
}

export default Resume;
