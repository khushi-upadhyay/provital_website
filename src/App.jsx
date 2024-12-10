import React from 'react';
import Header from './components/Header/Header';
import ImageCardAnimation from './components/ImageCardAnimation/ImageCardAnimation';
import Blog from './components/Blog/Blog';
import SearchComponent from './components/SearchComponent/SearchComponent';
import BlogList from './components/Blog/BlogList';
import HowItWorks from './HowItWorks/HowItWorks';
import BookAppointmentPage from './BookAppointmentPage/BookAppointmentPage';
function App() {
  return (
    <div>
      <Header />
      {/* <ImageCardAnimation /> */}
      {/* <Blog /> */}
      {/* < SearchComponent/> */}
      {/* <BlogList />   */}
      <BookAppointmentPage />
      <HowItWorks />
    </div>
  );
}

export default App;
