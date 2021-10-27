import Header from "../components/Header";
import Footer from "../components/Footer";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <>
      <Header />

      <div className="warna-bg">
        <Container>
          <Row className="align-items-center">
            <Col className="col-lg offset-1">
              <Image
                className="heroImage mt-5"
                src="../assets/Group 16136@2x@2x.png"
              />
            </Col>
            <Col className="col-lg">
              <p style={{ color: "#19345E" }} className="fs-1 mul">
                HI THERE !
              </p>
              <p style={{ color: "#19345E" }} className="fs-1 mul">
                We are an{" "}
                <span className="spanColor mul">Alterra Academy.</span>
              </p>
              <p className="mul" style={{ color: "#19345E" }}>
                Alterra Academy Full-stack Program is Coding Bootcamp which
                transform you being professional Software Engineer within 3
                months.
              </p>
              <Button
                className="btn btn-warning text-white me-5 col-lg-5 mx-auto"
                id="send"
              >
                <span>
                  <Image className="sendImage" src="../assets/sport-team.png" />
                </span>
                More About Team
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="shadow p-4 mb-5 bg-body rounded-pill text-center">
          <Row>
            <Col lg="4">
              <Image className="imageColor me-3" src="../assets/reward.png" />
              <span>4 Years Job</span>
              <br></br>
              <span>Experience</span>
            </Col>
            <Col lg="4">
              <Image className="imageColor me-3" src="../assets/project.png" />
              <span>500+ Projects</span>
              <br></br>
              <span>Completed</span>
            </Col>
            <Col lg="4">
              <Image className="imageColor me-3" src="../assets/support.png" />
              <span>Support</span>
              <br></br>
              <span>Online 24/7</span>
            </Col>
          </Row>
        </div>
      </Container>

      <div>
        <p
          id="about"
          className="fs-1 fw-bold mt-5 mb-5 d-flex justify-content-center"
        >
          <span className="garisSpan"></span>About
          <span className="garisSpan"></span>
        </p>

        <div className="bg-img-about">
          <div
            className="
              overlay
              px-5
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <div className="py-5 px-5 container">
              <h2 className="pt-5 fw-bolder text-center mb-3">
                Alterra is For Everyone
              </h2>
              <p className="pb-5 px-5 text-center text-white">
                As a brandnew Catalyst, we are aiming to become one of the best
                tech companies in Indonesia. Joining the tech industry in
                Indonesia since 2015 under the name of Sepulsa, we have evolved
                as a B2B tech company in 4 years providing various services such
                as Bill Payment Aggregator, Distribution Network, Promotion
                Platform, and Tech Academy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container className="container text-center">
        <p
          id="meet"
          className="fs-1 fw-bold mt-5 d-flex justify-content-center"
        >
          <span className="garisSpan"></span>Meet Our Team
          <span className="garisSpan"></span>
        </p>
        <p>Our Team Consists Only of the Best Talents</p>
      </Container>

      <Container className="d-flex justify-content-center">
        <Row>
          <Col lg="4">
            <div className="card m-4" style={{ width: "18rem" }}>
              <Image
                id="cardImg"
                src="../assets/shutterstock_796346011@2x.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">
                  <span>Aulia Rahmani</span>
                </p>
                <p className="text-center">UI UX Designer</p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="card m-4" style={{ width: "18rem" }}>
              <Image
                id="cardImg"
                src="../assets/shutterstock_796346011@2x.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">
                  <span>Aulia Rahmani</span>
                </p>
                <p className="text-center">UI UX Designer</p>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="card m-4" style={{ width: "18rem" }}>
              <Image
                id="cardImg"
                src="../assets/shutterstock_796346011@2x.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">
                  <span>Aulia Rahmani</span>
                </p>
                <p className="text-center">UI UX Designer</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <p
        id="latest"
        class="fs-1 fw-bold mt-5 mb-5 d-flex justify-content-center"
      >
        <span className="garisSpan"></span>Latest Blogs
        <span className="garisSpan"></span>
      </p>

      <Container className="mt-5 mb-5">
        <Row className="row row-cols-1 row-cols-md-3 g-4">
          <Col>
            <div className="card h-100">
              <Image src="../assets/img_article.jpg" class="card-img-top" />
              <div className="card-body">
                <h5 style={{ color: "#19345E" }} className="card-title">
                  CREATE A WORDPRESS THEME FROM SCRATCH
                </h5>
                <p>
                  Larry Stark 7 Januari{" "}
                  <span style={{ float: "right" }}>2020</span>
                </p>
                <p style={{ color: "#19345E" }} className="card-text">
                  Quick six blind smart out burst. Perfectly on furniture
                  dejection determine my depending an to. Add short water court
                  fat…
                </p>
                <Link className="d-flex justify-content-end" to="#" id="read">
                  Read More
                </Link>
              </div>
            </div>
          </Col>
          <div className="col">
            <div className="card h-100">
              <Image src="../assets/img_article.jpg" class="card-img-top" />
              <div className="card-body">
                <h5 style={{ color: "#19345E" }} className="card-title">
                  CREATE A WORDPRESS THEME FROM SCRATCH
                </h5>
                <p>
                  Larry Stark 7 Januari{" "}
                  <span style={{ float: "right" }}>2020</span>
                </p>
                <p style={{ color: "#19345E" }} className="card-text">
                  Quick six blind smart out burst. Perfectly on furniture
                  dejection determine my depending an to. Add short water court
                  fat…
                </p>
                <Link className="d-flex justify-content-end" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Image src="../assets/img_article.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 style={{ color: "#19345E" }} className="card-title">
                  CREATE A WORDPRESS THEME FROM SCRATCH
                </h5>
                <p>
                  Larry Stark 7 Januari{" "}
                  <span style={{ float: "right" }}>2020</span>
                </p>
                <p style={{ color: "#19345E" }} className="card-text">
                  Quick six blind smart out burst. Perfectly on furniture
                  dejection determine my depending an to. Add short water court
                  fat…
                </p>
                <Link className="d-flex justify-content-end" to="#">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
