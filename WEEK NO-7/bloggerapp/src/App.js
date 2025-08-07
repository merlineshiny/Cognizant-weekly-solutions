import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [showCourse, setShowCourse] = useState(true);
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);

  return (
    <div className="container">
      {showCourse && <CourseDetails />}
      {showBook ? <BookDetails /> : <p>Book details not available.</p>}
      {showBlog && <BlogDetails />}
    </div>
  );
}

export default App;

