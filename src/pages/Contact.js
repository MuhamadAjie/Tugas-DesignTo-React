import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import "../css/Contact.css";

function Contact() {
  return (
    <>
      <Header />

      <Container style={{ marginBottom: "100px" }}>
        <p
          id="get-in"
          className="fs-1 fw-bold mt-5 mb-5 d-flex justify-content-center"
        >
          <span className="garisSpan"></span>Get In Touch
          <span className="garisSpan"></span>
        </p>

        <Row className="align-items-start">
          <Col lg="4">
            <div className="mb-3">
              <span>Phone</span>
              <br></br>
              <Image className="m-2" src="../assets/phone.png" alt="phone" />
              <span>+62 21 909 7890</span>
            </div>
            <div className="mb-3">
              <span>Email</span>
              <br></br>
              <Image className="m-2" src="../assets/envelope.png" alt="email" />
              <span>info@alterra.id</span>
            </div>
            <div className="mb-3">
              <span>Website</span>
              <br></br>
              <Image
                className="m-2"
                src="../assets/browser.png"
                alt="website"
              />
              <span>https://www.alterra.id/</span>
            </div>

            <span>Social Profile</span>
            <div id="social-profile" className="mb-5">
              <Image
                className="m-1"
                src="../assets/facebook.png"
                alt="facebook"
              />
              <Image
                className="m-1"
                src="../assets/twitter.png"
                alt="twitter"
              />
              <Image
                className="m-1"
                src="../assets/instagram.png"
                alt="instagram"
              />
              <Image
                className="m-1"
                src="../assets/linkedin.png"
                alt="linkedin"
              />
            </div>
          </Col>
          <Col lg="8">
            <p className="mb-4">
              If you have any suggestion, project or even you want to say,
              Hello.. Please fill out the form below and I will reply you
              shortly.
            </p>

            <Form>
              <Form.Group className="mb-4">
                <Form.Label>
                  Full Name <span>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Winda Pramesti" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  Email Address <span>*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  Phone Number <span>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Your Phone Number" />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  placeholder="Your Message …"
                  as="textarea"
                  rows={5}
                />
              </Form.Group>
            </Form>
            <Button
              className="btn btn-warning text-white me-5 col-lg-4 mx-auto"
              id="send"
            >
              <span>
                <Image src="../assets/send-mail.png" />
              </span>{" "}
              Send Message
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
