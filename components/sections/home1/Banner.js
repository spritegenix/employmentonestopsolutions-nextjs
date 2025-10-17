'use client';
import Link from 'next/link';

export default function Banner() {
  return (
    <>
      <section className="banner-section p_relative centred">
        <div
          className="pattern-layer"
          style={{ backgroundImage: 'url(assets/images/shape/shape-1.png)' }}
        ></div>
        <div className="author-box">
          <div className="author author-1">
            <img src="assets/images/resource/author-1.png" alt="" />
            <span>Marketer</span>
          </div>
          <div className="author author-2">
            <img src="assets/images/resource/author-2.png" alt="" />
            <span>Assistant</span>
          </div>
          <div className="author author-3">
            <img src="assets/images/resource/author-3.png" alt="" />
            <span>Developer</span>
          </div>
          <div className="author author-4">
            <img src="assets/images/resource/author-4.png" alt="" />
            <span>Finance</span>
          </div>
          <div className="author author-5">
            <img src="assets/images/resource/author-5.png" alt="" />
            <span>Designer</span>
          </div>
          <div className="author author-6">
            <img src="assets/images/resource/author-6.png" alt="" />
            <span>Editor</span>
          </div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h2>
              Find Work You Love. <br /> Hire Talent You Trust.
            </h2>
            <p>
              Discover jobs that match your skills, passions, and goals. From
              first-time job seekers to experienced professionals, we connect
              people with opportunities that truly matter.
            </p>
            <div className="btn-box">
              <Link href="/job" className="theme-btn btn-one mr_20">
                <span>Find Works</span>
              </Link>
              <Link href="/companies" className="theme-btn banner-btn">
                Companies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
