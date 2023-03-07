import React, { useEffect, useMemo, useState } from "react"
import starIcon from "../../assets/images/star-icon.png"
import Modal from "react-bootstrap/Modal"
import Carousel from "react-bootstrap/Carousel"
import { Dropdown, DropdownButton } from "react-bootstrap"
import ImageViewer from "react-simple-image-viewer"
import leftArrow from "../../assets/images/left-arrow.svg"
import rightArrow from "../../assets/images/right-arrow.svg"




const Portfolio = ({portfolio,portfolioProjects}) => {

  const [projectData, setProjectData] = useState([])
  
  const [showCarousel, setShowCarousel] = useState(false)
  const [activeGallary, setActiveGallary] = useState([])
  const [viewerImages, setViewerImages] = useState([])
   
  const [selectedTechnology,setSelectedTechnology]=useState('All Technology')
  const [filteredProjects,setFilteredProjects]=useState([])
  const[eCommerceProjects,setECommerceProjects]=useState([]);
  const[mobileProjects,setMobileProjects]=useState([]);
  
  useEffect( () => {
   
    if (portfolioProjects) {
        
      const projects  = portfolioProjects
      if (projects.length) {
        sortProjects(projects)
      }
      // else
      // setHasMore(false)
      }
  }, [portfolioProjects])



  const sortProjects =(projects)=>{
   const data=[...projectData, ...projects]
    const sortedData=data.sort((a,b)=>a.displayOrder-b.displayOrder)
    
    const eCommerce=sortedData.filter((project)=>project.technology==='E-commerce')
      setECommerceProjects(eCommerce)
    const mobileApp=sortedData.filter((project)=>project.technology==='Mobile-Applications')
      setMobileProjects(mobileApp)
      setProjectData(sortedData)
      setFilteredProjects(sortedData)
    
  }

  const  { subTitle, title, shortText }= portfolio
  
  const addGallary = images => {
    let srcs = []
    images.map(img => srcs.push(img.url))
    setViewerImages(srcs)
    setShowCarousel(true)
  }

  const technologies=projectData.map((project)=>project.technology)
  // const fetchMoreProjects=()=>{
  //   setOffset(projectData.length)
  // }

  const handleTechnology=(e)=>{
    setSelectedTechnology(e)
  }
  const handleProjectFilter = () => {
    
    if (selectedTechnology === 'All Technology') {
     setFilteredProjects(projectData)
    } else {
      const list = projectData.filter(
        project =>
         project.technology === selectedTechnology
      )
      setFilteredProjects(list)
    }
  }

  // const displayProjects = (selectedTechnology === 'E-commerce') ? eCommerceProjects 
  // : (selectedTechnology === 'Mobile-Applications') ?  mobileProjects : filteredProjects

  return (
    <section className="projects-area bg-f1f8fb pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src={starIcon} alt="project" /> {subTitle}
          </span>
          <h2>{title}</h2>
          {/* <p>{shortText}</p> */}
        </div>

          <div className="filter-part portfolioPage-filter-part">
            <DropdownButton
              id="dropdown-basic-button"
              title={selectedTechnology}
              value={selectedTechnology}
              onSelect={handleTechnology}
            >
              <Dropdown.Item eventKey='All Technology'>All Technology</Dropdown.Item> 
              {[...new Set(technologies)].map(tech => (
                <Dropdown.Item eventKey={tech}>{tech}</Dropdown.Item>
              ))}
            </DropdownButton>
          
            <button className="cc-button-part" onClick={handleProjectFilter}>
              Find
            </button>
          </div>

        {/* <InfiniteScroll
          dataLength={projectData.length}
          next={hasMore ? fetchMoreProjects : false}
          hasMore={hasMore}
          loader={<h4>loading....</h4>}
          scrollThreshold={0.5}
        > */}
          <div className="row justify-content-center pt-100">
            {filteredProjects.map((project, index) => {
              return (
                <div className="col-lg-4 col-md-6 d-flex" key={index}>
                  <div className="single-projects-box">
                    <div>
                      <img
                        src={
                          project.image?.formats?.small?.url ||
                          project.image?.url
                        }
                        onClick={() => addGallary(project.lightBox)}
                        alt="Project Image"
                      />
                      {/* <Link className="link-btn" to={`/projects/${project.slug}`}>
                      <i className="bx bx-plus"></i>
                    </Link> */}
                    </div>
                    <div className="content mt-auto">
                      <h3>
                        <a onClick={()=>setShowCarousel(true)}>
                          {project.title}
                        </a>
                      </h3>
                      <span onClick={()=>setShowCarousel(true)}>{project.subTitle}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        {/* </InfiniteScroll> */}
      </div>

      <Modal className="work-model fusi-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter "
        centered
        show={showCarousel}
        onHide={() => setShowCarousel(false)}
        // className=""
      >
        <ImageViewer
          src={viewerImages}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          closeOnClickOutside={true}
          onClose={() => {
            setShowCarousel(false)
          }}
          leftArrowComponent={<img src={leftArrow} />}
          rightArrowComponent={<img src={rightArrow} />}
        />
        {/* <Modal.Body>
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
        </Modal.Body> */}
      </Modal>
 </section>
  )
}

export default Portfolio
