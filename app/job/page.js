import React from 'react'
// import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { jobs } from '@/lib/data' // Import the jobs data

export const metadata = {
    title: 'Job Openings - Employment One Stop Solutions',
    description: 'Browse the latest job openings at Employment One Stop Solutions. Find your next career opportunity with top companies.',
};

export default function JobOpeningsPage() {

    // const [activeIndex, setActiveIndex] = useState(1)
    //     const handleOnClick = (index) => {
    //         setActiveIndex(index)
    //     }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Job Openings">
            <section className="job-section pt_110 pb_90">
                <div className="auto-container">
                    <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">Posted jobs</span>
                        <h2 className="title-animation">Find Your Job</h2>
                    </div>
                    <div className="inner-container">
                        {jobs.map((job) => (
                            <div className="job-block-one" key={job.id}>
                                <div className="upper-box">
                                    <ul className="job-info">
                                        <li><i className="icon-43"></i>Posted by <span>{job.postedDate}</span></li>
                                        <li>Company: <span>{job.company}</span></li>
                                    </ul>
                                </div>
                                <div className="inner-box">
                                    <div className="title-box">
                                        <div className="icon-box"><i className="icon-44"></i></div>
                                        <h3>{job.title}</h3>
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="salary-box">
                                        <h5>Salary</h5>
                                        <span>{job.salary}</span>
                                    </div>
                                    <div className="experience-box">
                                        <h5>Experience need</h5>
                                        <span>{job.experience}</span>
                                    </div>
                                    <div className="btn-box">
                                        <Link href={`/job/${job.id}`} className="theme-btn btn-one">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Subscribe/>

            </Layout>
        </div>
    )
}
