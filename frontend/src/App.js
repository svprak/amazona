import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = ()=>{
    document.querySelector('.sidebar').classList.add('open')
  }
  const closeMenu =() =>{
    document.querySelector('.sidebar').classList.remove('open')
  }
  return (
    <div classNameName="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>&#9776;
        </button>
        <a href="index.html">Amazona</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="singin.html">Signin</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categoties</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>
        x
      </button>
      <ul>
        <li><a href="#">Shirt</a></li>
        <li><a href="#">Panths</a></li>
        <li><a href="#">Shoes</a></li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img
                className="product-image"
                src="./images/slim-shirt.jpg"
                alt="product"
              />
              <div className="product-name"><a href="#">Slim Shirt</a></div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">5 Stars (10 reviews)</div>
            </div>
          </li>
         
          <li>
            <div className="product">
              <img
                className="product-image"
                src="./images/slim-shirt.jpg"
                alt="product"
              />
              <div className="product-name"><a href="#">Slim Shirt</a></div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img
                className="product-image"
                src="./images/slim-shirt.jpg"
                alt="product"
              />
              <div className="product-name"><a href="#">Slim Shirt</a></div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img
                className="product-image"
                src="./images/slim-shirt.jpg"
                alt="product"
              />
              <div className="product-name"><a href="#">Slim Shirt</a></div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img
                className="product-image"
                src="./images/slim-shirt.jpg"
                alt="product"
              />
              <div className="product-name"><a href="#">Slim Shirt</a></div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img
                className="product-image"
                src="./images/slim-shirt.jpg"
                alt="product"
              />
              <div className="product-name"><a href="#">Slim Shirt</a></div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">5 Stars (10 reviews)</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer className="footer">All right reserved</footer>
  </div>
  );
}

export default App;
