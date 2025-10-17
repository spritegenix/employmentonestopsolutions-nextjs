import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { email, number } from '@/lib/data'

export const metadata = {
    title: 'Contact Us - Employment One Stop Solutions',
    description: 'Get in touch with Employment One Stop Solutions. Find our corporate office, email address, and phone number for inquiries.',
};

export default function Contact_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Contact us">
                
                <section className="contact-section pt_110 pb_30">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h3>Contact Information</h3>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-27.png" alt="Corporate Office icon"/></div>
                                            <h4>Corporate Office</h4>
                                            <p>India</p>
                                        </div>
                                        {/* <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-27.png" alt="Main Warehouse icon"/></div>
                                            <h4>Main Warehouse</h4>
                                            <p>10445 Brisbane Cir. Shiloh, Australia 81063</p>
                                        </div> */}
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-28.png" alt="Email icon"/></div>
                                            <h4>Email Address</h4>
                                            <p><Link href={`mailto:${email}`}>{email}</Link></p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt="Phone icon"/></div>
                                            <h4>Phone Number</h4>
                                            <p><Link href={`tel:${number}`}>{number}</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                    <div className="form-inner">
                                        <form method="post" action="sendemail.php" id="contact-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Name <span>*</span></label>
                                                    <input type="text" name="username" placeholder="" required/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Phone <span>*</span></label>
                                                    <input type="text" name="phone" placeholder="" required/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Email Address <span>*</span></label>
                                                    <input type="email" name="email" placeholder="" required/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Subject <span>*</span></label>
                                                    <input type="text" name="subject" placeholder="" required/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Write Message <span>*</span></label>
                                                    <textarea name="message" placeholder=""></textarea>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-one" name="submit-form">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="google-map pb_80">
                    <div className="auto-container">
                        <div className="inner-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.97711801893!2d72.56708329200164!3d19.082293227702504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1760681842705!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Map of Mumbai"/>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
                        </div>
                    </div>
                </section>
                
                <Subscribe/>

            </Layout>
        </div>
    )
}
