import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud & DevOps Intern</h4>
                <h5>Greamio Technology Pvt. Ltd. · Nagpur</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Working on cloud infrastructure automation, containerization,
              and CI/CD pipelines. Hands-on with AWS, Docker, Kubernetes,
              Terraform and Jenkins to build and deploy scalable systems, and
              using Grafana for monitoring and observability.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Cloud/DevOps Engineer</h4>
                <h5>CloudBlitz · Upskilling Program</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Continuously upskilling in Linux administration, Git/GitHub
              version control, Infrastructure as Code with Terraform,
              container orchestration with Kubernetes, and building CI/CD
              pipelines with Jenkins.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>📍 Based In</h4>
                <h5>Nagpur, Maharashtra, India</h5>
              </div>
              <h3>IN</h3>
            </div>
            <p>
              Actively learning and building projects around cloud
              infrastructure, automation, and DevOps best practices. Open to
              internship and entry-level Cloud/DevOps opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
