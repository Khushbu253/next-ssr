import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ServicesTabImage from '../../assets/images/services/service-tab.png'
const ServicesTab = () =>{
return(
    <section className='pt-70 pb-70'>
        <div className='serviceTabPart '>
            <Tabs 
                defaultActiveKey="New"
                id="uncontrolled-tab-example"
                className="container"
                >
                <Tab eventKey="New" title="New">
                    <div className='container tab-content-body'>
                        <div className='row'>
                            <div className='col-md-8' style={{marginBottom:'30px'}}>
                            <ul>
                            <li>
                                <b>Customer :</b>
                                <p>Startup Businesses or Existing Business going online</p>
                            </li>
                            <li>
                                <b>Objective :</b>
                                <p>To Launch a new ecommerce site with required functionality</p>
                            </li>
                            <li>
                                <b>Needs :</b>
                                <p>Customize Magento application for business processes and Target Audience</p>
                            </li>
                            <li>
                                <b>Services :</b>
                                <p>Consulting, Design, Development, integration, Data import, Deployment</p>
                            </li>
                            <li>
                                <b>Contact :</b>
                                <p>Magento Solution Specialist to turn your ideas into business.</p>
                            </li>
                        </ul>
                            </div>
                            <div className='col-md-4'>
                                <img src={ServicesTabImage} alt="serviceTab"></img>
                            </div>
                        </div>
                       


                   </div>
                </Tab>
                <Tab eventKey="Migrate" title="Migrate">
                   <div className='container tab-content-body'>
                   <div className='row'>
                    <div className='col-md-8'>
                        <ul>
                            <li>
                                <b>Customer :</b>
                                <p>Startup Businesses or Existing Business going online</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                         <img src={ServicesTabImage} alt="serviceTab"></img>
                     </div> 
                    </div>
                   
                   </div>
                  
                </Tab>
                <Tab eventKey="Revamp" title="Revamp">
                    <div className='container tab-content-body'>
                    <div className='row'>
                        <div className='col-md-8'>
                        <ul>
                            <li>
                                <b>Customer :</b>
                                <p>Startup Businesses or Existing Business going online</p>
                            </li>
                            <li>
                                <b>Objective :</b>
                                <p>To Launch a new ecommerce site with required functionality</p>
                            </li>
                            <li>
                                <b>Needs :</b>
                                <p>Customize Magento application for business processes and Target Audience</p>
                            </li>
                            <li>
                                <b>Services :</b>
                                <p>Consulting, Design, Development, integration, Data import, Deployment</p>
                            </li>
                            <li>
                                <b>Contact :</b>
                                <p>Magento Solution Specialist to turn your ideas into business.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                                <img src={ServicesTabImage} alt="serviceTab"></img>
                 </div>
                    </div>
                   </div>
                 
                </Tab>
                <Tab eventKey="Support" title="Support">
                    <div className='container tab-content-body'>
                    <div className='row'>
                            <div className='col-md-8'>
                        <ul>
                            <li>
                                <b>Customer :</b>
                                <p>Startup Businesses or Existing Business going online</p>
                            </li>
                            <li>
                                <b>Objective :</b>
                                <p>To Launch a new ecommerce site with required functionality</p>
                            </li>
                            <li>
                                <b>Needs :</b>
                                <p>Customize Magento application for business processes and Target Audience</p>
                            </li>
                            <li>
                                <b>Services :</b>
                                <p>Consulting, Design, Development, integration, Data import, Deployment</p>
                            </li>
                            <li>
                                <b>Contact :</b>
                                <p>Magento Solution Specialist to turn your ideas into business.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-4'>
                                <img src={ServicesTabImage} alt="serviceTab"></img>
                            </div>
                    </div>
                   </div>
                   
                </Tab>
            </Tabs>
        </div>
        
       
    </section>
    )
}
export default ServicesTab