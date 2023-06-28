import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import rating from '../assets/images/rating.png';
import wheater from '../assets/images/wheater.png';
import todo from '../assets/images/todo.png';

function Project() {
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
    autoplaySpeed: 2000,
    slidesToShow: slidesToShow,
  };

  return (
    <div className="container project-section" id="projects">
      <div className="section-title">
        <h1>Projetos</h1>
      </div>
      <Slider {...settings}>
        <div className="weather-project">
          <Card
            title="Weather.io"
            desc="Uma aplicação de previsão do tempo. Planeje seu dia com confiança e esteja preparado para qualquer condição climática!"
            image={wheater}
            link="https://wheterio.netlify.app/"
            openInNewTab={true}
          />
        </div>
        <div className="rating-project">
          <Card
            title="Rating Component"
            desc="Um componente de avaliação que permite que os usuários compartilhem suas opiniões e classifiquem suas experiências."
            image={rating}
            link="https://hratingcomponent.netlify.app/"
            openInNewTab={true}
          />
        </div>
        <div className="todo-list-project">
          <Card
            title="to-do-list"
            desc="Organize sua vida com facilidade! A to-do list é a solução perfeita para você planejar, priorizar e conquistar todas as suas tarefas."
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
