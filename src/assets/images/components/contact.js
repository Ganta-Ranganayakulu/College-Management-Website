import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message here..."
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/place/Kakinada,+Andhra+Pradesh/@16.9767645,82.1649215,12z/data=!3m1!4b1!4m6!3m5!1s0x3a3827ddaf59b4f7:0x92f8ddb9c89a4803!8m2!3d16.9890648!4d82.2474648!16zL20vMDVuNTY4?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              college45##@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              897745###
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              AndhraPradesh, India
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
