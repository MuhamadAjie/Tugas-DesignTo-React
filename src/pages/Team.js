import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Image, Row, Col, Table, ListGroup } from "react-bootstrap";
import "../css/Team.css";

function Team() {
  return (
    <>
      <Header />

      <Image src="../assets/ornament_batik.png" id="batik1" />

      <Container>
        <p
          id="about-team"
          className="fs-1 fw-bold mt-5 mb-5 d-flex justify-content-center"
        >
          <span className="garisSpan"></span>About Our Team
          <span className="garisSpan"></span>
        </p>
        <p className="fs-3 mb-4">Backend Developer</p>
        <Row className="mb-5">
          <Col lg="4">
            <Image id="gambar" src="../assets/shutterstock_796346011@2x.png" />
            <span className="bg-light border border-warning bg-transparent border-5"></span>
          </Col>
          <Col lg="4">
            <Table className="table-borderless mt-5 ms-4">
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>:</td>
                  <td>Cindy</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>:</td>
                  <td>Felita</td>
                </tr>
                <tr>
                  <td>Birthdate</td>
                  <td>:</td>
                  <td>30 Juni 1995</td>
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td>:</td>
                  <td>Indonesia</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Malang</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>cindy@alterra.id</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>089522767180</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="shadow-sm p-3 mb-5 bg-body rounded" id="calendar">
          <Col lg="6">
            <p class="fs-4 mb-3">Education</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" class="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span class="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" class="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span class="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" class="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span class="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg="6">
            <p class="fs-4 mb-3">Experience</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" class="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span class="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" class="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span class="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" class="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span class="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <p className="fs-3 mb-4">Frontend Developer</p>
        <Row className="mb-5">
          <Col lg="4">
            <Image id="gambar" src="../assets/shutterstock_796346011@2x.png" />
            <span className="bg-light border border-warning bg-transparent border-5"></span>
          </Col>
          <Col lg="4">
            <Table className="table-borderless mt-5 ms-4">
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>:</td>
                  <td>Cindy</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>:</td>
                  <td>Felita</td>
                </tr>
                <tr>
                  <td>Birthdate</td>
                  <td>:</td>
                  <td>30 Juni 1995</td>
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td>:</td>
                  <td>Indonesia</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Malang</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>cindy@alterra.id</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>089522767180</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="shadow-sm p-3 mb-5 bg-body rounded" id="calendar">
          <Col lg="6">
            <p className="fs-4 mb-3">Education</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" className="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span className="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" className="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span className="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" className="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span className="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg="6">
            <p className="fs-4 mb-3">Experience</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" className="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span className="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" className="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span className="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="../assets/calendar.png" className="me-3 mb-1" />
                <span>2007 - 2010</span>
                <br></br>
                <span className="fw-bold">Istanbul University</span>
                <br></br>
                <span>Engineering Degree</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Team;
