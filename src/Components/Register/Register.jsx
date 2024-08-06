// Components/Register/Register.jsx

import React,{useState} from 'react';
import axios from "axios"
import './Register.css';
import { useNavigate } from 'react-router-dom';
import iitp_drone from '../../assets/iitp-drone.jpg'; // Import the background image
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const baseURL = import.meta.env.VITE_API_BASE_URL;
const Register = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const submithandler = async(e)=>{
    e.preventDefault();
    try {
      const data = await axios.post(`${baseURL}/api/v1/verifyemail`,{
        email:email
      })
      toast.success(data.data.message);
      setTimeout(() => {
        navigate('/register-form')
      }, 3000);
    } catch (error) {
      const message = error.response.data.message
      toast.error(message);
    }

  }
  return (
    <div className="register-container" style={{ backgroundImage: `url(${iitp_drone})` }}>
      <div className="register-box">
        <h2>Welcome to the registration of E-Gymkhana IIT-Patna</h2>
        <form>
          <label htmlFor="email">Enter your IIT Patna mail ID:</label>
          <input type="email" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <button type="submit" onClick={submithandler}>Submit</button>
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

export default Register;
