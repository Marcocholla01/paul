import React from "react";
import "./testimonials.css";
import ava1 from "../../assets/avatar1.jpg";
import ava2 from "../../assets/avatar2.jpg";
import ava3 from "../../assets/avatar3.jpg";
import ava4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {
  const data = [
    {
      id: 1,
      avatar: ava1,
      name: "John Doe",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem magnam illum eligendi nostrum. Laboriosam provident, reprehenderit fugiat animi culpa corrupti voluptatum magnam temporibus quae eius soluta at debitis. Maiores, voluptatum!",
    },
    {
      id: 2,
      avatar: ava2,
      name: "John Doe",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem magnam illum eligendi nostrum. Laboriosam provident, reprehenderit fugiat animi culpa corrupti voluptatum magnam temporibus quae eius soluta at debitis. Maiores, voluptatum!",
    },
    {
      id: 3,
      avatar: ava3,
      name: "John Doe",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem magnam illum eligendi nostrum. Laboriosam provident, reprehenderit fugiat animi culpa corrupti voluptatum magnam temporibus quae eius soluta at debitis. Maiores, voluptatum!",
    },
    {
      id: 4,
      avatar: ava4,
      name: "John Doe",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem magnam illum eligendi nostrum. Laboriosam provident, reprehenderit fugiat animi culpa corrupti voluptatum magnam temporibus quae eius soluta at debitis. Maiores, voluptatum!",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={40}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, review, name }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}

export default Testimonials;
