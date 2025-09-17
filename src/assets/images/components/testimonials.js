import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

var testimonialsData = [
  {
    id: 1,
    name: "John",
    description:
      "I feel proud to be a part of this college, which has given me not just education, but also confidence and lifelong memories. Our teachers, friends, and every experience here have helped shape who we are today. I’ll always be grateful for the learning and values I gained in this journey.",
    designation: "BTech",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "I feel proud to be a part of this college, which has given me not just education, but also confidence and lifelong memories. Our teachers, friends, and every experience here have helped shape who we are today. I’ll always be grateful for the learning and values I gained in this journey.",
    designation: "Diploma",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "I feel proud to be a part of this college, which has given me not just education, but also confidence and lifelong memories. Our teachers, friends, and every experience here have helped shape who we are today. I’ll always be grateful for the learning and values I gained in this journey.",
    designation: "Mtech",
  },
];

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Testimonials</h2>
          <div className="subtitle">What Student says about us</div>
        </div>
        <Carousel data-bs-theme="dark">
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">
                      {testimonials.designation}
                    </span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
