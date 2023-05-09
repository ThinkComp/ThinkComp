import React, { useState } from 'react'
import Logo from '../assets/register-logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OtpAuthentication = () => {
  const [otp, SetOtp] = useState(null);
  const [pin, setPin] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const email = window.localStorage.getItem('email');
    if (!otp && !pin) return alert("enter either otp or pin");
    if (!otp) {

    } else {
      await axios.post("/user/verify/otp", { otp, email }).then(() => {
        window.localStorage.removeItem('email');
        navigate("/");
      }).catch(error => {
        alert(error.response.data.message);
      })
    }
  }

  return (
    <div className='flex flex-col items-center h-screen justify-center'>
      <img src={Logo} className='w-[15rem] mb-12' />
      <div className="w-[30rem] flex flex-col items-center gap-6">
        <input
          type="text"
          placeholder="Pin"
          onChange={(e) => setPin(e.target.value)}
          className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
        />
        <input
          type="Otp"
          placeholder="OTP"
          onChange={(e) => SetOtp(e.target.value)}
          className="font-bold bg-[#fff2e3] px-6 py-4 rounded-xl text-black/50 text-xl placeholder:text-[#e0d5c8] outline-none my-2 w-full"
        />
        <button onClick={handleLogin} className="font-bold bg-[#fcb800] px-4 py-3 w-1/2 rounded-xl text-black/70 text-md xl:text-xl my-4">
          LOGIN
        </button>
      </div>
    </div>
  )
}

export default OtpAuthentication