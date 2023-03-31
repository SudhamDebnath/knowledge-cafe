import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideCart from './components/SideCart/SideCart';
import Blog from './components/Blog/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  const [readTime, setReadTime] = useState(0);
  const [bookmark, setBookmark] = useState(0);

  //Handle Spent Time On Read
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    }
    else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };


  //Handle Bookmarked Blogs
  const handleBookmark = (no) => {
    toast("Bookmark Added Successfully!");
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    if (previousBookmark) {
      const sum = previousBookmark + no;
      localStorage.setItem("bookmark", sum);
      setBookmark(sum);
    }
    else {
      localStorage.setItem("bookmark", no);
      setBookmark(no);
    }
   
  };
  

  return (
    <div className="App container">
      <div className="header">
      <Header></Header>
      </div>
      <div className="main-container row">
        <div className="d-flex justify-content-between">
        <div className="blog-container col-md-8 sm:col-md-1">
        <Blog handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Blog>
        </div>
        <div className="side-cart col-md-4 sm:col-md-1">
          <SideCart bookmark={bookmark}  readTime={readTime}></SideCart>
        </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <FontAwesomeIcon/>
    </div>
  )
}

export default App
