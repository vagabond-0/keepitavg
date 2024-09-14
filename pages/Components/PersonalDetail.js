import {React,useRef} from 'react'

const PersonalDetail = () => {

  const dateSection = useRef(null)
  const handlenameSubmit = (e)=>{
    if(e.key === 'Enter'){
      dateSection.current.scrollIntoView({behaviour:'smooth'})
    }
  }

  return (
    <div className = "w-screen h-screen p-4 flex flex-col">
        <div>
            <h1 className="font-jersey text-4xl">Enter your Details</h1>
        </div>
        <div className="w-full h-full  font-jersey text-6xl overflow-y-auto snap-y snap-mandatory " >
            <div className="snap-center flex flex-col justify-center items-center  h-screen w-screen">
                <h1>What Is Your Name?</h1>
                <input type="text"  className="outline-none border-b-2 border-solid border-black" onKeyDown={handlenameSubmit}/>
            </div>
            <div ref={dateSection} className="snap-center h-screen w-screen flex flex-col justify-center items-center gap-10">
                <h1>Sem Start Date</h1>
                <input type="Date"  className="outline-none border-b-2 border-solid border-black"/>
                <h1>Sem End Date</h1>
                <input type="Date"  className="outline-none border-b-2 border-solid border-black"/>
                <button className="w-36 text-2xl h-160 rounded-2xl p-2 bg-black text-white">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default PersonalDetail