import Link from 'next/link'
import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import user1 from '../../assets/images/user1.jpg'



const OurBlog = ({OurBlog}) => {


    const blogs= OurBlog

    return (
        <section className="blog-area pb-100 pt-100 bg-fffbf5">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="blog" /> 
                        Our Blog
                    </span>
                    <h2>Latest Valuable Insights</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    {
                        blogs?.slice(0,3).map((blog, idx) => {
                            return(
                                <div className="col-lg-4 col-md-6" key={idx}>
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href={`/blogs/${blog?.id}`}>
                                            <img src={blog?.image?.formats?.small?.url || blog?.image?.url} alt="blog-image"></img>
                                                {/* <Image fluid={blog?.image?.formats?.small?.url || ''} /> */}
                                            </Link>
                                        </div>
                                        <div className="post-content">
                                            <ul className="post-meta d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                       {blog?.authorImage?.url && <img src={blog?.authorImage?.url} className="rounded-circle" alt="blog" />}
                                                        { blog?.author && <span>{blog?.author}</span>}
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className='flaticon-calendar'></i> {blog?.date}
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href={`/blogs/${blog?.id}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurBlog