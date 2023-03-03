import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import { useState } from 'react';
import Loadable from '@loadable/component'
import { Carousel, Modal } from 'react-bootstrap';
import { useEffect } from 'react';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))


const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  autoplay: true,
  margin: 20,
  navText: [
      "<i class='flaticon-left-1'></i>",
      "<i class='flaticon-right-1'></i>"
  ],
  responsive: {
      0: {
          items:1 ,
      },
      768: {
          items: 1,
      },
      992: {
          items: 1,
      }
  }
};

const PhotoGallery=({PhotoGallery})=>{
  
   
    const [showCarousel, setShowCarousel] = useState(false)
    const [activeGallary, setActiveGallary] = useState([])
    const [windowsWidth,setWindowsWidth]=useState(null)

    const getWindowsWidth = ()=>{
      const width = window.innerWidth
      setWindowsWidth(width)
    }

    useEffect(()=>{
      getWindowsWidth()
      window.addEventListener('resize',getWindowsWidth)  
    },[])
    const {title,heading,description,mainImage,gallaryImages, mainImageLightbox}= PhotoGallery

    const result = gallaryImages.reduce((resultArray, item, index) => { 
      const chunkIndex = windowsWidth > 768 ?  Math.floor(index/4) : Math.floor(index/1)
    
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }
    
      resultArray[chunkIndex].push(item)
    
      return resultArray
    }, [])
    const addGallary = images => {
        console.log(images)
        setActiveGallary(images)
        setShowCarousel(true)
      }
    
  return(
    <section className="photo-gallery pt-70">
        <div className="container">
            <div className="section-title">
                {/* <span className='sub-title'>{title}</span> */}
                <h2>{heading}</h2>
                {/* <p>{description}</p> */}
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='hoverImage office-bigimage'>
                        <img src={mainImage?.url} alt="office"
                        // onClick={() => addGallary(mainImageLightbox)}
                        ></img>
                    </div>
                </div>
               <div className='col-md-6 '>
                <OwlCarousel className="Feedback-slider owl-carousel owl-theme" {...options}>
                 {result.map((gallary,i)=>
                 <div className='row'>
                  { gallary.map((image)=><div className='col-md-6'>
                            <div className='hoverImage'>
                                <img src={image?.image?.url} alt="office" 
                                 onClick={() => addGallary(image?.lightbox)}></img>
                            </div>
                        </div>)}
                </div>
               )} </OwlCarousel>
               </div>
                
            </div>
        </div>
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter "
        centered
        show={showCarousel}
        onHide={() => setShowCarousel(false)}
        className='feedback-slider-wrap'
      >
        <Modal.Body>
          <Carousel>
            {activeGallary.map(image => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image.url}
                  alt="Image Two"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  )
}

export default PhotoGallery