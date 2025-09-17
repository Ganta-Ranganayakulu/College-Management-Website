import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const pricingData = [
  {
    
    id: 1,
    plan: "Diploma",
    price: "$349",
    features: [
      "CSE",
      "ECE",
      "EEE",
      "Mechanical",
      "Civil",
    ],
    link: "https://www.google.com",
  },
  {
    id: 2,
    plan: "BTech",
    price: "$450",
    features: [
      "CSE",
      "ECE",
      "EEE",
      "Mechanical",
      "Civil",
    ],
    link: "https://www.google.com",
  },
  
  {
    id: 3,
    plan: "MTECH",
    price: "$209",
    features: [
      "CSE",
      "ECE",
      "Civil",
      "Mechanical",
      "EEE",
    ],
    link: "https://www.google.com",
  },
];

export default function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>FEES &amp; Plans</h2>
          <div className="subtitle">Check our  FEE plans</div>
        </div>
        <Row>
          {pricingData.map((pricing) => {
            return (
              <Col sm={4} key={pricing.id}>
                <div className="heading">
                  <h3>{pricing.plan}</h3>
                  <span className="price">{pricing.price}</span>
                </div>
                <div className="content">
                  <ListGroup>
                    {pricing.features.map((features, index) => {
                      return (
                        <ListGroup.Item key={index}>{features}</ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </div>
                <div className="btn-holder">
                  <a href={pricing.link} className="btn btn-primary">
                    Join Now
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
