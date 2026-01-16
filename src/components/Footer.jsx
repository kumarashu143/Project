import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-auto">
      <div className="container text-center">
        <nav className="mb-3">
          <Link to="/" className="text-white me-3 text-decoration-none">Home</Link>
          <Link to="/about" className="text-white me-3 text-decoration-none">About</Link>
          <Link to="/course" className="text-white me-3 text-decoration-none">Courses</Link>          
          <Link to="/login" className="text-white me-3 text-decoration-none">Login</Link>
          <Link to="/contact" className="text-white me-3 text-decoration-none">Contact</Link>
        </nav>
        <div className="mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaFacebookF size={30}/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <FaInstagram size={30}/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaLinkedin  size={30}/>
          </a>
        </div>

        <p className="mb-1">&copy; {new Date().getFullYear()} Indi Secure • All rights reserved</p>

        <h6 className="text-center text-white mt-3 mb-1">Disclaimer</h6>
        <small className="text-white">
          Brand names and logos are used for reference only and do not imply endorsement.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
