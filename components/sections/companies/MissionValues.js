import React from 'react';

const MissionValues = () => {
    return (
        <section className="mission-values-section pt_120 pb_90">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h2>Our Mission & Values</h2>
                    <div className="text">Driving innovation and fostering a culture of excellence.</div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 mission-block">
                        <div className="mission-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-1"></i></div>
                                <h3>Our Mission</h3>
                                <p>To empower businesses with cutting-edge solutions that drive growth and efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mission-block">
                        <div className="mission-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-2"></i></div>
                                <h3>Our Vision</h3>
                                <p>To be a global leader in providing innovative and sustainable business solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mission-block">
                        <div className="mission-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-3"></i></div>
                                <h3>Our Values</h3>
                                <p>Integrity, Collaboration, Innovation, Customer Focus, and Excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionValues;
