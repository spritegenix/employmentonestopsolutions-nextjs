'use client'
import Link from "next/link"
import { blogs } from '@/lib/data' // Import the blogs data

export default function News() {

    return (
        <>
            <section className="news-section pb_90 pt_90">
                <div className="auto-container">
                    <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">Our Blog</span>
                        <h2 className="title-animation">Latest Articles</h2>
                    </div>
                    <div className="row clearfix">
                        {blogs.slice(0, 3).map((blog) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 news-block" key={blog.id}>
                                <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="bg-layer" style={{ backgroundImage: `url(${blog.image})` }}></div>
                                        <div className="overlay-bg-layer" style={{ backgroundImage: `url(${blog.image})` }}></div>
                                        <div className="content-box">
                                            <span className="post-date">{blog.date}</span>
                                            <h4><Link href={`/blog/${blog.id}`}>{blog.title}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
