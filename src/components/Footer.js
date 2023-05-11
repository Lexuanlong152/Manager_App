import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap-icons/font/bootstrap-icons.css";
function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="https://angular.io/" className="text-reset text-decoration-none">
                  Angular
                </a>
              </p>
              <p>
                <a href="https://react.dev/" className="text-reset text-decoration-none">
                  React
                </a>
              </p>
              <p>
                <a href="https://vuejs.org/" className="text-reset text-decoration-none">
                  Vue
                </a>
              </p>
              <p>
                <a href="https://laravel.com/" className="text-reset text-decoration-none">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">SOCIAL LNKS</h6>
              <p>
                <a 
                  href="https://www.facebook.com/messages"
                  className="text-reset text-decoration-none"
                >
                  <i className="bi bi-messenger me-2"></i>
                  Messenger
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/messages"
                  className="text-reset text-decoration-none"
                >
                  <i className="bi bi-instagram me-2"></i>
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/long.lexuan.1806"
                  className="text-reset text-decoration-none"
                >
                  <i className="bi bi-facebook me-2"></i>
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/messages"
                  className="text-reset text-decoration-none"
                >
                  <i className="bi bi-telegram me-2"></i>
                  Telegram
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className=" bi bi-house-fill me-2"></i>
                Thu Duc City,HCM
              </p>
              <p>
                <i class="bi bi-telephone-fill me-2"></i>
                0123.456.789
              </p>
              <p>
                <i class="bi bi-envelope-fill me-2"></i>
                lexualong0105@gmail.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 LearnReact:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Long's App
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
