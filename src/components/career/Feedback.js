import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Clientimage1 from "../../assets/images/career/Clientimage1.png"
import Clientimage2 from "../../assets/images/career/Clientimage2.png"
import Clientimage3 from "../../assets/images/career/Clientimage3.png"
import Loadable from '@loadable/component'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Image from 'next/image'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))


const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 20,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
};


const Feedback = ({Feedback}) => {
    // Carousel
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    

    const {
        title,
        heading,
        description,
        card
    } = Feedback 

    return (
        <div className='Feedback-wrapper'>
            <div className='container'>
                <div className='row main-row'>
                    <div className='col-md-4'>
                        <div className="section-title">
                            <span className='sub-title'>{title}</span>
                            <h2>{heading}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='Feedback-slider-wrapper feedback_slider_wrap'>
                            <OwlCarousel className="Feedback-slider owl-carousel owl-theme" {...options}> 
                                { card.map((c)=> <div className="single-testimonials-item">
                                    <div className="client-detail">
                                        <p>{c.message}</p>
                                        <div className="client-info">
                                            <div className="title">
                                                <h3>{c.name}</h3>
                                                <span>{c.designation}</span>
                                            </div>
                                            <img className='client-img' src={c?.image?.url} alt="ClientimageOne"></img>
                                        </div>
                                    </div>
                                </div>)}
                               
                                <div className="single-testimonials-item">
                                    <div className="client-detail">
                                        <p>“We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.”</p>
                                        <div className="client-info">
                                            <div className="title">
                                                <h3>Richard Smith</h3>
                                                <span>Android Developer</span>
                                            </div>
                                            <Image className='client-img' src={Clientimage2} alt="ClientimageTwo"></Image>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <div className="client-detail">
                                        <p>“We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.”</p>
                                        <div className="client-info">
                                            <div className="title">
                                                <h3>Johnson Villiams</h3>
                                                <span>Magento Developer</span>
                                            </div>
                                            <Image className='client-img' src={Clientimage3} alt="ClientimageThree"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <div className="client-detail">
                                        <p>“We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.”</p>
                                        <div className="client-info">
                                            <div className="title">
                                                <h3>John Deo</h3>
                                                <span>PHP Developer</span>
                                            </div>
                                            <Image className='client-img' src={Clientimage1} alt="ClientimageOne"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <div className="client-detail">
                                        <p>“We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.”</p>
                                        <div className="client-info">
                                            <div className="title">
                                                <h3>Richard Smith</h3>
                                                <span>Android Developer</span>
                                            </div>
                                            <Image className='client-img' src={Clientimage2} alt="ClientimageTwo"/>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
