import React from 'react';
import { Metadata } from 'next'; // Import Metadata type
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Subscribe from '@/components/sections/home2/Subscribe';
import { jobs } from '@/lib/data'; // Import the jobs data

export async function generateStaticParams() {
    return jobs.map((job) => ({
        jobs: job.id,
    }));
}

export async function generateMetadata({ params }) {
    const jobId = params.jobs;
    const job = jobs.find((j) => j.id === jobId);

    if (!job) {
        return {
            title: 'Job Not Found - Employment One Stop Solutions',
            description: 'The job you are looking for does not exist.',
        };
    }

    return {
        title: `${job.title} at ${job.company} - Employment One Stop Solutions`,
        description: job.description,
    };
}

export default async function JobDetailsPage({ params }) {
    const jobId = params.jobs; // The dynamic segment is named 'jobs'

    const job = jobs.find((j) => j.id === jobId);

    if (!job) {
        return (
            <div className="boxed_wrapper">
                <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Job Not Found">
                    <section className="job-section pt_110 pb_90">
                        <div className="auto-container">
                            <div className="sec-title centred pb_60">
                                <h2>Job Not Found</h2>
                                <p>The job you are looking for does not exist.</p>
                                <Link href="/job" className="theme-btn btn-one">Back to Job Listings</Link>
                            </div>
                        </div>
                    </section>
                    <Subscribe />
                </Layout>
            </div>
        );
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle={job.title}>
                <section className="job-details pt_110 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="job-sidebar mr_40">
                                    <div className="info-widget sidebar-widget mb_30">
                                        <ul className="clearfix">
                                            <li>
                                                <h5>Location</h5>
                                                <p>{job.location}</p>
                                            </li>
                                            <li>
                                                <h5>Company</h5>
                                                <p>{job.company}</p>
                                            </li>
                                            <li>
                                                <h5>Salary</h5>
                                                <p>{job.salary}</p>
                                            </li>
                                            <li>
                                                <h5>Experience Need</h5>
                                                <p>{job.experience}</p>
                                            </li>
                                            <li>
                                                <h5>Posted Date</h5>
                                                <p>{job.postedDate}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="job-details-content">
                                    <div className="text-box mb_60">
                                        <h3>Job Description</h3>
                                        <p>{job.description}</p>
                                    </div>
                                    {job.responsibilities && job.responsibilities.length > 0 && (
                                        <div className="text-box mb_55">
                                            <h3>Responsibilities</h3>
                                            <ul className="list-item">
                                                {job.responsibilities.map((responsibility, index) => (
                                                    <li key={index}><span>{responsibility}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {job.advantages && (
                                        <div className="text-box mb_65">
                                            <h3>Advantages</h3>
                                            <p>{job.advantages}</p>
                                        </div>
                                    )}
                                    {/* <ul className="share-box">
                                        <li><h5>Share On:</h5></li>
                                        <li><Link href="#"><i className="icon-22"></i></Link></li>
                                        <li><Link href="#"><i className="icon-23"></i></Link></li>
                                        <li><Link href="#"><i className="icon-24"></i></Link></li>
                                        <li><Link href="#"><i className="icon-25"></i></Link></li>
                                    </ul> */}
                                    <div className="btn-box mt_30">
                                        <Link href="/job" className="theme-btn btn-one">Back to Job Listings</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe />
            </Layout>
        </div>
    );
}
