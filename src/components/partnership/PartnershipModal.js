import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import OrangeMan from '../../assets/images/partnership/orangeMan.png'
import WhiteMan from '../../assets/images/partnership/whiteMan.png'
import Image from 'next/image';



const PartnershipModal = ({partnershipModal}) => {
    
    const partnership=partnershipModal
    
    return (
        <div className="project-start-area partnershipModal custom-project-area ptb-100">
        <div className="container">
            <div className="project-start-content pb-70">
                <h2>{partnership.heading}</h2>
            </div>
            <div className='row'>
                <div className='col-lg-8 col-md-12'>
                    <div className='table-responsive'>
                    <table>
                        <thead>
                            <tr>
                            {partnership.columns.map((column)=><th>{column.columnName}</th>)}
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lead Generation</td>
                                <td>
                                    <div>
                                        <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                    </div>
                                   
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan'/>
                                    <Image src={OrangeMan} alt="man" className='orangeMan'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Sales Quotation</td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan'/>
                                    <Image src={OrangeMan} alt="man" className='orangeMan'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Consultation</td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan'/>
                                    <Image src={OrangeMan} alt="man" className='orangeMan'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Development</td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan'/>
                                    <Image src={OrangeMan} alt="man" className='orangeMan'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                            </tr>
                            <tr>
                                <td>QA & Delivery</td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan'/>
                                    <Image src={OrangeMan} alt="man" className='orangeMan'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Reporting Client</td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan'/>
                                    <Image src={OrangeMan} alt="man" className='orangeMan'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Receiving Payment</td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan'/>
                                    <Image src={OrangeMan} alt="man" className='orangeMan'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                            </tr>
                            <tr>
                                <td>After sales Support</td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan singleItemWhite'/>
                                </td>
                                <td>
                                    <Image src={WhiteMan} alt="man" className='whiteMan'/>
                                    <Image src={OrangeMan} alt="man" className='orangeMan'/>
                                </td>
                                <td>
                                    <Image src={OrangeMan} alt="man" className='orangeMan singleItemOrange'/>
                                </td>
                            </tr>
                            <tr>
                                <td>Sharing</td>
                                <td>Cost {'>>'} Quote</td>
                                <td>Cost + % Markup</td>
                                <td>% commission</td>
                                <td>% commission</td>
                            </tr>
                        </tbody>
                        
                    </table>
                    </div>
                    <div className='identify-symbol'>
                        <div className='intro'>
                            <Image src={WhiteMan} alt="white"></Image>
                            Partner
                        </div>
                        <div className='intro'>
                            <Image src={OrangeMan} alt="orange"></Image>
                            Team Cybercom
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='partnershipModal-list-part'>
                        <h5>{partnership.advantageText}</h5>
                        <ul>
                            {partnership.advantages.map((advantage)=><li>{advantage.advantage}</li>)}
                           
                        </ul>
                        <div className='information-part'>
                            <h5 className='information-title'>{partnership.subtitle}</h5>
                           {partnership.intl && <div className='field'>
                                <label>Intl: </label>
                                <a href="">{partnership.intl}</a>
                            </div>}
                           { partnership.india && <div className='field'>
                                <label> India: </label>
                                <a href="">&nbsp; { partnership.india}</a>
                            </div>}
                          {partnership.email&&   <div className='field'>
                                <a href="">{partnership.email}</a>
                            </div>}

                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
     
    </div>
    )
}

export default PartnershipModal;