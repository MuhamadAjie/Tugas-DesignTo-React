import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Blog.css";
import { Container, Image } from "react-bootstrap";

function Blog() {
  return (
    <>
      <Header />

      <div className="text-center">
        <p
          id="blog"
          className="fs-1 fw-bold mt-5 mb-5 d-flex justify-content-center"
        >
          <span className="garisSpan"></span>Blog
          <span className="garisSpan"></span>
        </p>
        <Image className="img-fluid" id="banner" src="../assets/img_blog.jpg" />
      </div>
      <Container className="mt-5 mb-5" id="paragraph">
        <strong className="how">HOW TO BE A SUCCESSFUL FREELANCER</strong>
        <p className="fw-bold mt-5 mb-5">Larry Stark - 7 Januari 2020</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rem
          accusantium omnis ea numquam, voluptas aut reiciendis nostrum rerum?
          Unde itaque tempora deserunt quod suscipit maiores. Deleniti nam
          corporis consequatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deserunt ad delectus, nesciunt iste optio dolores
          dicta reprehenderit libero! Enim eos architecto modi ipsum esse
          mollitia itaque fuga minima recusandae perspiciatis. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Maiores corrupti, quas error
          nostrum dicta odit quidem iste sunt aperiam ad ab hic maxime mollitia
          fuga, dolorum facilis nobis, voluptate incidunt.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rem
          accusantium omnis ea numquam, voluptas aut reiciendis nostrum rerum?
          Unde itaque tempora deserunt quod suscipit maiores. Deleniti nam
          corporis consequatur. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Eos rerum, voluptatem, sequi esse possimus nesciunt
          natus facilis culpa illo commodi repellendus reprehenderit et
          consectetur cumque quo quasi debitis necessitatibus voluptatibus!
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rem
          accusantium omnis ea numquam, voluptas aut reiciendis nostrum rerum?
          Unde itaque tempora deserunt quod suscipit maiores. Deleniti nam
          corporis consequatur. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus quisquam, dolore eos excepturi amet
          nostrum quasi doloremque maxime id suscipit provident nisi totam
          veniam molestias praesentium deserunt ad dicta quos?
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rem
          accusantium omnis ea numquam, voluptas aut reiciendis nostrum rerum?
          Unde itaque tempora deserunt quod suscipit maiores. Deleniti nam
          corporis consequatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Neque in accusantium velit error recusandae ipsa
          labore laborum doloribus illum modi obcaecati consequuntur
          necessitatibus ad quo dolor, quisquam quas eos assumenda?
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rem
          accusantium omnis ea numquam, voluptas aut reiciendis nostrum rerum?
          Unde itaque tempora deserunt quod suscipit maiores. Deleniti nam
          corporis consequatur.
        </p>
        <br></br>
      </Container>

      <Footer />
    </>
  );
}

export default Blog;
