import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import Pricing from '@/components/sections/home2/Pricing'
import { INDUSTRIES } from '@/lib/data'
import Testimonials from '@/components/Testimonials'

export const metadata = {
    title: 'Pricing Plans - Employment One Stop Solutions',
    description: 'Explore our flexible pricing plans for job seekers and employers. Find the perfect plan to meet your recruitment or job search needs.',
};



export default function PricingPage() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Pricing">
            <Pricing/>
               


                <section className="industries-style-four pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Industries</span>
                            <h2 className="title-animation">Industries Served</h2>
                        </div>
                        <div className="row clearfix">
                            {
                                INDUSTRIES.map(({ id, icon, label, href, count }) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 industries-block" key={id}>
                                        <div className="industries-block-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><i className={icon}></i></div>
                                                <h3 className='text-wrap'><Link href={href}>{label}</Link></h3>
                                                <p>{count} Staffs</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                          
                        </div>
                    </div>
                </section>

              
            <Testimonials/>

                <Subscribe/>

            </Layout>
        </div>
    )
}
