import React, { useCallback, useEffect, useMemo, useState } from "react"

import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import moment from "moment"
import format from "moment"
import ArrowBlack from './../../assets/images/career/ArrowBlack.png'
import linkedIn from '../../assets/images/linkedIn.svg'
import location from "../../assets/images/location.png"
import Link from "next/link"
import Image from "next/image"

const CurrentOpening = ({CurrentOpening}) => {

  const [selectedJobDepartment, setSelectedJobDepartment] = useState("All")
  const [selectedLocation,setSelectedLocation] = useState("All")
  const [jobs, setJobs] = useState([])
  const [filteredJob, setFilteredJob] = useState([])

  useEffect(() => {
    if ( CurrentOpening) {


      const activeJobs = CurrentOpening?.filter(job => {
        const currentDate = moment().format("YYYY-MM-DD")
        // console.log("currentDate", currentDate);
        return job?.isActive && job?.lastDate > currentDate
      })
      // const activeJobs = CurrentOpening
      // console.log("job2",CurrentOpening);
      setJobs(activeJobs)
      setFilteredJob(activeJobs)
    }
  }, [ CurrentOpening])
  const jobDepartment = jobs?.map(job => job?.department)
  const jobLocation = jobs?.map(job=>job?.location)
  const handleJobDepartmentChange = e => {
     const value = workDepartment(e)
    setSelectedJobDepartment(e)
    }

  const handleLocationChange = e => {
    const value = workLocation(e)
    setSelectedLocation(value)
  }

  const handleJobFilter = () => {
   
    let list
    console.log("jobs",jobs);
    if (selectedJobDepartment === "All" && selectedLocation === "All") {
      list = jobs
      
    } else if(selectedJobDepartment === "All"){  
      list = jobs.filter((job)=>workLocation(job?.location) === selectedLocation || workDepartment(job?.department) === selectedJobDepartment)
    }
    else if(selectedLocation==="All"){
      list = jobs.filter(job=>workDepartment(job?.department) === selectedJobDepartment || workLocation(job?.location)=== selectedLocation
        )
    }
    else{
      list = jobs.filter(
        job =>
        workDepartment(job?.department) === selectedJobDepartment &&
        workLocation(job?.location)=== selectedLocation
          // job?.workExperiance === selectedLocation
      )}
      setFilteredJob(list)
  }

    const workLocation = (location)=>{
      if(location === "workFromOffice"){
        return "Work From Office (Ahmedabad)"
      }else if(location === 'hybrid'){
        return "Hybrid"
      }else if(location === 'remote'){
        return "Remote"
      }return location
     
    }

    const workDepartment = (department) =>{
      switch(department){
        case "creative":
          return "Creative"
        case "sales":
          return "Sales"
        case "mobile":
          return "Mobile"
        case "web":
          return  "Web"
        case "humanResources":
          return "Human Resources" 
        case "digitalMarketing":
          return "Digital Marketing"
        case "operations":
          return "Operations"
        case "infrastructure":
            return "Infrastructure"
        default : 
          return department
      }
    }

  return (
    <div>
      <section className="services-area hiring-career-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>We’re Hiring</h2>
            <p>
            Hey Digital Ninjas! Land on your dream opportunity here. Choose your preferred positions and search for current job openings.
            </p>
          </div>
         
          <div className="filter-part">
            <div className="filter-blk">
            <lable>Department</lable>
            <DropdownButton
              id="dropdown-basic-button"
              title={workDepartment(selectedJobDepartment)}
              value={()=>workDepartment(selectedJobDepartment)}
              onSelect={handleJobDepartmentChange}
            >
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
              {[...new Set(jobDepartment)].map(job => (
                <Dropdown.Item eventKey={workDepartment(job)}>{workDepartment(job)}</Dropdown.Item>
              ))}
            </DropdownButton>
            </div>
            <div className="filter-blk">
            <lable>Location</lable>
            <DropdownButton
              id="dropdown-basic-button"  
              title={workLocation(selectedLocation)}
              value={()=>workLocation(selectedLocation)}
              onSelect={handleLocationChange}
            >
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
              {[...new Set(jobLocation)].map(job => (
                <Dropdown.Item eventKey={workLocation(job)}>{workLocation(job)}</Dropdown.Item>
              ))}
            </DropdownButton>
            </div>
            
            
            <button className="cc-button-part filter-btn" onClick={handleJobFilter}>
              Find Job
            </button>
          </div>
        </div>
      </section>
     
      <section className="open-position pb-70 bg-fafafa">
      <div className="linkedIn-jobs">
        <h3>Follow Us On<a href="https://www.linkedin.com/company/cybercom-creation/"  target="_blank">
          <Image className="linkedInLogo" src={linkedIn} alt="linked in"></Image></a>For The Latest Job Opportunities</h3>
      </div>
        <div className="container jobSection">
        
          {filteredJob?.length > 0 ? (
            filteredJob?.map(job => {
              return (
                <>
                  <div className="jobs">
                    <Link href={`/job-openings/${job.id}`} state={{ job: job?.heading }}
                      className=' default-btn cc-btn jobButton'>
                      <div>
                        <h6>{job?.heading}</h6>
                        <div className="exp-time-part d-flex">
                          <p>Experiance : &nbsp;</p>
                          <p className="technology-name">
                            {job?.workExperience}
                          </p>
                        
                        </div>
                        <div className="location">
                         <Image src={location} className="location-icon"></Image>
                          <p>{workLocation(job?.location)}</p>
                          </div>
                      </div>
                      <div>
                        <a
                        className="arrow-icon"
                          value={job?.heading}
                          name={job?.heading}
                          // onClick={handleApplyJob}
                        >
                          <Image src={ArrowBlack} alt="arrow"/>
                          <span></span>
                        </a>
                      </div>
                    </Link>
                  </div>
                  {/* <Accordion defaultActiveKey={0}>
                    <Accordion.Item eventKey={job.key}>
                      <Accordion.Header
                        onClick={() => handleHeader(job.heading)}
                      >
                        <div className="d-flex justify-content-between w-100">
                          <div>
                            <h6>{job.heading}</h6>
                            <div className="exp-time-part d-flex">
                              <p className="technology-name">
                                {job.workExperiance} |
                              </p>
                              <p className="available-time mx-2">
                                {job.workType}
                              </p>
                            </div>
                          </div>
                          <div className="button-part d-flex align-items-center">
                            {showApply && clickedJob === job.heading ? (
                              <a
                                className="default-btn cc-btn"
                                value={job.heading}
                                name={job.heading}
                                onClick={handleApplyJob}
                              >
                                Apply Now
                                <span></span>
                              </a>
                            ) : (
                              <a href="#" className="mx-4 hide-show-link">
                                View Details<i className="flaticon-right"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="block-description d-flex ">
                          <div className="job-description">
                            <strong className="career-title">
                              Job Description :
                            </strong>
                            <p className="career-description">
                              {job.description}
                            </p>
                          </div>
                          <div className="job-block">
                            <ul>
                              <li>
                                <p>Job Title</p>
                                <span>:</span>
                                <b>{job.heading}</b>
                              </li>
                              <li>
                                <p>Experience</p>
                                <span>:</span>
                                <b>{job.workExperiance}</b>
                              </li>
                              <li>
                                <p>No Of Position</p>
                                <span>:</span>
                                <b>{job.currentOpening}</b>
                              </li>
                              <li>
                                <p>Location</p>
                                <span>:</span>
                                <b>{job.location}</b>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <strong className="career-title">
                          Roles & Responsibilllity :{" "}
                        </strong>
                        <ul>
                          {job.coreResponsibility.map(res => (
                            <li>{res.role}</li>
                          ))}
                        </ul>
                        <strong className="career-title">Eligibility</strong>
                        <ul>
                          {job.eligible.map(el => (
                            <li>{el.eligibleFor}</li>
                          ))}
                        </ul>
                        <strong className="career-title">
                          Technical Experiance :
                        </strong>
                        <ul>
                          {job.techExperiance.map(tech => (
                            <li>{tech.tech}</li>
                          ))}
                        </ul>
                        {/* <strong className="career-title">
                          Office Location:
                        </strong>
                        <p className="career-description">{job.location}</p>

                        <strong className="career-title">
                          Current Opening:
                        </strong>
                        <p className="career-description">
                          {job.currentOpening}
                        </p> */}
                  {/* </Accordion.Body>
                    </Accordion.Item>
                  </Accordion> */}
                </>
              )
            })
          ) : (
            <div className="error-text">
              <p >No Job Openings For This criteria...!</p>
            </div>
          )}
        </div>
       
      </section>
    </div>
  )
}
export default CurrentOpening
