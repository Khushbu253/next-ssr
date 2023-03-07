import React, { useState } from 'react'
import starIcon from '../../assets/images/star-icon.png'
import contact from '../../assets/images/cc-contact.png'
import axios from 'axios'
import * as urls from '../../utils/urls'
import Recaptcha from 'react-google-invisible-recaptcha';
import { siteKey } from '../../utils/config'
import isURL from 'validator/lib/isURL'
import Image from 'next/image'

var _contactUsObject;
var _contactFile;
const ContactForm = () => {
    const [ name, setname ] = useState('')
    const [ email, setemail ] = useState('')
    const [ phone, setphone ] = useState('')
    const [ website, setwebsite ] = useState('')
    const [ message, setmessage ] = useState('')
    const [ file,setFile] = useState(null)
    const recaptchaRef = React.useRef(null);
    const [loading, setloading] = useState(false)
    const [error,setError]=useState({
        website:"",
        file:"",
    })

    const submitContactForm = async (e) => {
     e.preventDefault();
        setloading(true)
        if(!name || !email || !phone || !website || !message) {
            alert('Some required fields are missing.')
            recaptchaRef.current.reset();
            return false
        }else{
            await recaptchaRef.current.execute();
        }
        const finalData={
            name,
            email,
            phone,
            website,
            message,
        }
    
        _contactUsObject = finalData;
        Object.freeze(_contactUsObject);
      
        _contactFile=file
        Object.freeze(_contactFile)
       
    }

   

    const onResolved= async ()=>{
        const response=recaptchaRef.current.getResponse()
        console.log('recaptcha response>>>>>>>>>',recaptchaRef.current.getResponse())
        console.log("_contactUsObject", _contactUsObject);
       
        let formData = new FormData();
        formData.append('data',JSON.stringify(_contactUsObject))
        formData.append('files.file',_contactFile)
        await axios({
                method: "post",
                url: urls.contact,
                data: formData,
            })
        .then((response) => {
            console.log(response)
            setloading(false)
            setname('')
            setemail('')
            setphone('')
            setwebsite('')
            setmessage('')
            setFile('')
        })
        .catch(error => {
            console.log(error.response.data)
            setloading(false)
        })
    }

    const validate = (e) => {
        setwebsite(e.target.value)
        
        if (e.target.value!=="" && !isURL(website)) {
           setError({...error,website:'Please Enter Valid URL'});
        }else{
            setError({...error,website:''})
        }
     };
    
     const validateFile=(e)=>{
       setFile(e.target.files[0])
       if(e.target.files[0] && e.target.files[0].size > 1048576 )
       {
        setError({...error,file:'File should be less then 1mb'})
       }else{
        setError({...error,file:""})
       }
     }
    
    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <Image src={starIcon} alt="contact" /> 
                        Get in Touch
                    </span>
                    <h1>We’re curious to hear about your project.</h1>
                    <p>Fill this form to tell us about your ecommerce goals, we’ll make it happen.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <Image src={contact} alt="contact" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form-2 p-4">
                            <form onSubmit={submitContactForm} id="contactForm" >
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                disabled={loading}
                                                value={name}
                                                onChange={e => setname(e.target.value)}
                                                className="form-control" 
                                                required 
                                                placeholder="Your name" 
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                disabled={loading}
                                                value={email}
                                                onChange={e => setemail(e.target.value)}
                                                className="form-control" 
                                                required 
                                                placeholder="Your email address" 
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="phone_number" 
                                                disabled={loading}
                                                value={phone}
                                                onChange={e => setphone(e.target.value)}
                                                className="form-control" 
                                                required 
                                                placeholder="Your phone number" 
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="phone_number" 
                                                value={website}
                                                disabled={loading}
                                                onChange={validate}
                                                className="form-control" 
                                                required 
                                                placeholder="Your website" 
                                            />
                                            <span style={{ 
                                                // fontWeight: 'bold',
                                                color: 'red',
                                                fontSize:'14px'
                                            }}>{error.website!=="" ? error.website : ""}</span>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                             <input 
                                                type="file" 
                                                name="file" 
                                                id="file"
                                                accept=".doc,.docx,.pdf"
                                               
                                                disabled={loading}
                                                value={file ? file.fileName : ""}
                                                onChange={validateFile}
                                                className="form-control"
                                            /> 
                                             
                                    
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group form-file-choice">
                                        <div class="custom-file mb-3">
                                            <input
                                            type="file"
                                            class="custom-file-input"
                                            accept=".doc,.docx,.pdf"
                                            name="resume"
                                            id="customFile"
                                            onChange={validateFile}
                                            />
                                            <label class="custom-file-label" for="customFile">
                                            {file?.name? file.name :
                                                "choose file to upload(.doc,.docx,.pdf)"}
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
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea 
                                                name="message" 
                                                className="form-control" 
                                                cols="30" 
                                                rows="6" 
                                                required 
                                                disabled={loading}
                                                placeholder="Write your message..." 
                                                onChange={e => setmessage(e.target.value)}
                                                value={message}
                                            >
                                                {message}
                                            </textarea>
                                        </div>
                                    </div>
                                    <Recaptcha
                                        ref={recaptchaRef}
                                        sitekey={siteKey}
                                        onResolved={onResolved} 
                                    />
                                    <div className="col-lg-12 col-md-12">
                                        <button disabled={loading} type="submit" className="default-btn tick-icon-button w-100">
                                                
                                                <div className='iconButton'><i className="flaticon-tick"></i>{loading ? 'Loading..' : 'Send Message'}  </div>  
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm