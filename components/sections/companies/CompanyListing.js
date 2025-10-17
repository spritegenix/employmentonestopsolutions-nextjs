import { companies } from '@/lib/data';
import React from 'react';



const CompanyListing = () => {
    return (
        <section className="company-listing-section pt_120 pb_90">
            <div className="auto-container">
                <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">Featured Companies</span>
                        <h2 className="title-animation">Discover top companies <br /> across various industries.</h2>
                    </div>
                
                <div className="row clearfix">
                    {companies.map(company => (
                        <div className="col-lg-4 col-md-6 col-sm-12 company-block" key={company.id}>
                            <div className="company-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <figure className="image-box"><img src={company.logo} alt={company.name} /></figure>
                                    <h3>{company.name}</h3>
                                    <ul className="info-list clearfix">
                                        <li><i className="icon-location"></i><strong>Location:</strong> {company.location}</li>
                            
                                    </ul>
                                    <ul className="info-list clearfix">
                                        <li><i className="icon-industry"></i><strong>Industry:</strong> {company.industry}</li>
                                    </ul>
                                    <p>{company.description}</p>
                                    <div className="btn-box">
                                        <a href={company.link} className="theme-btn btn-one">Visit Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyListing;
