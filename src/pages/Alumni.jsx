const students = [
  {
    name: "Brajesh Suryawanshi ",
    course: "Full Stack Java",
    company: "Brint Marketing Solutions",
    avatar: "./brajesh.png", 
    role:'Web Developer',
    location:'Bhopal'
  },
   {
    name: "Vivek Rai",
    course: "Full Stack Java",
    company: "Montran Services Private Limited",
    avatar: "./vivek.png", 
    role:'Application Support Engineer',
    location:'Mumbai'
  },
   {
    name: "Satyam Singh",
    course: "Full Stack Python",
    company: "Bansal Tech Professional Private Limited",
    avatar: "./satyam.png", 
    role:'Software Tester',
    location:'Bhopal'
  },
 {
    name: "Pritam Patidar",
    course: "Full Stack Java",
    company: "Newput Infotech",
    avatar: "./pritam.png", 
    role:'Android & Kotlin Developer',
    location:'Indore'
  },
 {
    name: "Harendra Singh Bhadouriya",
    course: "Full Stack Java & Python",
    company: "Code Solution Private Limited",
    avatar: "./harendra.png", 
    role:'Python Developer',
    location:'Gwalior'
  },

  {
    name: "Pankaj Rajoria ",
    course: "Full Stack Python",
    company: "A to Z Infoway",
    avatar: "./pankaj.png", 
    role:'Software Developer',
    location:'Ahmedabad'
  },

];

export default function Alumni() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🌟 Brilliant Minds of Our Institute 🌟</h2>
      <div className="row">
        {students.map((student, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img src={student.avatar} className="card-img-top" alt={student.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text"><strong>Course:</strong> {student.course}</p>
                <p className="card-text"><strong>Company:</strong> {student.company}</p>
                <p className="card-text"><strong>Role:</strong> {student.role}</p>
                <p className="card-text"><strong>Location:</strong> {student.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
