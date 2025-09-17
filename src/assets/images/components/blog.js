import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const blogData = [
  {
    id: 1,
    image: require("../blog1.jpg"),
    time: "15 Nov 2024",
    title: "Schloars",
    description:
      "Degree scholars are students pursuing undergraduate education with a focus on gaining in-depth knowledge in their chosen field. They are equipped with academic skills, critical thinking, and practical exposure, preparing them for professional careers or higher studies. These scholars play a vital role in contributing to academic excellence and innovation within the institution.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../blog2.jpg"),
    time: "10 Nov 2023",
    title: "Schloars",
    description:
      "Degree scholars are students pursuing undergraduate education with a focus on gaining in-depth knowledge in their chosen field. They are equipped with academic skills, critical thinking, and practical exposure, preparing them for professional careers or higher studies. These scholars play a vital role in contributing to academic excellence and innovation within the institution.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../blog3.jpg"),
    time: "07 Nov 2022",
    title: "Schloars",
    description:
      "Degree scholars are students pursuing undergraduate education with a focus on gaining in-depth knowledge in their chosen field. They are equipped with academic skills, critical thinking, and practical exposure, preparing them for professional careers or higher studies. These scholars play a vital role in contributing to academic excellence and innovation within the institution.",
    link: "https://www.twitter.com",
  },
];

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Events</h2>
          <div className="subtitle"> Events occured</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
