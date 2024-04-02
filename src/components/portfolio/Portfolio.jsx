import React from "react";
import "./portfolio.css";

import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

function Portfolio() {
  // Array map function
  const data = [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/Marcocholla01/e-Shop/main/client/src/assets/images/shopScreenShots/homepage.png",
      tittle: "ShopO E-Commerce Platform",
      alt: "Shop0 market image",
      desc: "",
      code: "https://github.com/Marcocholla01/e-Shop",
      demo: "https://shop0-bice.vercel.app/",
    },
    {
      id: 2,
      image: img2,
      tittle: "Employee management System",
      alt: "Employee management System Image",
      desc: "",
      code: "https://github.com/Marcocholla01",
      demo: "https://github.com/Marcocholla01",
    },
    {
      id: 3,
      image: img3,
      tittle: "Kobi Estate",
      alt: "Kobi Estate image",
      desc: "",
      code: "https://github.com/Marcocholla01/Real-Estate-Mern",
      demo: "https://github.com/Marcocholla01",
    },
    {
      id: 4,
      image: img4,
      tittle: "BookMe",
      alt: "BookMe Image",
      desc: "",
      code: "https://github.com/Marcocholla01",
      demo: "https://github.com/Marcocholla01",
    },
    {
      id: 5,
      image: img5,
      tittle: "Reastuarant Management System",
      alt: "Reastuarant Image",
      desc: "",
      code: "https://github.com/Marcocholla01",
      demo: "https://github.com/Marcocholla01",
    },
    {
      id: 6,
      image: img6,
      tittle: "Todo App",
      alt: "Todo App Image",
      desc: "",
      code: "https://github.com/Marcocholla01",
      demo: "https://github.com/Marcocholla01",
    },
  ];

  return (
    <section id="portfoli">
      <h5>Mr Recent work</h5>
      <h2>Porfolio</h2>
      <div className="container portfolio__container">
        {data.map(function ({ id, image, tittle, alt, demo, code, desc }) {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={alt} />
              </div>

              <h3>{tittle}</h3>
              <div className="portfilo__item-cta">
                <a href={code} className="btn" target="_blank" rel="noreferrer">
                  View Code
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
