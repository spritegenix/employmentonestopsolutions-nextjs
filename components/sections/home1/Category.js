'use client';
import Link from 'next/link';

export default function Category() {
  return (
    <>
      <section className="category-section centred pt_120 pb_70">
        <div className="bg-box">
          <div
            className="bg-layer parallax-bg"
            style={{
              backgroundImage: 'url(assets/images/background/bg-sec.webp)',
            }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="sec-title light pb_60 sec-title-animation animation-style2">
            <span className="sub-title mb_10 title-animation">Category</span>
            <h2 className="title-animation">
              Researching Companies <br />
              Before Applying
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 category-block">
              <div className="category-block-one">
                <div className="inner-box">
                  <h2>For Job Seekers</h2>
                  <p>
                    Join thousands using our platform to easily find jobs that
                    fit your skills and schedule. Unlock flexible work, quick
                    placements, and new career paths.
                  </p>
                  <Link href="job-details.html" className="theme-btn btn-one">
                    Find Work
                  </Link>
                  <figure className="image-box image-hov-one">
                    <img src="assets/images/resource/cat-1.webp" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 category-block">
              <div className="category-block-one">
                <div className="inner-box">
                  <h2>For Business Owners</h2>
                  <p>
                    Find candidates who resonate with your company’s goals and
                    culture. Hire talent that helps build a unified,
                    future-ready team.
                  </p>
                  <Link href="job-details.html" className="theme-btn btn-one">
                    Find Employee
                  </Link>
                  <figure className="image-box image-hov-two">
                    <img src="assets/images/resource/cat-2.webp" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
