import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const AttendanceTable = () => {
  const [timetable, setTimetable] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const extractSubjects = (student) => {
    return Object.keys(student).filter((key) => /^(22|23|24|21|20)/.test(key));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/attendence/');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchTimetable = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/timetable/');
            const data = await response.json();
            setTimetable(data);
        } catch (error) {
            console.error('Error fetching timetable:', error);
        }
    };

    fetchTimetable();
}, []);

if (!timetable) {
  return (
    <div className='grid items-center justify-center'>
      <CircularProgress />
    </div>
  ); 
}

  if (loading) {
    return (
      <div className='grid items-center justify-center'>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">TKM College of Engineering - Attendance</h1>

      {data.map((student, index) => {
        const subjects = extractSubjects(student); 

        return (
          <div key={index} className="mb-6">
            <div className="mb-6">
              <p><strong>Uni Reg No:</strong> {student["Uni Reg No"]}</p>
              <p><strong>Roll No:</strong> {student["Roll No"]}</p>
              <p><strong>Name:</strong> {student.Name}</p>
            </div>

            <table className="table-auto w-full border-collapse border border-gray-400 mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 p-2">Subject Code</th>
                  <th className="border border-gray-400 p-2">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 p-2">{subject}</td>
                    <td className="border border-gray-400 p-2">{student[subject]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-2xl font-semibold">Total:</h1>
              <div className="bg-gray-400 w-full h-10 rounded-lg overflow-hidden">
                <div
                  className="bg-black h-full"
                  style={{ width: student.Percentage }}
                ></div>
              </div>
              <span className="text-xl font-semibold">{student.Percentage}</span>
            </div>

            <div className="mb-6">
              <p><strong>Duty Leave:</strong> {student["Duty Leave"]}</p>
              <p><strong>Total Attendance:</strong> {student.Total}</p>
              <p><strong>Duty Leave Percentage:</strong> {student["Duty Leave Percentage"]}</p>
            </div>
          </div>
        );
      })}
      <div className="p-4">
            <h1 className="text-4xl text-center mb-8 font-jersey">TKM College of Engineering - Timetable</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-400 font-jersey">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 p-2 bg-gray-200">Day</th>
                            {Array.from({ length: 8 }, (_, i) => (
                                <th key={i} className="border border-gray-400 p-2 bg-gray-200">Period {i + 1}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(timetable).map(([day, periods]) => (
                            <tr key={day}>
                                <td className="border border-gray-400 p-2">{day}</td>
                                {Array.from({ length: 8 }, (_, i) => (
                                    <td key={i} className="border border-gray-400 p-2">
                                        {periods[`Period ${i + 1}`] || "Free Period"}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default AttendanceTable;
