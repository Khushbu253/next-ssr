import React from "react"

const PageNotFound = ({data}) => {
  console.log(data,"data at 404")
  const { pageNotFound } = data
  return (
    <div>
      <div className="error-404">
        <img src={data?.image?.url} alt="contact" />
      </div>
      <h4 className="error404-blk">{data?.heading}</h4>
      <div className="error-404-wrap">
        <div className="container">
          {data?.card.map(card => (
            
            <a href={card?.link} className="error-404-wrap-item">
             {card?.icon?.url && <img src={card?.icon?.url} alt="Home4" />}
               <h5>{card?.title}</h5>
              <p>{card?.subTitle}</p>
            </a>
          
          ))}
        </div>
      </div>
    </div>
  )
}
export default PageNotFound
