import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const teamsData = [
  {
    id: 1,
    image: require("../team1.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Gabriel Hart",
    designation: "Principal",
    description:
      "Our Principal is the guiding force of our college, leading with dedication, discipline, and a vision for excellence. With vast experience and strong leadership, they ensure smooth academic and administrative functioning. Always supportive and approachable, the Principal encourages both students and staff to strive for success and maintain the values of the institution.",
  },
  {
    id: 2,
    image: require("../team2.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Antony",
    designation: "Academic Dean",
    description:
      "Our Dean is the guiding force of our college, leading with dedication, discipline, and a vision for excellence. With vast experience and strong leadership, they ensure smooth academic and administrative functioning. Always supportive and approachable, the Principal encourages both students and staff to strive for success and maintain the values of the institution.",
  },
  {
    id: 3,
    image: require("../team3.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Nicholas Perry",
    designation: "Head of the Department",
    description:
      "Our HOD is the guiding force of our college, leading with dedication, discipline, and a vision for excellence. With vast experience and strong leadership, they ensure smooth academic and administrative functioning. Always supportive and approachable, the Principal encourages both students and staff to strive for success and maintain the values of the institution.",
  },
  {
    id: 4,
    image: require("../team4.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "CSE Faculty",
    description:
      "Our Faculty is the guiding force of our college, leading with dedication, discipline, and a vision for excellence. With vast experience and strong leadership, they ensure smooth academic and administrative functioning. Always supportive and approachable, the Principal encourages both students and staff to strive for success and maintain the values of the institution.",
  },
  {
    id: 5,
    image: require("../team5.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sophia Pitt",
    designation: "CSE Lab Faculty",
    description:
      "Our Faculty is the guiding force of our college, leading with dedication, discipline, and a vision for excellence. With vast experience and strong leadership, they ensure smooth academic and administrative functioning. Always supportive and approachable, the Principal encourages both students and staff to strive for success and maintain the values of the institution.",
  },
  {
    id: 6,
    image: require("../team6.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Taylor Lopez",
    designation: "ECE Faculty",
    description:
      "Our Faculty is the guiding force of our college, leading with dedication, discipline, and a vision for excellence. With vast experience and strong leadership, they ensure smooth academic and administrative functioning. Always supportive and approachable, the Principal encourages both students and staff to strive for success and maintain the values of the institution.",
  },
  {
    id: 7,
    image: require("../team7.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ryan Giggs",
    designation: "Accountant",
    description:
      "Our Faculty is the guiding force of our college, leading with dedication, discipline, and a vision for excellence. With vast experience and strong leadership, they ensure smooth academic and administrative functioning. Always supportive and approachable, the Principal encourages both students and staff to strive for success and maintain the values of the institution.",
  },
  {
    id: 8,
    image: require("../team8.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Smith",
    designation: "Exam Cell",
    description:
      "Our Faculty is the guiding force of our college, leading with dedication, discipline, and a vision for excellence. With vast experience and strong leadership, they ensure smooth academic and administrative functioning. Always supportive and approachable, the Principal encourages both students and staff to strive for success and maintain the values of the institution.",
  },
];

export default function AppTeam() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>College Faculty</h2>
          <div className="subtitle">Faculty</div>
        </div>

        <Row>
          {teamsData.map((teams) => {
            return (
              <Col sm={3} key={teams.id}>
                <div className="image">
                  <Image src={teams.image} />

                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={teams.fbLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.twitterLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.linkedinLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <h3>{teams.name}</h3>
                  <span className="designation">{teams.designation}</span>
                  <p>{teams.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
