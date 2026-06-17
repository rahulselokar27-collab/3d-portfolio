import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Get In Touch</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:rahulselokar27@gmail.com" data-cursor="disable">
                rahulselokar27@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Nagpur, Maharashtra,</p>
            <p>India</p>
          </div>

          <div className="contact-box">
            <h4>Find Me</h4>
            <a
              href="https://github.com/rahulselokar27-collab"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/rahul-selokar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:rahulselokar27@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Rahul <br /> <span>Selokar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 · Cloud & DevOps Engineer
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
