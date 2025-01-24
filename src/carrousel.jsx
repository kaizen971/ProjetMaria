import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={styles.nextArrow} onClick={onClick}>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div style={styles.prevArrow} onClick={onClick}>
      <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
};

const Carousel = () => {
  const parcours = [
    {
      date: "2023",
      title: "MBA Expert Marketing Digital",
      description: "Formation en alternance chez Com O Carré - Infiniment Plus. Spécialisation en stratégie digitale et gestion de projets marketing.",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      date: "2022",
      title: "Chef de Projet Digital",
      description: "Gestion de campagnes publicitaires et développement de stratégies marketing pour divers clients.",
      icon: "fa-solid fa-briefcase"
    },
    {
      date: "2021",
      title: "Bachelor Marketing Digital",
      description: "Formation en marketing digital avec focus sur l'analyse de données et la création de contenu.",
      icon: "fa-solid fa-chart-line"
    },
    {
      date: "2020",
      title: "Stage Communication Digitale",
      description: "Premier pas dans le monde professionnel avec la gestion de réseaux sociaux et création de contenu.",
      icon: "fa-solid fa-laptop-code"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging: (i) => (
      <div style={styles.dot}>
        <i className={parcours[i].icon}></i>
      </div>
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };



  return (
    <div style={styles.carouselContainer}>
      <Slider {...settings}>
        {parcours.map((item, index) => (
          <div key={index} style={styles.slideWrapper}>
            <div style={styles.card}>
              <div style={styles.dateBox}>
                <span style={styles.date}>{item.date}</span>
              </div>
              <div style={styles.content}>
                <div style={styles.iconWrapper}>
                  <i className={`${item.icon}`} style={styles.icon}></i>
                </div>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  carouselContainer: {
    padding: "60px 40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  slideWrapper: {
    padding: "30px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
    border: "1px solid #a9dff8",
    position: "relative",
    minHeight: "350px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    },
  },
  dateBox: {
    backgroundColor: "#f0b9cb",
    padding: "15px",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    borderBottom: "3px solid rgba(0,0,0,0.1)",
  },
  content: {
    padding: "35px",
    textAlign: "center",
  },
  iconWrapper: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "rgba(240,185,203,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "rotate(360deg)",
    },
  },
  icon: {
    fontSize: "2.2em",
    color: "#f0b9cb",
  },
  title: {
    color: "#333",
    marginBottom: "20px",
    fontSize: "1.6em",
    fontWeight: "600",
  },
  description: {
    color: "#666",
    lineHeight: "1.8",
    fontSize: "1.1em",
  },
  dot: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor: "#f0b9cb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "14px",
    margin: "15px",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "#e29cb2",
    },
  },
  date: {
    fontSize: "1.3em",
    letterSpacing: "1px",
  },
  nextArrow: {
    position: "absolute",
    right: "-50px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    backgroundColor: "#f0b9cb",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e29cb2",
      transform: "translateY(-50%) scale(1.1)",
    },
  },
  prevArrow: {
    position: "absolute",
    left: "-50px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    backgroundColor: "#f0b9cb",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e29cb2",
      transform: "translateY(-50%) scale(1.1)",
    },
  },
};

export default Carousel;
