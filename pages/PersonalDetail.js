import React, { useRef, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';

const PersonalDetail = () => {
  const [userId, setUserId] = useState("");
  const [threshold, setthreshold] = useState("");
  const [endDate, setEndDate] = useState("");
  const [msg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const dateSection = useRef(null);
  const router = useRouter();

  const handlenameSubmit = (e) => {
    if (e.key === 'Enter') {
      dateSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    if (userId === "" || threshold === "" ) {
      setMsg(true);
    } else {
      localStorage.setItem('userid', userId);
      localStorage.setItem('threshold', threshold);
      localStorage.setItem('enddate', endDate);
      setUserId('');
      setthreshold('');
      setEndDate('');
      const user = localStorage.getItem('username');
      const pass = localStorage.getItem('password');

      setLoading(true);

      axios.post('https://etlabdata.onrender.com/', {
        "username": user,
        "password": pass,
        "threshold":threshold

      }).then(function (response) {
        console.log(response);
        localStorage.setItem('data', JSON.stringify(response.data));
        localStorage.setItem('timetable', JSON.stringify(response.data.timatable));
        localStorage.setItem('attendence', JSON.stringify(response.data.attendence));
        setLoading(false);
        router.push('/');  
      }).catch(function (error) {
        console.log(error);
        setLoading(false);
      });
    }
  };

  return (
    <div className="w-screen h-screen p-4 flex flex-col">
      <div>
        <h1 className="font-jersey text-4xl">Enter your Details</h1>
      </div>
      <div className="w-full h-full font-jersey md:text-6xl text-3xl overflow-y-auto snap-y snap-mandatory overflow-x-hidden z-10">
        <div className="snap-center flex flex-col justify-center items-center h-screen w-screen overflow-x-hidden">
          <h1>What Is Your Name?</h1>
          <input type="text" className="outline-none border-b-2 border-solid border-black" onKeyDown={handlenameSubmit} value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div ref={dateSection} className="snap-center h-screen w-screen flex flex-col justify-center items-center gap-10">
          <h1>Enter the percentage u want to keep</h1>
          <input type="number" className="outline-none border-b-2 border-solid border-black" value={threshold} onChange={(e) => setthreshold(e.target.value)} />
         <button className="w-36 text-2xl h-160 rounded-2xl p-2 bg-black text-white" onClick={handleClick}>
            {
              loading ?
                <div className="flex justify-center items-center w-full h-full z-50 top-0">
                  <CircularProgress />
                </div>
                :
                <>Submit</>
            }
          </button>
          {
            msg && <p className="text-sm text-red-500">Please Enter all the credentials</p>
          }
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
