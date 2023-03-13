import * as React from "react"

import { useState } from "react";
import { useRef } from "react";
import * as urls from "../../utils/urls"
import axios from "axios"
import { useEffect } from "react";
import isEmail from "validator/lib/isEmail";
import { Modal } from "react-bootstrap";
import Recaptcha from "react-google-invisible-recaptcha"
import { siteKey } from "../../utils/config"
import Layout from "@/components/App/Layout";
import PageBanner from "@/components/common/PageBanner";
import Footer from "@/components/App/Footer";
import Navbar from "@/components/App/Navbar";
var _jobObject;
var _jobFile;
var jobtital="";
function ProductCatchAll(props) {
  // console.log(props.jobdata,"check job data")
  const job = props?.jobdata;
  var jobtital=props?.jobdata?.heading;
  const [clickedJob, setClickedJob] = useState("")
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [currentJob, setCurrentJob] = useState(null)
    const [jobDetails,setJobDetails] = useState(null)
    const recaptchaRef = useRef(null)
    const [jobSnippet,setJobSnippet]=useState(null)
    const [applyFormData, setApplyFormData] = useState({
      appliedFor: "",
      name: "",
      email: "",
      phone: "",
      socialId: "",
      experiance: "",
      noticePeriod: "",
      resume: null,
      fileName: null,
    })
    const [error,setError]=useState({phone:"",file:"",email:""})
  
    useEffect(()=>{
     if(job?.jobDescription)
     {
       setJobDetails(job.jobDescription)
     }
    },[job])
  

    const handleApplyJob = e => {
      console.log(applyFormData, "on apply")
      setIsOpenModal(true)
      setCurrentJob(e.target.name)
      setApplyFormData({ ...applyFormData, appliedFor: e.target.name })
    }
    const fileChangeHandler = event => {

      const file = {
        preview: URL.createObjectURL(event.target.files[0]),
        data: event.target.files[0],
      }
      setApplyFormData({
        ...applyFormData,
        resume:file,
        fileName: event.target.files[0].name,
      })
      if( event.target.files[0] && event.target.files[0].size > 1048576 )
      {
       setError({...error,file:'File should be less then 1mb'})
      }else{
       setError({...error,file:""})
      }
    }


  const handlePhoneChange = (e) =>{
    if(e.target.value!=="" && e.target.value.length !== 10 ){
        setError({...error,phone:"Please Enter 10 Digit Phone Number"})
    }else{
      setError({...error,phone:""})
    }
    setApplyFormData({
      ...applyFormData,
      phone: e.target.value,
    })
  }


  const handleEmailChange =(e)=>{
    setApplyFormData({
      ...applyFormData,
      email: e.target.value,
    })
    if (e.target.value!=="" && !isEmail(e.target.value)) {
      setError({...error,email:'Please Enter Valid Email Address'});
   }else{
       setError({...error,email:''})
   }
  }
    const handleSendMessage = async e => {
      e.preventDefault()
      
  
        const {
        name,
        email,
        phone,
        socialId,
        experiance,
        noticePeriod,
        appliedFor,
        resume,
        fileName,
      } = applyFormData
      // let form = document.getElementById(currentJob)
  
  
      if (
        !name ||
        !email ||
        !phone ||
        !socialId ||
        !experiance ||
        !noticePeriod ||
        !resume
      ) {
        alert("Some required fields are missing.")
         recaptchaRef.current.reset();
        return false
      }else{
         await recaptchaRef.current.execute();
      }
      let finalData = {
        name,
        email,
        phone,
        socialId,
        experiance,
        noticePeriod,
        appliedFor,
      }
      _jobObject=finalData
      Object.freeze(_jobObject)
      _jobFile=resume.data
      Object.freeze(_jobFile)

  
      //  setIsLoading(true)
      
    }

    const onResolved = async()=>{
      console.log("recaptcha response >>>>",recaptchaRef.current.getResponse())
      console.log("_jobObject",_jobObject)
      let formData = new FormData()
      formData.append("data",JSON.stringify(_jobObject))
      formData.append("files.file", _jobFile)

      await axios({
        method: "post",
        url: urls.job,
        data: formData,
      })
        .then(({ data }) => {
          // console.log(JSON.stringify(data))
          setApplyFormData({})
        })
        .catch(error => {
          console.log(error)
          // setIsLoading(false)
        })
       setIsOpenModal(false)
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

    const checkValidation=()=>{
      if(error.email!=="" || error.phone!=="" || error.file!=="" ){
        return true
      }
      return false
    }


  let jobSnippetData={
      "@context" : "https://schema.org/",
      "@type" : "JobPosting",
      "title" :`${job?.heading}`,
      "description" : "<p>Google aspires to be an organization that reflects the globally diverse audience that our products and technology serve. We believe that in addition to hiring the best talent, a diversity of perspectives, ideas and cultures leads to the creation of better products and services.</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Google",
        "value": "1234567"
      },
      "datePosted" :`${ job?.created_at}`,
      "validThrough" : `${job?.lastDate}`,
      "employmentType" : "CONTRACTOR",
      "hiringOrganization" : {
        "@type" : "Organization",
        "name" : "Google",
        "sameAs" : "http://www.google.com",
        "logo" : "http://www.example.com/images/logo.png"
      },
      "jobLocation": {
      "@type":"Place",
        "address": {
        "@type": "PostalAddress",
        "streetAddress": "B-303-06, The First",
        "addressLocality": "Near ITC Narmada,Vastrapur",
        "addressRegion": "Ahmedabad",
        "postalCode": "380015",
        "addressCountry": "India"
        }
      },

    }
    useEffect(()=>setJobSnippet(jobSnippetData),[])
  return (
    <>
    <Head>
    <script type="application/ld+json">
   { JSON.stringify(jobSnippet)}
    </script>
    </Head>
    
    <Layout pageName="services">
      <Navbar/>
      <PageBanner />
      <div className="job-block-description container ">
      <div className="page-title-content mb-3">
                    <h2>{job?.heading}</h2>
                </div>
        <div className="sub-job-block-description">
        
        <div className="job-description">
          <p className="career-description" dangerouslySetInnerHTML={{__html:jobDetails}} />
        </div>
        <div className="job-block">
          <ul>
            <li>
              <p>Job Title</p>
              <span>: </span>
              <b>&nbsp;{job?.heading}</b>
            </li>
            <li>
              <p>Experience</p>
              <span>: </span>
              <b>&nbsp;{job?.workExperience}</b>
            </li>
            <li>
              <p>No Of Position</p>
              <span>: </span>
              <b>&nbsp;{job?.currentOpening}</b>
            </li>
            <li>
              <p>Location</p>
              <span>:</span>
              <b>&nbsp;{workLocation(job?.location)}</b>
            </li>
          </ul>
         
        </div>
        <div className="button-part d-flex align-items-center justify-content-center mt-3 mb-2">
          <a  className="default-btn d-flex align-items-cente justify-content-center" style={{cursor:'pointer', padding:'12px 25px 12px 25px'}}
              value={job?.heading}
              name={job?.heading}
              onClick={handleApplyJob}
          >Apply Now
            </a>
        </div>
        </div>
      
      </div>

      <Modal
          show={isOpenModal}
          onHide={() => setIsOpenModal(false)}
          size="lg"
          className="applyNowModal"
        >
          <Modal.Header closeButton className="px-4">
            <Modal.Title>
              Apply Job For <span>{currentJob}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4">
            <div className="career-form">
              <form
                method="post"
                onSubmit={handleSendMessage}
                id={currentJob}
                name={currentJob}
              >
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={applyFormData.name}
                        onChange={e =>
                          setApplyFormData({
                            ...applyFormData,
                            name: e.target.value,
                          })
                        }
                        className="form-control"
                        required
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        value={applyFormData.email}
                        onChange={handleEmailChange}
                        className="form-control"
                        required
                        placeholder="Your Email"
                      />
                       <span style={{  color: 'red',
                                                fontSize:'14px',
                                                marginTop:"10px"
                                            }}>{error.email!=="" ? error.email : ""}</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="number"
                        name="phone"
                        value={applyFormData.phone}
                        onChange={handlePhoneChange}
                        className="form-control"
                        required
                        placeholder="Your Mobile Number"
                      />
                       <span style={{  color: 'red',
                                                fontSize:'14px',
                                                marginTop:"10px"
                                            }}>{error.phone!=="" ? error.phone : ""}</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="social"
                        value={applyFormData.socialId}
                        onChange={e =>
                          setApplyFormData({
                            ...applyFormData,
                            socialId: e.target.value,
                          })
                        }
                        className="form-control"
                        required
                        placeholder="Social ID (Skype/Whatsapp/etc...)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="no"
                        name="experiance"
                        value={applyFormData.experiance}
                        onChange={e =>
                          setApplyFormData({
                            ...applyFormData,
                            experiance: e.target.value,
                          })
                        }
                        className="form-control"
                        required
                        placeholder="Your Technical Experience"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="no"
                        name="noticePeriod"
                        value={applyFormData.noticePeriod}
                        onChange={e =>
                          setApplyFormData({
                            ...applyFormData,
                            noticePeriod: e.target.value,
                          })
                        }
                        className="form-control"
                        required
                        placeholder="Your Notice Period"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <div class="custom-file mb-3">
                        <input
                          type="file"
                          class="custom-file-input"
                          accept=".doc,.docx,.pdf"
                          name="resume"
                          id="customFile"
                          onChange={fileChangeHandler}
                        />
                        <label class="custom-file-label" for="customFile">
                          {applyFormData.fileName
                            ? applyFormData.fileName
                            : "Attached cv/resume"}
                        </label>
                        <lable class="browse">Choose File</lable>
                        <span style={{ 
                                                // fontWeight: 'bold',
                                                color: 'red',
                                                fontSize:'14px',
                                                marginTop:"10px"
                                            }}>{error.file!=="" ? error.file : ""}</span>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div className="button-part d-flex align-items-center mt-3 mb-2">
                  <button
                    className="default-btn"
                    // disabled={isLoading}
                    type="submit"
                    disabled={checkValidation()}
                  >
                    Send Message
                    <span></span>
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
        <Recaptcha
                   ref={recaptchaRef}
                   sitekey={siteKey}
                   onResolved={onResolved} 
                   style={{position:"fixed"}}
                />
      <Footer footer={props.footer} />
    </Layout>
    </>
  )
}

export default ProductCatchAll
// export const Head = () => <title>{window.history?.state?.job}</title>;
export async function getServerSideProps(context){
  try {
    const footer = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}address`);
    const jobdata = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}job-openings/${context.params.id}`);
    
    
    return {
      props: {
        footer: await footer.json(),
        jobdata: await jobdata.json()
      },
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}


