import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="bg-dark text-white text-center py-5 px-3">
      <h1 className="mb-3 display-6">
        Indi Secure-Programming & Full-Stack Courses in Bhopal
      </h1>

      <h2 className="mb-3 display-6">Build Your Development Career 💼</h2>

      <Link to="/course">
        <button className="btn btn-info fw-bold px-4 py-2">
          Get Started
        </button>
      </Link>
    </section>
  );
};
