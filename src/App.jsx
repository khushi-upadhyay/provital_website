import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ImageCardAnimation from './components/ImageCardAnimation/ImageCardAnimation';
import Blog from './components/Blog/Blog';
import SearchComponent from './components/SearchComponent/SearchComponent';
import BlogList from './components/Blog/BlogList';
import HowItWorks from './HowItWorks/HowItWorks';
import BookAppointmentPage from './BookAppointmentPage/BookAppointmentPage';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

   
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const hrStyle = {
    border: '0',
    height: '30px', 
    background: 'linear-gradient(to right, #F0C971 0%, #E5688C 100%)',
    margin: windowWidth <= 768 ? '-100px 0 100px 0' : '-300px 0 100px 0', 
    transform: 'rotate(-3deg)',
    transformOrigin: 'right center', 
    position: 'relative',
  };

  
  if (windowWidth <= 768) {
    hrStyle.height = '25px'; 
  }

  return (
    <div>
      <Header />
      {/* <ImageCardAnimation /> */}
      {/* <Blog /> */}
      {/* <SearchComponent /> */}
      {/* <BlogList /> */}
      <BookAppointmentPage />
      <hr style={hrStyle} />
      <HowItWorks />
    </div>
  );
}

export default App;
