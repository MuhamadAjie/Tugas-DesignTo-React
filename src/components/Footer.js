import { Row, Container, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  const backgorund = {
    top: "auto",
    width: "auto",
    height: "141px",
    background: "#19345E 0% 0% no-repeat padding-box",
  };

  const gambarLogo2 = {
    top: "15px",
    left: "160px",
    width: "110px",
    height: "59px",
    background: "transparent 0% 0% no-repeat padding-box",
  };

  const socialMedia = {
    width: "25px",
    height: "25px",
    margin: "10px",
  };

  return (
    <div style={backgorund}>
      <Container>
        <Row className="text-white">
          <Col className="mt-4">
            <Link to="/">
              <Image style={gambarLogo2} src="../assets/logo-ALTA-v2@2x.png" />
            </Link>
          </Col>
          <Col className="mt-4 text-center" id="social-media">
            <span>Social Media</span>
            <div className="text-center">
              <Link>
                <Image style={socialMedia} src="../assets/ic_fb.png" />
              </Link>
              <Link>
                <Image style={socialMedia} src="../assets/ic_twitter.png" />
              </Link>
              <Link>
                <Image style={socialMedia} src="../assets/ic_ig.png" />
              </Link>
              <Link>
                <Image style={socialMedia} src="../assets/ic_linkedin.png" />
              </Link>
            </div>
          </Col>
          <Col className="text-end mt-5" id="copyright">
            <p>Copyright &copy; 2019 Alterra</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
