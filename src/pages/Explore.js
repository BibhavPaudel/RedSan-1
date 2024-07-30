import React from "react";
import "./stylr.css";
import amayra from "./images/Explore/amayra.jpg";
import liberty from "./images/Explore/Liberty.jpg";
import am2 from "./images/Explore/Am2.jpg";
import canrtabil from "./images/Explore/Canrtabil.jpg";
import dehra from "./images/Explore/dehra.jpeg";
import dehra2 from "./images/Explore/dehra2.jpeg";
import dehra3 from "./images/Explore/dehra3.jpeg";
import dehra4 from "./images/Explore/dehra4.jpeg";
import img5 from "./images/Explore/img5.jpeg";
import img6 from "./images/Explore/img6.jpeg";
import img7 from "./images/Explore/img7.jpeg";
import img8 from "./images/Explore/img8.jpeg";
import pin from "./images/Explore/pin.png";
import sneakers from "./images/Explore/sneakers.jpg";


function Explore() {
  return (
    <>
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="stylr.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body>
    <header class="head">
      <nav class="navbar">
        <p>Explore</p>
        <p>Kharar, India</p>
      </nav>
      <nav class="navbar2">
        <div class="nav-content">
          <h1>Kharar</h1>
          <img src="pin.png" alt="" class="pin" />
        </div>
      {/* <div class="search">
                    <div class="serch1">
                        <i class="fa-solid fa-magnifying-glass" id="glass"></i>
                        <input placeholder="Search" class="search2"/>
                        
                    </div>
                    <div class="menuicon">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>  */}
      </nav>
      <nav class="options">
        <a href="#" class="link"><p>Trending</p></a>
        <a href="#" class="link"><p>Cafe</p></a>
        <a href="#" class="link"><p>Tourism</p></a>
        <a href="#" class="link"><p>Gym</p></a>
        <a href="#" class="link"><p>Hotels</p></a>
      </nav>
    </header>
    <section>
      <div class="text">
        <h2>Popular</h2>
        <a href="#"> <p>See all</p></a>
      </div>
      <div class="images">
        <div class="box-img" style={{backgroundImage: `url(${amayra})`}}>
          <p class="about">Amayra Emporio</p>

          <div class="rating">
            <i class="fa-solid fa-star" id="star"></i>
            <p>4.1</p>
          </div>
          <i class="fa-solid fa-heart" id="heart"></i>
        </div>

        <div
          class="box-img"
          id="img"
          style={{backgroundImage: `url(${liberty})`}}
        >
          <p class="about">Liberty</p>

          <div class="rating">
            <i class="fa-solid fa-star" id="star"></i>
            <p>4.1</p>
          </div>
          <i class="fa-solid fa-heart" id="heart"></i>
        </div>
        <div class="box-img" id="img" style={{backgroundImage: `url(${am2})`}}>
          <p class="about">Nirvana</p>

          <div class="rating">
            <i class="fa-solid fa-star" id="star"></i>
            <p>4.1</p>
          </div>
          <i class="fa-solid fa-heart" id="heart"></i>
        </div>
        <div
          class="box-img"
          id="img"
          style={{backgroundImage: `url(${dehra4})`}}
        >
          <p class="about">Sahastradhara</p>

          <div class="rating">
            <i class="fa-solid fa-star" id="star"></i>
            <p>4.1</p>
          </div>
          <i class="fa-solid fa-heart" id="heart"></i>
        </div>
      </div>
      <div class="container">
        <h2>Recommended</h2>
      </div>
      <div class="nextimg">
        <div class="box-img" style={{backgroundImage: `url(${sneakers})`}}>
          <p class="about">Sneakers</p>

          <div class="rating">
            <i class="fa-solid fa-star" id="star"></i>
            <p>4.1</p>
          </div>
          <i class="fa-solid fa-heart" id="heart"></i>
        </div>
        <div
          class="box-img"
          id="img"
          style={{backgroundImage: `url(${canrtabil})`}}
        >
          <p class="about">Cantabil</p>

          <div class="rating">
            <i class="fa-solid fa-star" id="star"></i>
            <p>4.1</p>
          </div>
          <i class="fa-solid fa-heart" id="heart"></i>
        </div>
        <div
          class="box-img"
          id="img"
          style={{backgroundImage: `url(${img7})`}}
        >
          <p class="about">IT Park</p>

          <div class="rating">
            <i class="fa-solid fa-star" id="star"></i>
            <p>4.1</p>
          </div>
          <i class="fa-solid fa-heart" id="heart"></i>
        </div>
        <div
          class="box-img"
          id="img"
          style={{backgroundImage: `url(${img8})`}}
        >
          <p class="about">Buddha Temple</p>

          <div class="rating">
            <i class="fa-solid fa-star" id="star"></i>
            <p>4.1</p>
          </div>
          <i class="fa-solid fa-heart" id="heart"></i>
        </div>
      </div>
    </section>
  </body>
    </>
    
  );
}

export default Explore;
