'use client'
import React from 'react'
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { useState } from "react"
import { faqs } from "@/lib/data"


export default function Faq_Page() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Frequently Asked Question">
                <section className="testimonial-page-section pt_110 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 mx-auto col-md-12 col-sm-12 content-column">
                                <div className="content_block_three">
                                    <div className="content-box">
                                        <div className="sec-title pb_30 sec-title-animation animation-style2">
                                            <span className="sub-title mb_10 title-animation">General Faqs</span>
                                            <h2 className="title-animation">Frequently Asked Questions</h2>
                                        </div>
                                        <ul className="accordion-box">
                                            {faqs.map((faq) => (
                                                <li className="accordion block" key={faq.id}>
                                                    <div className={isActive.key === faq.id ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(faq.id)}>
                                                        <div className="icon-box"><i className="icon-21"></i></div>
                                                        <h4>{faq.question}</h4>
                                                    </div>
                                                    <div className={isActive.key === faq.id ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <p>{faq.answer}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image-box ml_70">
                                    <figure className="image image-hov-one"><img src="assets/images/resource/faq-1.jpg" alt=""/></figure>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                
                {/* <section className="download-section alternat-3 pb_120">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>The 2024 guide for Optimal Content <span>Management</span></h2>
                                        <ul className="list-item mb_30">
                                            <li>Start by explaining the fundamental concepts of talent acquisition.</li>
                                            <li> Provide guidance on crafting clear and compelling job descriptions that accurately reflect.</li>
                                            <li>Practical tips for conducting effective interviews, including types of interview questions interview formats.</li>
                                        </ul>
                                        <button type="button" className="theme-btn btn-one">Download E-book</button>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/book-2.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Subscribe/>

            </Layout>
        </div>
    )
}
