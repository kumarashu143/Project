import { Helmet } from "react-helmet";

const AboutUs = () => (
  <>
    <Helmet>
      <title>About Indi Secure – Top Programming Institute in Bhopal</title>
      <meta
        name="description"
        content="Discover Indi Secure, Bhopal’s trusted coding institute offering expert-led training in Full Stack, DSA, DevOps, and more since 2018."
      />      
      <link rel="canonical" href="https://indisecure.online/about" />
    </Helmet>

    <div className="container py-5">
      <h2 className="text-center mb-4 display-5 fw-bold text-primary">🌟 About Us</h2>

      <div className="mb-4">
        <p className="intro-text">
          Welcome to <strong>Indi Secure</strong>, a leading <strong>Bhopal</strong>-based institute where passion meets precision in programming education. Since <strong>2018</strong>, we've been committed to delivering hands-on training in modern programming languages, helping learners build real-world skills and launch successful tech careers.
        </p>
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="text-success-emphasis">🚀 Our Mission</h4>
            <p>To ignite curiosity and cultivate practical skills through immersive, hands-on learning.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="text-warning-emphasis">🎯 Our Vision</h4>
            <p>To be a leading tech education hub that bridges the gap between learners and industry opportunities.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h4 className="text-primary-emphasis">💡 What We Offer</h4>
            <p>
              Courses in Full Stack, Data Science, DSA, DevOps & more — tailored for beginners & professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4 text-center">
        <img
          src="./code.jpg"
          alt="Learning Environment"
          className="img-fluid rounded shadow-sm"
        />
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="text-center bg-white p-4 border rounded shadow-sm fs-5">
            <h5 className="mb-3">✉️📱 Get in Touch</h5>
            <p><strong>Email:</strong> indi.bhopal@gmail.com</p>
            <p><strong>Address:</strong> Plot # 9, MP Nagar Zone-1, Bhopal-462011, MP.</p>
            <p><strong>Mobile Number:</strong>+91 8839331601 / +91 9223504014</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutUs;
