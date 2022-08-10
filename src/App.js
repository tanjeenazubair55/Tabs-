import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([]);
  const [value,setValue] = useState(0)
  const [loading,setLoading] = useState(true)

  const fetchJobs = async () =>{
    const data = await fetch(url);
    const response = await data.json();
    console.log(response)
    setJobs(response);
    setLoading(false);
  }
  useEffect (()=>{
    fetchJobs();
  },[])

  if(loading){
    return (
      <section className='section-loading'>
        <h2>Loading...</h2>        
      </section >
    )
  }
  const {company, dates, duties, title} = jobs[value]
  return (
      <section className='section'>
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {
              jobs.map((item,index)=>{
                return <button className={`job-btn $(index === value && 'active-btn')`} key={item.id} onClick={()=>{
                  setValue(index)
                }} >{item.company} </button>
              })
            }
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates} </p>
            {duties.map((duty,index)=>{
               return(
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty} </p>
                </div>
               )
            })}
          </article>
        </div>
      </section>
    )
}

export default App
