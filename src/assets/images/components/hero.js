import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../img-hero1.jpg"),
    title: "College",
    description:
    "College is an educational institution that offers higher learning after high school.It provides specialized knowledge in various fields like science, engineering, arts, and commerce.College helps students develop critical thinking, communication, and problem-solving skills.",
      
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../img-hero2.jpg"),
    title: "Find Out Who You Are",
    description:
      "It offers opportunities for personal growth through extracurricular activities and social events.Students get to explore their interests and shape their future careers.College life encourages independence, responsibility, and time management.",
    link: "https://www.google.com",
  },
  {
    id: 3,
    image: require("../img-hero3.jpg"),
    title: "A Platform for Sucess",
    description:
      "It creates a platform for networking with peers, faculty, and professionals.College plays a vital role in preparing students for real-world challenges and success.",
    link: "https://www.google.com",
  },
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel data-bs-theme="dark">
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide" + hero.id}
              />
              <Carousel.Caption>
                <h5>{hero.title}</h5>
                <p >{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  learn more<i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
