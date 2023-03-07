import React from 'react'


import starIcon from '../../assets/images/star-icon.png'
import shape from '../../assets/images/shape/circle-shape1.png'


const Process = ({howItWork}) => {

    

    const {
        subTitle, title, shortText, process
    } = howItWork 

    return (
        <section className="process-area work-process-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="Star Icon" /> 
                        {subTitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>

                <div className="row">
                    {process.map(list => (
                        <div className="col-lg-4 col-md-6" key={list.id}>
                            <div className="single-process-box">
                                <div className="number">
                                    {list.number}
                                </div>
                                <div className="image">
                                    <img 
                                        src={list.image?.formats?.small?.url || list.image?.url} 
                                        alt="Process Image" 
                                        className="process-image"
                                    />
                                </div>
                                <h3>{list.title}</h3>
                                <p>{list.shortText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="circle-shape1">
                <img src={shape} alt="about" />
            </div> */}
            
        </section>
    )
}

export default Process