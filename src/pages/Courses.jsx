import { useState, useEffect, useRef } from "react";
import FlashingBadge from "../components/FlashingBadge";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const courses = [
  "C/C++", "Java", "Python", "JavaScript", "Web Design",
  "React", "DSA", "Docker", "Java Full Stack", "Python Full Stack", "MERN Stack"
];

const courseDurations = {
  "C/C++": "2 Months",
  "Java": "2 Months",
  "Python": "2 Months",
  "JavaScript": "2 Months",
  "Web Design": "2 Months",
  "DSA": "3 Months",
  "Java Full Stack": "6 Months",
  "Python Full Stack": "6 Months",
  "MERN Stack": "6 Months",
  "React": "2 Months",
  "Docker": "1 Month"
};

const rawData = {
  // ... (your rawData object remains unchanged)
  "C/C++": [
    { language: "C", topics: "History & Features of C" },
    { language: "C", topics: "Variables" },
    { language: "C", topics: "Data Types" },
    { language: "C", topics: "Operators" },
    { language: "C", topics: "If ... Else" },
    { language: "C", topics: "Switch -Case" },
    { language: "C", topics: "Loops" },
    { language: "C", topics: "Functions" },
    { language: "C", topics: "Arrays" },
    { language: "C", topics: "Strings" },
    { language: "C", topics: "Pointer" },
    { language: "C", topics: "Structure" },
    { language: "C", topics: "Union" },
    { language: "C", topics: "Enumerator" },
    { language: "C", topics: "Storage Class" },
    { language: "C++", topics: "History & Features of C++" },
    { language: "C++", topics: "NameSpace & Reference Variable" },
    { language: "C++", topics: "OOPs Concept" },
    { language: "C++", topics: "Encapsulation" },
    { language: "C++", topics: "Constructor & Destructor" },
    { language: "C++", topics: "Class Varaiables & Methods" },
    { language: "C++", topics: "Friend Function & Operator Overloading" },
    { language: "C++", topics: "Inheritance" },
    { language: "C++", topics: "Polymorphism" },
    { language: "C++", topics: "Abstraction" },
    { language: "C++", topics: "File Handling" },
    { language: "C++", topics: "STL" },
  ],
  "Java": [
    { language: "Java-Core", topics: "History & Features of Java" },
    { language: "Java-Core", topics: "OOPs Concept & Access Modifiers" },
    { language: "Java-Core", topics: "Variables" },
    { language: "Java-Core", topics: "Data Types" },
    { language: "Java-Core", topics: "Operators" },
    { language: "Java-Core", topics: "If ... Else" },
    { language: "Java-Core", topics: "Switch-Case" },
    { language: "Java-Core", topics: "Loops" },
    { language: "Java-Core", topics: "Constructor" },
    { language: "Java-Core", topics: "Arrays" },
    { language: "Java-Core", topics: "Strings" },
    { language: "Java-Core", topics: "Encapsulation" },
    { language: "Java-Core", topics: "Class Varaiables & Methods" },
    { language: "Java-Core", topics: "Inheritance" },
    { language: "Java-Core", topics: "Polymorphism" },
    { language: "Java-Core", topics: "Abstraction" },
    { language: "Java-Core", topics: "Interface" },
    { language: "Java-Core", topics: "Anonymous Class & Lambda Expression" },
    { language: "Java-Core", topics: "Generics & Collections" },
    { language: "Java-Core", topics: "Exception Handling" },
    { language: "Java-Core", topics: "File Handling" },
    { language: "Java-Core", topics: "Threads" },
    { language: "Java-Core", topics: "Swing" },
    { language: "Java-Core", topics: "Minor-Project" },
  ],
  "Python": [
    { language: "Python-Core", topics: "History & Features of Python" },
    { language: "Python-Core", topics: "Python Syntax & Indentation Concept" },
    { language: "Python-Core", topics: "Variables" },
    { language: "Python-Core", topics: "Data Types" },
    { language: "Python-Core", topics: "Operators" },
    { language: "Python-Core", topics: "If ... Else" },
    { language: "Python-Core", topics: "Loops" },
    { language: "Python-Core", topics: "String" },
    { language: "Python-Core", topics: "Collections" },
    { language: "Python-Core", topics: "Functions" },
    { language: "Python-Core", topics: "OOPs Concept" },
    { language: "Python-Core", topics: "Encapsulation" },
    { language: "Python-Core", topics: "Class Varaiables & Methods" },
    { language: "Python-Core", topics: "Inheritance" },
    { language: "Python-Core", topics: "Polymorphism" },
    { language: "Python-Core", topics: "Abstraction" },
    { language: "Python-Core", topics: "Decorators" },
    { language: "Python-Core", topics: "Modules & Package" },
    { language: "Python-Core", topics: "Regex" },
    { language: "Python-Core", topics: "Exception Handling" },
    { language: "Python-Core", topics: "File Handling" },
  ],
  "JavaScript": [
    { language: "JavaScript", topics: "History & Features of JavaScript" },
    { language: "JavaScript", topics: "JavaScript Syntax" },
    { language: "JavaScript", topics: "Variables" },
    { language: "JavaScript", topics: "Data Types" },
    { language: "JavaScript", topics: "Operators" },
    { language: "JavaScript", topics: "If ... Else" },
    { language: "JavaScript", topics: "Loops" },
    { language: "JavaScript", topics: "Functions" },
    { language: "JavaScript", topics: "Modules" },
    { language: "JavaScript", topics: "Class Variables & Methods" },
    { language: "JavaScript", topics: "String" },
    { language: "JavaScript", topics: "Arrays" },
    { language: "JavaScript", topics: "Date & Math Objects" },
    { language: "JavaScript", topics: "Collections" },
    { language: "JavaScript", topics: "Exception Handling" },
    { language: "JavaScript", topics: "Object" },
    { language: "JavaScript", topics: "Event Handling" },
    { language: "JavaScript", topics: "JSON" },
    { language: "JavaScript", topics: "Canvas" },
    { language: "JavaScript", topics: "JQuery" }
  ],

  "Web Design": [
    { language: "HTML", topics: "HTML Elements" },
    { language: "HTML", topics: "HTML Headings, Paragraph" },
    { language: "HTML", topics: "HTML Formatting" },
    { language: "HTML", topics: "HTML Links" },
    { language: "HTML", topics: "HTML Images" },
    { language: "HTML", topics: "HTML Tables" },
    { language: "HTML", topics: "HTML Lists" },
    { language: "HTML", topics: "HTML Forms" },
    { language: "HTML", topics: "HTML Password Validation" },
    { language: "HTML", topics: "HTML Iframes" },
    { language: "HTML", topics: "HTML Audio & Video" },
    { language: "HTML", topics: "HTML Entities" },
    { language: "HTML", topics: "HTML Encodings" },
    { language: "HTML", topics: "HTML Emojis" },
    { language: "HTML", topics: "HTML Global Attributes" },
    { language: "HTML", topics: "HTML Map" },
    { language: "HTML", topics: "HTML SVG" },
    { language: "CSS", topics: "CSS Syntax & Types" },
    { language: "CSS", topics: "CSS Borders" },
    { language: "CSS", topics: "CSS Box Model" },
    { language: "CSS", topics: "CSS Position Property" },
    { language: "CSS", topics: "CSS Gradients" },
    { language: "CSS", topics: "CSS Animations" },
    { language: "CSS", topics: "CSS Grid Layout" },
    { language: "JavaScript", topics: "History & Features of JS" },
    { language: "JavaScript", topics: "Variables" },
    { language: "JavaScript", topics: "Data Types" },
    { language: "JavaScript", topics: "Operators" },
    { language: "JavaScript", topics: "Control Statements" },
    { language: "JavaScript", topics: "Functions" },
    { language: "JavaScript", topics: "Array & Object" },
    { language: "JavaScript", topics: "Accessing Data from Arrays & Objects" },
    { language: "JavaScript", topics: "Event Handling" },
    { language: "JavaScript", topics: "Animation Method" },
    { language: "JavaScript", topics: "Serialization & Deserialization" },
    { language: "JavaScript", topics: "Canvas" },
    { language: "JavaScript-JQuery", topics: "JQuery Syntax & Features" },
    { language: "JavaScript-JQuery", topics: "JQuery Toggle & Animations" },
    { language: "Bootstrap Framework", topics: "Bootstrap Components & Other Features" },
    { language: "Bootstrap Framework", topics: "Bootstrap Use in Developing Responsive Web App" },
  ],
  "Java Full Stack": [
    { language: "Java", topics: "Java-Core" },
    { language: "Frontend", topics: "HTML, CSS, JS, JQuery , Bootstrap" },
    { language: "Database", topics: "MySQL, MongoDB" },
    { language: "Java-Advance", topics: "Servlet, JSP, JDBC, Maven, Hibernate, Spring Boot" },
    { language: "Git & Git Hub", topics: "Version Control Systems, Dev tools, Git & Git Hub" },
    { language: "Project", topics: "Project Work" },
  ],
  "Python Full Stack": [
    { language: "Python ", topics: "Python-Core" },
    { language: "Frontend", topics: "HTML, CSS, JS, JQuery , Bootstrap" },
    { language: "Database", topics: "MySQL, MongoDB" },
    { language: "Python-Advance", topics: "Django" },
    { language: "Git & Git Hub", topics: "Version Control Systems, Dev tools, Git & Git Hub" },
    { language: "Project", topics: "Project Work" },
  ],
  "MERN Stack": [
    { language: "React ", topics: "React Js" },
    { language: "Node", topics: "Node js Modules and Features" },
    { language: "Database", topics: "MongoDB" },
    { language: "Express", topics: "Express Js & Rest API" },
    { language: "Git & Git Hub", topics: "Version Control Systems, Dev tools, Git & Git Hub" },
    { language: "Project", topics: "Project Work" },
  ],
  "React": [
    { language: "React", topics: "Class" },
    { language: "React", topics: "JSX" },
    { language: "React", topics: "Components" },
    { language: "React", topics: "Events" },
    { language: "React", topics: "Conditionals" },
    { language: "React", topics: "List" },
    { language: "React", topics: "Forms" },
    { language: "React", topics: "Router" },
    { language: "React", topics: "Styling" },
    { language: "React", topics: "React Bootstrap" },
    { language: "React", topics: "Social Media icons in React" },
    { language: "React", topics: "Favicon in React" },
    { language: "React", topics: "React App with CDN links" },
    { language: "React", topics: "Pure Vs Impure Function" },
    { language: "React", topics: "Hooks" },
  ],
  "DSA": [
    { language: "DSA", topics: "Data Structure Types" },
    { language: "DSA", topics: "Time and Space Complexities" },
    { language: "DSA", topics: "Algorithm Types" },
    { language: "DSA", topics: "Asymptotic Notations" },
    { language: "DSA", topics: "Arrays" },
    { language: "DSA", topics: "Strings" },
    { language: "DSA", topics: "Searching Algorithms" },
    { language: "DSA", topics: "Sorting Algorithms" },
    { language: "DSA", topics: "Stacks" },
    { language: "DSA", topics: "Queues" },
    { language: "DSA", topics: "Linked Lists" },
    { language: "DSA", topics: "Trees" },
    { language: "DSA", topics: "Recursion & Iterative Traversals" },
    { language: "DSA", topics: "Binary Trees" },
    { language: "DSA", topics: "Binary Search Trees" },
    { language: "DSA", topics: "AVL Trees" },
    { language: "DSA", topics: "Heap Trees" },
    { language: "DSA", topics: "Graphs" },
    { language: "DSA", topics: "Graph Algorithms" },
    { language: "DSA", topics: "Hash Tables" },
    { language: "DSA", topics: "Dynamic Programming" },
    { language: "DSA", topics: "Tries" },
    { language: "DSA", topics: "Segment Trees" },
  ],
  "Docker": [
    { language: "Docker", topics: "YAML Features and Advantages" },
    { language: "Docker", topics: "YAML Naming Conventions" },
    { language: "Docker", topics: "YAML Syntax Rules" },
    { language: "Docker", topics: "YAML Data Types" },
    { language: "Docker", topics: "YAML Array and Collection " },
    { language: "Docker", topics: "Docker Features and Advantages" },
    { language: "Docker", topics: "DevOps and Its Tools" },
    { language: "Docker", topics: "Docker Architecture" },
    { language: "Docker", topics: "Docker Components" },
    { language: "Docker", topics: "Docker Image" },
    { language: "Docker", topics: "Docker Container" },
    { language: "Docker", topics: "Getting Image from Registry" },
    { language: "Docker", topics: "Image vs Container" },
    { language: "Docker", topics: "Dockerfile" },
    { language: "Docker", topics: "Building Docker Image" },
    { language: "Docker", topics: "Dockerfile Commands" },
    { language: "Docker", topics: "Docker Compose and Commands" },
    { language: "Docker", topics: "Docker Swarm" },
    { language: "Docker", topics: "Docker Compose vs Docker Swarm" },
    { language: "Docker", topics: "Deploying a Project on Docker" },
    { language: "Docker", topics: "Docker Hub" }
  ]
};
const dummyData = rawData;

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const courseData = selectedCourse ? dummyData[selectedCourse] || [] : [];
  const duration = selectedCourse ? courseDurations[selectedCourse] : null;

  const syllabusRef = useRef(null);

  useEffect(() => {
    if (selectedCourse && syllabusRef.current) {
      syllabusRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCourse]);

  const cellBorderStyle = {
    border: '1px solid #1d91b8ff'
  };

  const courseColumnStyle = {
    ...cellBorderStyle,
    width: '33%',
  };

  const topicsColumnStyle = {
    ...cellBorderStyle,
    width: '67%',
  };

  return (
    <>
    <Helmet>
    <title>Programming Courses – Full Stack, DSA, MERN, Java, Python | Indi Secure Bhopal</title>
    <meta
      name="description"
      content="Explore expert-led programming courses at Indi Secure Bhopal. Learn Full Stack, MERN, Java, Python, DSA, Docker, React, and more with hands-on projects."
    />    
    <link rel="canonical" href="https://indisecure.online/course" />
  </Helmet>
    <div className="d-flex flex-column min-vh-100 bg-light">
      <FlashingBadge />
      <div className="container my-1 flex-grow-1">
        <div className="p-4 rounded shadow border border-info-subtle bg-light text-dark">
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 mb-3">
            <div className="d-flex justify-content-end">
              <Link
                to="/register"
                className="btn border-0 fw-semibold px-5 py-2 rounded-pill shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                  color: "#ffffff",
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                  letterSpacing: "0.7px",
                  textTransform: "capitalize",
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)"
                }}
              >
                Course Fee
              </Link>
            </div>
            <h3 className="mt-1 fw-bold text-primary-emphasis">
              🚀Click for Syllabus
            </h3>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {courses.map((course) => {
              const isSelected = selectedCourse === course;
              return (
                <button
                  key={course}
                  className="btn fw-semibold px-4 py-2 rounded-pill shadow-sm border-0"
                  onClick={() => setSelectedCourse(course)}
                  style={{
                    minWidth: "140px",
                    background: isSelected ? "#6610f2" : "#000",
                    color: "#fff",
                    fontWeight: "600",
                    boxShadow: isSelected
                      ? "0 0 10px rgba(102, 16, 242, 0.5)"
                      : "none",
                    transform: isSelected ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.2s ease-in-out"
                  }}
                >
                  {course}
                </button>
              );
            })}
          </div>
        </div>

        <div
          ref={syllabusRef}
          className="d-flex justify-content-center mt-3"
        >
          <div
            className="table-responsive bg-white p-4 rounded shadow-sm border border-info w-100"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="text-center text-info-emphasis fw-bold mb-3">
              {selectedCourse
                ? `${selectedCourse} Syllabus(${duration})`
                : "📘 Course Syllabus Preview"}
            </h4>
            {selectedCourse && courseData.length > 0 ? (
              <table className="table table-striped table-hover align-middle">
                <thead className="table-info">
                  <tr>
                    <th style={courseColumnStyle}>Course</th>
                    <th style={topicsColumnStyle}>Major Topics</th>
                  </tr>
                </thead>
                <tbody>
                  {courseData.map((item, index) => (
                    <tr key={index}>
                      <td style={courseColumnStyle}>{item.language}</td>
                      <td style={topicsColumnStyle}>{item.topics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-5 fw-bold">
                🕐 No course selected — choose one to preview its syllabus.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Courses;