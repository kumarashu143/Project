import { Link } from 'react-router-dom';
const courses = [
  { title: 'C/C++', description: 'Start with core programming concepts and memory management.', level: 'Beginner', icon: '💻' },
  { title: 'Java', description: 'Learn object-oriented programming with Java basics.', level: 'Beginner', icon: '☕' },
  { title: 'Python', description: 'Explore syntax, data types, and real-world basics with Python.', level: 'Beginner', icon: '🐍' },
  { title: 'JavaScript', description: 'Master the building blocks of web development.', level: 'Beginner', icon: '🟨' },
  { title: 'Java Full Stack', description: 'End-to-end development using Java, Spring Boot, and frontend tools.', level: 'Intermediate', icon: '☕🖥️🌐📦' },
  { title: 'Python Full Stack', description: 'End-to-end development using Python, Django, and frontend tools.', level: 'Intermediate', icon: '🐍🖥️🌐🧠' },
  { title: 'MERN Stack', description: 'Build full-stack apps using MongoDB, Express, React, and Node.', level: 'Intermediate', icon: '⚛️🌐' },
  { title: 'React Native', description: 'Create cross-platform mobile apps with React Native.', level: 'Advanced', icon: '📱' },
  { title: 'Docker', description: 'Master containerization and scalable deployments.', level: 'Advanced', icon: '🐳' },
];

export const LogoSlider = () => {
  const logos = [
    'c.png', 'java.png', 'spring.png', 'python.png', 'django.png', 'data.png', 'machine.png', 'js.png',
    'mongo.png', 'express.png', 'react.png', 'node.png', 'docker.png'
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <div className="container" style={{ paddingTop: '1rem', paddingBottom: '0.5rem' }}>
      <h3 className="text-center fst-italic text-primary-emphasis mb-3">
        Programming Courses @ Indi Secure, Bhopal
      </h3>

      <div style={{
        overflow: 'hidden',
        width: '100%',
        position: 'relative'
      }}>
        <div id="logo-track" style={{
          display: 'flex',
          width: 'fit-content',
          animation: 'scrollLogos 60s linear infinite'
        }}>
          {loopLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              style={{
                height: '100px',
                marginRight: '2rem',
                objectFit: 'contain',
                flexShrink: 0
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        #logo-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export const CourseOverview = () => {
  return (
    <section className="container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <h2 className="text-center fst-italic text-primary-emphasis mb-3">Master C, Java, Python, MERN , DSA & More with Indi Secure</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Link to="/course" style={{ textDecoration: 'none' }}>
              <div className="card h-100 shadow-sm" style={{ backgroundColor: '#000', color: 'white' }}>
                <div className="card-body text-center">
                  <div className="display-4 mb-3">{course.icon}</div>
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  <span className="badge bg-white text-dark">{course.level}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

