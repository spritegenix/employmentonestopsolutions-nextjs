'use client'
import React from 'react'

export default function Process({ type = 'talents' }){
    const talentsProcess = [
        {
            step: '01',
            title: 'Create Your Profile',
            description: 'Showcase your skills and experience to potential employers.'
        },
        {
            step: '02',
            title: 'Browse & Apply for Jobs',
            description: 'Explore a wide range of opportunities and apply with ease.'
        },
        {
            step: '03',
            title: 'Get Hired',
            description: 'Connect with top companies and land your dream job.'
        }
    ];

    const businessProcess = [
        {
            step: '01',
            title: 'Post Your Job Openings',
            description: 'Attract top talent by listing your vacancies on our platform.'
        },
        {
            step: '02',
            title: 'Review Applications',
            description: 'Efficiently manage and review applications from qualified candidates.'
        },
        {
            step: '03',
            title: 'Hire the Best Talent',
            description: 'Find the perfect match for your team and grow your business.'
        }
    ];

    const currentProcess = type === 'business' ? businessProcess : talentsProcess;

    return (
        <> 
            <section className="process-style-two centred pl_100 pr_100">
                <div className="outer-container p_relative pt_120 pb_120">
                    <div className="auto-container">
                        <div className="sec-title pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Process</span>
                            <h2 className="title-animation">Easy Steps to Finish</h2>
                        </div>
                        <div className="inner-container">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-19.png)" }}></div>
                            {currentProcess.map((item, index) => (
                                <div className="processing-block-two" key={index}>
                                    <div className="inner-box">
                                        <h4>{item.step} <span>Step</span></h4>
                                        <h3>{item.title.split(' ').slice(0, -1).join(' ')} <br />{item.title.split(' ').slice(-1)[0]}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}
