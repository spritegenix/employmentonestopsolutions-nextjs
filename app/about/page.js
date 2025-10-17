
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Clients from "@/components/sections/home3/Clients"

import Subscribe from '@/components/sections/home2/Subscribe'
import { INDUSTRIES, testimonials } from '@/lib/data'
import Testimonials from '@/components/Testimonials'
import About from '@/components/sections/home1/About'
import Chooseus from '@/components/sections/home1/Chooseus'


export default function About_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="About Us">
                <About/>
                {/* <About/> */}
                <Clients/>
<Chooseus/>
                {/* <section className="chooseus-section alternat-3 pt_120 pb_90">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title light centred pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Why Us</span>
                            <h2 className="title-animation">Why Choose Us</h2>
                        </div>
                        <div className="inner-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-4"></i></div>
                                            <h3><Link href="/">Retain Top Talent</Link></h3>
                                            <p>Providing clear career paths and growth opportunities is key to retaining top talent.</p>
                                            <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-5"></i></div>
                                            <h3><Link href="/">Stay Compliant</Link></h3>
                                            <p>Educate employees about compliance requirements through regular training</p>
                                            <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-6"></i></div>
                                            <h3><Link href="/">Improve Employee</Link></h3>
                                            <p>Invest in employee training and development programs to enhance skills and knowledge.</p>
                                            <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="industries-style-four pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Industries</span>
                            <h2 className="title-animation">Industries Served</h2>
                        </div>
                        <div className="row clearfix">
                            {
                                INDUSTRIES.map(({ id, icon, label, href, count }) => (
                                    <div className="col-lg-3 col-md-6 col-sm-12 industries-block" key={id}>
                                        <div className="industries-block-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className={icon}></i></div>
                                                <h3><Link href={href}>{label}</Link></h3>
                                                <p>{count} Staffs</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                         
                        </div>
                    </div>
                </section>
{/* 
                <section className="team-section z_1 centred pt_0 pb_0">
                    <div className="auto-container">
                        <div className="sec-title pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Our Team</span>
                            <h2 className="title-animation">Meet The Team</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-1.jpg" alt="Tom Oliver"/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-1.jpg" alt="Tom Oliver"/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Tom Oliver</Link></h3>
                                            <span className="designation">Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-2.jpg" alt="Loenard Barnes"/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-2.jpg" alt="Loenard Barnes"/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Loenard Barnes</Link></h3>
                                            <span className="designation">Lead Engineer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-3.jpg" alt="Gilbert Sherman"/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-3.jpg" alt="Gilbert Sherman"/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Gilbert Sherman</Link></h3>
                                            <span className="designation">Sale Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-4.jpg" alt="Franklin Bailey"/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-4.jpg" alt="Franklin Bailey"/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Franklin Bailey</Link></h3>
                                            <span className="designation">Art Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

               <Testimonials/>

                <Subscribe/>

            </Layout>
        </div>
    )
}
