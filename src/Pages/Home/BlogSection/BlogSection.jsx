import React from 'react'
import './BlogSection.css'

// images 
import s1 from '../../../../public/Images/s1.jpg'
import s2 from '../../../../public/Images/s2.jpg'
import s3 from '../../../../public/Images/s3.jpg'
import s4 from '../../../../public/Images/s4.jpg'
import { ArrowRight } from 'react-bootstrap-icons'

function BlogSection() {
    return (
        <div>
            <div className="container">
                <section className="blog-section py-5" id="blog-section">
                    <div className="blog-section__description">
                        <div className="section-subtitle">Our Blog Posts</div>
                        <div className="section-title">We are an online plant shop offering a wide range of cheap and trendy plants.
                        </div>
                    </div>
                    <div className="row">
                        <div className="blog-section__card col-3">
                            <img src={s1} alt="blog section image" className="img-fluid" />
                            <div className="card-info d-flex flex-column justify-content-between ">
                                <h5>September 12 I Read in 6 minutes</h5>
                                <h3>Cactus & Succulent  Care Tips</h3>
                                <p>Cacti are succulents are easy care plants for any home or patio.</p>
                                <a href="#" className="stretched-link">Read More <ArrowRight/></a>
                            </div>
                        </div>
                        <div className="blog-section__card col-3">
                            <img src={s2} alt="blog section image" className="img-fluid" />
                            <div className="card-info d-flex flex-column justify-content-between ">
                                <h5>September 12 I Read in 2 minutes</h5>
                                <h3>Top 10 Succulents for Your Home</h3>
                                <p>Best in hanging baskets. Prefers medium to high light.</p>
                                <a href="#" className="stretched-link">Read More  <ArrowRight/></a>
                            </div>
                        </div>
                        <div className="blog-section__card col-3">
                            <img src={s3} alt="blog section image" className="img-fluid" />
                            <div className="card-info d-flex flex-column justify-content-between " >
                                <h5>September 12 I Read in 3 minutes</h5>
                                <h3>Cacti & Succulent  Care Tips</h3>
                                <p>Cacti and succulents thrive in containers and because most are..</p>
                                <a href="#" className="stretched-link">Read More  <ArrowRight/></a>
                            </div>
                        </div>
                        <div className="blog-section__card col-3">
                            <img src={s4} alt="blog section image" className="img-fluid" />
                            <div className="card-info d-flex flex-column justify-content-between ">
                                <h5>September 12 I Read in 2 minutes</h5>
                                <h3>Best Houseplants  Room by Room</h3>
                                <p>The benefits of houseplants are endless. In addition to..</p>
                                <a href="#" className=" stretched-link">Read More  <ArrowRight/></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BlogSection
