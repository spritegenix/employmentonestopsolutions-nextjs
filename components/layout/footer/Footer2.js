'use client';
import { useState } from 'react';
import Link from 'next/link';
import { socials } from '@/lib/data';

export default function Footer2() {
  return (
    <>
      <footer className="main-footer home-2">
        <div className="widget-section p_relative pt_80 pb_100">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget mr_30">
                   <figure className="footer-logo mb_20">
                    <Link href="/">
                      <img
                        src="assets/images/employment-one-stop-logo.png"
                        alt=""
                      />
                    </Link>
                  </figure>
                  <p>
                    Employment One Stop simplifies hiring, empowering companies
                    to grow and individuals to achieve career success
                    effortlessly.
                  </p>
              
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>For Workers</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">Find Work</Link>
                      </li>
                      <li>
                        <Link href="/">Jobs in Dubai</Link>
                      </li>
                      <li>
                        <Link href="/">Jobs in Virginia</Link>
                      </li>
                      <li>
                        <Link href="/">Jobs in California</Link>
                      </li>
                      <li>
                        <Link href="/">Jobs in Alaska</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>For Business</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">Merchandising</Link>
                      </li>
                      <li>
                        <Link href="/">Hospitality Staff</Link>
                      </li>
                      <li>
                        <Link href="/">General Labour</Link>
                      </li>
                      <li>
                        <Link href="/">Car Drivers</Link>
                      </li>
                      <li>
                        <Link href="/">Bus Driver</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>Company</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/">Career</Link>
                      </li>
                      <li>
                        <Link href="/">Partners</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/">Clients</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h4>Help & Support</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/faq">General FAQ</Link>
                      </li>
                      <li>
                        <Link href="/">Support Center</Link>
                      </li>
                      <li>
                        <Link href="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/">Terms & Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner">
              <div className="copyright">
                <p>
                  Copyright &copy; {new Date().getFullYear()}{' '}
                  <Link href="/">Employment One Stop Solution</Link> All rights
                  reserved.
                </p>{' '}
                Designed and Developed by{' '}
                <Link style={{ color: '#ffaa17' }} href="www.spritegenix.com">
                  Sprite Genix
                </Link>
                .
              </div>{' '}
              <ul className="social-links">
                <li>
                  <h5>Follow Us On:</h5>
                </li>
                {
                  socials.map((social, index) => (
                    <li key={index}>
                      <Link href={social.link}>
                        <i className={social.icon}></i>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
