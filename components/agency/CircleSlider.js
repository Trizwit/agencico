import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function AgencyCircleSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Kate",
      occupation: "Photographer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "John Doe",
      occupation: "Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.",
      rating: 4,
    },
    {
      id: 3,
      name: "Anna Deynah",
      occupation: "Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
      rating: 4.5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval (milliseconds)
  };

  return (
    <MDBContainer className="my-5">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="text-center">
            <img
              src={testimonial.image}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px", margin: "0 auto" }}
            />
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">{testimonial.name}</h5>
                <p>{testimonial.occupation}</p>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  {testimonial.text}
                </p>
              </MDBCol>
            </MDBRow>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              {[...Array(Math.floor(testimonial.rating))].map((_, index) => (
                <li key={index}>
                  <MDBIcon fas icon="star" size="sm" />
                </li>
              ))}
              {testimonial.rating % 1 !== 0 && (
                <li>
                  <MDBIcon
                    fas
                    icon="star-half-alt"
                    size="sm"
                    className="text-warning"
                  />
                </li>
              )}
            </ul>
          </div>
        ))}
      </Slider>
    </MDBContainer>
  );
}
