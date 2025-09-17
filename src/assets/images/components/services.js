import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Computer Science and Engineering (CSE)",
    description:
      "Focuses on software development, algorithms, and computing systems.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Electronics and Communication Engineering (ECE)",
    description:
      "Deals with electronic circuits, devices, and communication technologies.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "Electrical and Electronics Engineering (EEE)",
    description:
      "Involves the study of electrical systems, machines, and power systems.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Mechanical Engineering",
    description:
      " Covers design, analysis, and manufacturing of mechanical systems and machines.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Civil Engineering",
    description:
      " Focuses on construction, infrastructure development, and structural design.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Student Desk",
    description:
      "All the details and information contact  the student desk",
  },
];

export default function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Courses</h2>
          <div className="subtitle"> Courses we provide </div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={4} className="holder" key={services.id}>
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.titlel}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
