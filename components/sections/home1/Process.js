'use client'
import { useState } from "react"
import Link from "next/link"


export default function Process(){

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const talentsProcess = [
        {
            count: '1',
            title: 'Create Your Profile',
            description: 'Showcase your skills and experience to potential employers.'
        },
        {
            count: '2',
            title: 'Browse & Apply for Jobs',
            description: 'Explore a wide range of opportunities and apply with ease.'
        },
        {
            count: '3',
            title: 'Get Hired',
            description: 'Connect with top companies and land your dream job.'
        }
    ];

    const businessProcess = [
        {
            count: '1',
            title: 'Post Your Job Openings',
            description: 'Attract top talent by listing your vacancies on our platform.'
        },
        {
            count: '2',
            title: 'Review Applications',
            description: 'Efficiently manage and review applications from qualified candidates.'
        },
        {
            count: '3',
            title: 'Hire the Best Talent',
            description: 'Find the perfect match for your team and grow your business.'
        }
    ];

    return (
        <> 

        <section className="process-section pt_120 pb_90">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title light centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Process</span>
                    <h2 className="title-animation">How It Works?</h2>
                </div>
                <div className="tabs-box">
                    <ul className="tab-btns tab-buttons">
                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}><i className="far fa-user"></i>For Talents</li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}><i className="fas fa-briefcase"></i>For Business</li>
                    </ul>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                            <div className="row clearfix">
                                {talentsProcess.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 processing-block" key={index}>
                                        <div className="processing-block-one">
                                            <div className="inner-box">
                                                <span className="count-text">{item.count}</span>
                                                <h3><Link href="/">{item.title}</Link></h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                            <div className="row clearfix">
                                {businessProcess.map((item, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 processing-block" key={index}>
                                        <div className="processing-block-one">
                                            <div className="inner-box">
                                                <span className="count-text">{item.count}</span>
                                                <h3><Link href="/">{item.title}</Link></h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
