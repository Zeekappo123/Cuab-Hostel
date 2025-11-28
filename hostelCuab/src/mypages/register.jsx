import Footer from '../components/footer/footer';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const navigate = useNavigate();

  const [mail, setMail] = useState('');
  const [pword, setPword] = useState('');
  const [cword, setCword] = useState('');

  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [confirmErr, setConfirmErr] = useState('');

  // NEW: college and department states
  const [selectedCollege, setSelectedCollege] = useState('');
  const [departments, setDepartments] = useState([]);

  // College → Departments mapping
  const collegeDepartments = {
    "College of Information and Communication Technology": [
      "Computer Science",
      "CyberSecurity",
      "Software Engineering"
    ],
    "College of Arts, Social and Management Sciences": [
      "Accounting",
      "Economics",
          "Islamic Studies",
      "Business Administration"
    ],
    "College of Environmental Sciences": [
      "Architecture",
      "Environmental Management",
      "Urban Planning"
    ],
    "College of Health Sciences": [
      "Nursing",
      "Physiology",
      "Anatomy",
      "Biochemistry"
    ],
    "College of Natural and Applied Sciences": [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics"
    ],
    "Bola Ajibola College of Law": [
      "Law"
    ]
  };

  const checkMail = (e) => {
    const val = e.target.value;
    setMail(val);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(val)) {
      setEmailErr("❌ Please enter a valid email address");
    } else {
      setEmailErr("");
    }
  };

  const checkPassword = (e) => {
    const val = e.target.value;
    setPword(val);

    if (val.length < 6) {
      setPassErr("❌ Password must be at least 6 characters");
    } else if (!/[!@#$%^&*()]/.test(val)) {
      setPassErr("❌ Password must include at least one special character");
    } else {
      setPassErr("✅ Strong password");
    }
  };

  const checkConfirmPassword = (e) => {
    const val = e.target.value;
    setCword(val);

    if (val !== pword) {
      setConfirmErr("❌ Passwords do not match");
    } else {
      setConfirmErr("");
    }
  };

  // NEW: handle college change
  const handleCollegeChange = (e) => {
    const college = e.target.value;
    setSelectedCollege(college);
    const deptList = collegeDepartments[college] || [];
    setDepartments(deptList);
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailErr && !passErr.includes("❌") && !confirmErr) {
      navigate('/login');
    } else {
      alert("Please fix errors before submitting");
    }
  };

  return (
    <div>

 
      <div id="contact">
        <div id="find">
          <h3>Student Registration</h3>
        </div>
          <br />
        <div className="login">
          <form onSubmit={handleSubmit}>

            <h2>Personal Information</h2>

            <label>Matriculation Number</label>
            <input type="text" inputMode="numeric" />
            <br />

            <label>Surname</label>
            <input type="text"/>
            <br />

            <label>First Name</label>
            <input type="text"/>
            <br />

            <label>Other Names</label>
            <input type="text"/>
            <br />

            <div className="gender-line">
              <label>Gender:</label>
              <label><input type="radio" name="gender" value="male" /> Male</label>
              <label><input type="radio" name="gender" value="female" /> Female</label>
            </div>
            <br />

            <label>Phone Number</label>
            <input type="number"/>
            <br />

            <label>Email</label>
            <input 
              type="email"
              value={mail}
              onChange={checkMail}
            />
            {emailErr && <p className="error">{emailErr}</p>}
            <br />
       
            <label>Password</label>
            <input 
              type="password"
              value={pword}
              onChange={checkPassword}
            />
            {passErr && (
              <p className="error" style={{ color: passErr.includes("✅") ? "green" : "red" }}>
                {passErr}
              </p>
            )}
            <br />

            <label>Confirm Password</label>
            <input 
              type="password"
              value={cword}
              onChange={checkConfirmPassword}
            />
            {confirmErr && <p className="error">{confirmErr}</p>}
            <br />

            <h2>Academic Information</h2>

            <label>College</label>
            <select value={selectedCollege} onChange={handleCollegeChange}>
              <option value="">-- Select College --</option>
              {Object.keys(collegeDepartments).map((college, index) => (
                <option key={index} value={college}>{college}</option>
              ))}
            </select>
            <br />

            <label>Department</label>
            <select>
              {departments.length > 0 ? (
                departments.map((dept, index) => (
                  <option key={index}>{dept}</option>
                ))
              ) : (
                <option value="">-- Select a College first --</option>
              )}
            </select>
            <br />

            <label>Level</label>
            <select>
              <option>100</option>
              <option>200</option>
              <option>300</option>
              <option>400</option>
              <option>500</option>
            </select>
            <br />

            <label>Academic Session</label>
            <input type="text" inputMode="numeric"  />
            <br />

            <label>Available Room</label>
            <input type="number" />
            <br />

            <button type="submit">Register</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>

          </form>
        </div>
      </div>

          <br />
      <Footer />


    </div>

    
  );
}

export default Register;

