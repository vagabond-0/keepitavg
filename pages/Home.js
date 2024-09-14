import React from 'react'

const AttendanceTable = () => {
  // JSON data
  const data = [
    {
      "Uni Reg No": "TKM22EC003",
      "Roll No": "B22ECB02",
      "Name": "ABHIJITH U ",
      "22ECT501": "21/23 (91%)",
      "22ECT502": "11/13 (85%)",
      "22ECT503": "15/18 (83%)",
      "22ECT504": "24/24 (100%)",
      "22HUT506": "8/9 (89%)",
      "22ECL508": "12/12 (100%)",
      "22ECL509": "15/15 (100%)",
      "22MNC512": "8/8 (100%)",
      "22ECHR511,I": "0/0 (N/A)",
      "Duty Leave": "0",
      "Total": "114/122",
      "Percentage": "93%",
      "Duty Leave Percentage": "0%"
    }
  ]
  const subjects = ["22ECT501", "22ECT502", "22ECT503", "22ECT504", "22HUT506", "22ECL508", "22ECL509", "22MNC512", "22ECHR511,I"]

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">TKM College of Engineering - Attendance</h1>
      
      {data.map((student, index) => (
        <div key={index} className="mb-6">
          {/* Student Information */}
          <div className="mb-6">
            <p><strong>Uni Reg No:</strong> {student["Uni Reg No"]}</p>
            <p><strong>Roll No:</strong> {student["Roll No"]}</p>
            <p><strong>Name:</strong> {student.Name}</p>
          </div>

          {/* Subjects Attendance */}
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

          {/* Total Attendance Progress Bar */}
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-2xl font-semibold">Total:</h1>
            <div className="bg-gray-400 w-full h-10 rounded-lg overflow-hidden">
              {/* Black bar representing percentage */}
              <div
                className="bg-black h-full"
                style={{ width: student.Percentage }} // Set width based on total percentage
              ></div>
            </div>
            <span className="text-xl font-semibold">{student.Percentage}</span>
          </div>

          {/* Other Details */}
          <div className="mb-6">
            <p><strong>Duty Leave:</strong> {student["Duty Leave"]}</p>
            <p><strong>Total Attendance:</strong> {student.Total}</p>
            <p><strong>Duty Leave Percentage:</strong> {student["Duty Leave Percentage"]}</p>
          </div>
        </div>
      ))}

<div className="p-4">
<h1 className="text-4xl  text-center mb-8 font-jersey">TKM College of Engineering - Timetable</h1>
<div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse border border-gray-400 font-jersey">
        <thead>
            <tr>
                <th className="border border-gray-400 p-2 bg-gray-200">Day</th>
                <th className="border border-gray-400 p-2 bg-gray-200">Period 1</th>
                <th className="border border-gray-400 p-2 bg-gray-200">Period 2</th>
                <th className="border border-gray-400 p-2 bg-gray-200">Period 3</th>
                <th className="border border-gray-400 p-2 bg-gray-200">Period 4</th>
                <th className="border border-gray-400 p-2 bg-gray-200">Period 5</th>
                <th className="border border-gray-400 p-2 bg-gray-200">Period 6</th>
                <th className="border border-gray-400 p-2 bg-gray-200">Period 7</th>
                <th className="border border-gray-400 p-2 bg-gray-200">Period 8</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border border-gray-400 p-2">Monday</td>
                <td className="border border-gray-400 p-2">22ECT502 - DIGITAL SIGNAL PROCESSING<br />[ Theory ]<br />VISHNU D</td>
                <td className="border border-gray-400 p-2">22ECT501 - LINEAR INTEGRATED CIRCUITS<br />[ Theory ]<br />NAJIA.A</td>
                <td className="border border-gray-400 p-2">22ECT503 - ANALOG AND DIGITAL COMMUNICATION<br />[ Theory ]<br />ZAREENA JAMALUDDIN</td>
                <td className="border border-gray-400 p-2">22HUT506 - MANAGEMENT FOR ENGINEERS<br />[ Theory ]<br />GANESHNATH R</td>
                <td className="border border-gray-400 p-2">22ECT504 - CONTROL SYSTEMS<br />[ Theory ]<br />AJITHA S S</td>
                <td className="border border-gray-400 p-2">22MNC512 - DISASTER MANAGEMENT<br />[ Theory ]<br />AISWARYA RAJ</td>
                <td className="border border-gray-400 p-2"></td>
                <td className="border border-gray-400 p-2"></td>
            </tr>
            <tr>
                <td className="border border-gray-400 p-2">Tuesday</td>
                <td className="border border-gray-400 p-2" colSpan="3">ANALOG INTEGRATED CIRCUITS AND SIMULATION LAB</td>
                <td className="border border-gray-400 p-2">22ECT503 - ANALOG AND DIGITAL COMMUNICATION<br />[ Theory ]<br />ZAREENA JAMALUDDIN</td>
                <td className="border border-gray-400 p-2">22ECT502 - DIGITAL SIGNAL PROCESSING<br />[ Theory ]<br />VISHNU D</td>
                <td className="border border-gray-400 p-2">22ECT504 - CONTROL SYSTEMS<br />[ Theory ]<br />AJITHA S S</td>
                <td className="border border-gray-400 p-2"></td>
                <td className="border border-gray-400 p-2"></td>
            </tr>
            <tr>
                <td className="border border-gray-400 p-2">Wednesday</td>
                <td className="border border-gray-400 p-2">22ECT504 - CONTROL SYSTEMS<br />[ Theory ]<br />AJITHA S S</td>
                <td className="border border-gray-400 p-2">22MNC512 - DISASTER MANAGEMENT<br />[ Theory ]<br />AISWARYA RAJ</td>
                <td className="border border-gray-400 p-2">22HUT506 - MANAGEMENT FOR ENGINEERS<br />[ Theory ]<br />GANESHNATH R</td>
                <td className="border border-gray-400 p-2">22ECT502 - DIGITAL SIGNAL PROCESSING<br />[ Theory ]<br />VISHNU D</td>
                <td className="border border-gray-400 p-2">22ECT501 - LINEAR INTEGRATED CIRCUITS<br />[ Theory ]<br />NAJIA.A</td>
                <td className="border border-gray-400 p-2" colSpan="3">Free Period</td>
            </tr>
            <tr>
                <td className="border border-gray-400 p-2">Thursday</td>
                <td className="border border-gray-400 p-2">22ECT501 - LINEAR INTEGRATED CIRCUITS<br />[ Theory ]<br />NAJIA.A</td>
                <td className="border border-gray-400 p-2">22ECT504 - CONTROL SYSTEMS<br />[ Theory ]<br />AJITHA S S</td>
                <td className="border border-gray-400 p-2">22ECT503 - ANALOG AND DIGITAL COMMUNICATION<br />[ Theory ]<br />ZAREENA JAMALUDDIN</td>
                <td className="border border-gray-400 p-2" colSpan="3">DIGITAL SIGNAL PROCESSING LAB</td>
                <td className="border border-gray-400 p-2" colSpan="2">Free Period</td>
            </tr>
            <tr>
                <td className="border border-gray-400 p-2">Friday</td>
                <td className="border border-gray-400 p-2">22ECT503 - ANALOG AND DIGITAL COMMUNICATION<br />[ Theory ]<br />ZAREENA JAMALUDDIN</td>
                <td className="border border-gray-400 p-2">22ECT502 - DIGITAL SIGNAL PROCESSING<br />[ Theory ]<br />VISHNU D</td>
                <td className="border border-gray-400 p-2">22ECT501 - LINEAR INTEGRATED CIRCUITS<br />[ Theory ]<br />NAJIA.A</td>
                <td className="border border-gray-400 p-2">Free Period</td>
                <td className="border border-gray-400 p-2">22HUT506 - MANAGEMENT FOR ENGINEERS<br />[ Theory ]<br />GANESHNATH R</td>
                <td className="border border-gray-400 p-2" colSpan="3">Free Period</td>
            </tr>
            <tr>
                <td className="border border-gray-400 p-2">Saturday</td>
                <td className="border border-gray-400 p-2" colSpan="8">Free Period</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
    </div>
  )
}

export default AttendanceTable
