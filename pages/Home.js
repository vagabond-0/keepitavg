import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
const AttendanceTable = () => {
  const [timetable, setTimetable] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('data');
    const storedTimetable = localStorage.getItem('timetable');
    const storedAttendance = localStorage.getItem('attendence');

    try {
      // Check if storedData is a valid JSON string before parsing
      const parsedData = typeof storedData === 'string' ? JSON.parse(storedData) : storedData;
      const parsedTimetable = typeof storedTimetable === 'string' ? JSON.parse(storedTimetable) : storedTimetable;
      const parsedAttendance = typeof storedAttendance === 'string' ? JSON.parse(storedAttendance) : storedAttendance;

      if (parsedData && parsedTimetable && parsedAttendance) {
        setData(parsedData);
        setTimetable(parsedTimetable);
        setLoading(false);
      } else {
        console.error('Data not found in localStorage');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error parsing JSON data:', error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className='grid items-center justify-center min-h-screen'>
        <CircularProgress />
      </div>
    );
  }

  if (!data || !timetable) {
    return <div>No data available</div>;
  }

  const subjects = Object.keys(data.attendence || {});

  return (
    <div className="p-6">
      <div className='flex justify-end '>
          <button className='font-jersey border-2 p-2 text-xl ' onClick={async()=>{
            localStorage.clear()
            await router.push('/');
      router.reload();
          }}> Log out</button>
        </div>
      <h1 className="text-4xl font-bold text-center mb-6">TKM College of Engineering - Attendance</h1>

      <div className="mb-6">
        <p><strong>Uni Reg No:</strong> {data["UNi Reg No"] || 'N/A'}</p>
        <p><strong>Roll No:</strong> {data["Roll No"] || 'N/A'}</p>
        <p><strong>Name:</strong> {data.Name || 'N/A'}</p>
      </div>
      
      <div className="overflow-x-auto p-4">
        <table className="table-auto w-full border-collapse border border-gray-400 mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-2">Subject Code</th>
              <th className="border border-gray-400 p-2">Current Attendance</th>
              <th className="border border-gray-400 p-2">Classes Needed</th>
              <th className="border border-gray-400 p-2">Projected Attendance</th>
            </tr>
          </thead>
          <tbody>
            {subjects.length > 0 ? (
              subjects.map((subject, index) => {
                const attendance = data.attendence[subject];
                return (
                  <tr key={index}>
                    <td className="border border-gray-400 p-2">{subject}</td>
                    <td className="border border-gray-400 p-2">{attendance?.current_attendance || 'N/A'}</td>
                    <td className="border border-gray-400 p-2">{attendance?.classes_needed || 'N/A'} {attendance?.type || ''}</td>
                    <td className="border border-gray-400 p-2">{attendance?.projected_attendance || 'N/A'}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">No attendance data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold">Total:</h1>
        <div className="bg-gray-400 w-full h-10 rounded-lg overflow-hidden">
          <div
            className="bg-black h-full"
            style={{ width: data.Percentage || '0%' }}
          ></div>
        </div>
        <span className="text-xl font-semibold">{data.Percentage || '0%'}</span>
      </div>

      <div className="mb-6">
        <p><strong>Duty Leave:</strong> {data["Duty Leave"] || 'N/A'}</p>
        <p><strong>Total Attendance:</strong> {data.Total || 'N/A'}</p>
        <p><strong>Duty Leave Percentage:</strong> {data["Duty Leave Percentage"] || 'N/A'}</p>
      </div>

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
                  {periods.map((period, index) => (
                    <td key={index} className="border border-gray-400 p-2">
                      {period || "Free Period"}
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
