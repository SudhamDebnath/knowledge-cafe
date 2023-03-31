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

  const [readTime, setReadTime] = useState("");

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

  return (
    <div className="App">
      <div className="header">
      <Header></Header>
      </div>
      <div className="main-container">
        <div className="container d-flex justify-content-between">
        <div className="blog-container col-md-8">
        <Blog handleReadTime={handleReadTime}></Blog>
        </div>
        <div className="side-cart col-md-4">
          <SideCart readTime={readTime}></SideCart>
        </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      <FontAwesomeIcon/>
    </div>
  )
}

export default App
