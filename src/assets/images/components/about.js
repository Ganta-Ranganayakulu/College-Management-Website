import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../img1.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function AppAbout() {

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About us</h2>
          <div className="subtitle"> learn more about us </div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              College management plays a vital role in ensuring the smooth operation of both academic and administrative activities. It handles admissions, maintains student records, manages infrastructure, and coordinates between departments to create an organized and effective learning environment. Good college management supports academic excellence, discipline, and overall institutional growth.
            </p>
            <p>
             An efficient college management system enhances the overall student experience by streamlining day-to-day operations such as attendance, examinations, and fee collection. It also helps faculty and staff perform their duties effectively through proper planning and communication. By adopting digital tools and modern practices, college management can ensure transparency, accountability, and continuous improvement in the institution.
            </p>
            <p>
              Our college is a place of learning, growth, and innovation, dedicated to shaping the future of its students. With a strong focus on academic excellence, it offers a wide range of courses supported by experienced faculty and modern facilities. The campus provides a vibrant environment that encourages creativity, discipline, and all-round development. Through various academic and extracurricular activities, the college empowers students to become skilled, confident, and responsible individuals ready to face global challenges.
            </p>
            <p>
              College sports play a vital role in promoting physical fitness, teamwork, and discipline among students. Our college encourages active participation in a variety of sports like cricket, football, volleyball, and athletics. With well-maintained sports facilities and regular competitions, students get the opportunity to showcase their talent and build a spirit of healthy competition. Sports not only help in maintaining a balanced lifestyle but also instill leadership qualities and a sense of unity among participants.
            </p>
            <p>
              Our college has a rich history of academic excellence and holistic development since its establishment. Founded with the vision of providing quality education to aspiring students, it has grown over the years into a respected institution. From humble beginnings, the college has expanded its infrastructure, introduced new courses, and embraced modern teaching methods. It has produced numerous successful alumni who have made their mark in various fields. The legacy of dedication, discipline, and continuous improvement continues to shape the college’s journey forward.
            </p>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
