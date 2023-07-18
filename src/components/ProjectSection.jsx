import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import rating from '../assets/images/rating.png';
import wheater from '../assets/images/weatherio.png';
import todo from '../assets/images/todo.png';
import { useTranslation } from 'react-i18next';

function Project() {
  const { t } = useTranslation();
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: slidesToShow,
  };

  return (
    <div className="container project-section" id="projects">
      <div className="section-title">
        <h1>{t("Projects")}</h1>
      </div>
      <Slider {...settings}>
        <div className="weather-project">
          <Card
            title="Weather.io"
            desc={t("A weather forecast application. Plan your day with confidence and be prepared for any weather condition!")}
            image={wheater}
            link="https://hweatherio.netlify.app/"
            openInNewTab={true}
          />
        </div>
        <div className="rating-project">
          <Card
            title={t("Rating Component")}
            desc={t("A review component that allows users to share their opinions and rate their experiences.")}
            image={rating}
            link="https://hratingcomponent.netlify.app/"
            openInNewTab={true}
          />
        </div>
        <div className="todo-list-project">
          <Card
            title="to-do-list"
            desc={t("Organize your life with ease! A to-do list is the perfect solution for you to plan, prioritize and conquer all your tasks.")}
            image={todo}
            link="https://htodolsist.netlify.app/"
            openInNewTab={true}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Project;
