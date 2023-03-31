import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideCart from './components/SideCart/SideCart';
import Blog from './components/Blog/Blog';

function App() {
  const [count, setCount] = useState(0)

  const handleReadTime = (time) => {
    console.log(time);
  };

  return (
    <div className="App">
      <div className="header">
      <Header></Header>
      </div>
      <div className="main-container">
        <div className="container d-flex justify-content-between">
        <div className="blog-container col-md-7 card">
        <Blog handleReadTime={handleReadTime}></Blog>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart></SideCart>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
