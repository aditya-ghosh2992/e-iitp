import React,{useState}from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
import iitp_drone from '../../assets/iitp-drone.jpg'; 
import { toast, ToastContainer } from 'react-toastify';
import logo1 from '../../assets/iitp-logo.png'; 
import axios from 'axios';
const RegistrationForm = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [fullname,setFullname] = useState("");
  const [rollnumber,setRollnumber] = useState("");
  const [email,setEmail] = useState("");
  const [contactnumber,setContactnumber] = useState("");
  const [courseCategory,setCourseCategory] = useState("B-tech");
  const [courseName,setCourseName] = useState("B-tech CSE");
  const [admissionyear,setAdmissionYear] = useState("2008")
  const [interesteddomain,setInterestedDomain]= useState("Technical Club");
  const [hobby,setHobby]= useState("");
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const data  = await axios.post(`${baseURL}/api/v1/register`,{
        email:email,
        fullname:fullname,
        rollno:rollnumber,
        contactno:contactnumber,
        coursecategory:courseCategory,
        coursename:courseName,
        admissionyear:admissionyear,
        interesteddomain:interesteddomain,
        other:hobby
      });
      toast.success(data.data.message);
      setTimeout(() => {
        navigate('/thank-you');
      }, 3000);
    } catch (error) {
      const message = error.response.data.message
      toast.error(message);
    }
  };

  return (
    <div className="registration-container" style={{ backgroundImage: `url(${iitp_drone})` }}>
      <div className="registration-box">
        <img src={logo1} alt="E-GYMKHANA Logo" className="logo1" />
        <h1>Fill this form to submit your application with us</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" required value={fullname} onChange={e=>setFullname(e.target.value)} />
          </label>
          <label>
            Roll Number:
            <input type="text" required value={rollnumber} onChange={e=>setRollnumber(e.target.value)} />
          </label>
          <label>
           Email:
            <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} />
          </label>
          <label>
            Contact Number:
            <input type="text" required value={contactnumber} onChange={e=>setContactnumber(e.target.value)} />
          </label>
          <label>
            Course Category:
            <select value={courseCategory} onChange={e=>setCourseCategory(e.target.value)}>
              <option>PG-Hybrid</option>
              <option>UG-Hybrid</option>
            </select>
          </label>
          <label>
            Course Name:
            <select value={courseName} onChange={e=>setCourseName(e.target.value)}>
              <option>BSc CSDA</option>
              <option>BBA</option>
              <option>Mtech-Executive</option>
              <option>MBA-Executive</option>
            </select>
          </label>
          <label>
            Admission Year:
            <select value={admissionyear} onChange={e=>setAdmissionYear(e.target.value)}>
              {Array.from({ length: 17 }, (_, i) => 2008 + i).map(year => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </label>
          <label>
            Interested Domain:
            <select value={interesteddomain} onChange={e=>setInterestedDomain(e.target.value)}>
              <option>Technical Club</option>
              <option>Gaming Club</option>
              <option>Cultural Club</option>
            </select>
          </label>
          <label>
            Hobby/Passion:
            <input type="text" required value={hobby} onChange={e=>setHobby(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default RegistrationForm;
