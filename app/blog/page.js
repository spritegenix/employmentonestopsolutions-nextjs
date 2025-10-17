import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { blogCategories, blogs, blogTags } from '@/lib/data';

export const metadata = {
    title: 'Our Blog - Employment One Stop Solutions',
    description: 'Read the latest articles and news from Employment One Stop Solutions. Stay updated on career development, recruitment, remote work, and more.',
};

export default function Blog_Grid() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Blogs">
                
                <section className="sidebar-page-container p_relative pt_110 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar mr_40 mb_30">
                                    <div className="search-widget mb_60">
                                        <div className="search-form">
                                            <form method="post" action="/blog">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Search" required/>
                                                    <button type="submit"><i className="icon-1"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget category-widget mb_50">
                                        <div className="widget-title mb_11">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                {blogCategories.map((category) => (
                                                    <li key={category.id}><Link href={`/blog?category=${category.id}`}>{category.name}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget post-widget mb_60">
                                        <div className="widget-title mb_20">
                                            <h3>Latest Posts</h3>
                                        </div>
                                        <div className="post-inner">
                                            {blogs.slice(0, 3).map((blog) => (
                                                <div className="post" key={blog.id}>
                                                    <figure className="post-thumb"><Link href={`/blog/${blog.id}`}><img src={blog.image} alt={blog.title}/></Link></figure>
                                                    <h6><Link href={`/blog/${blog.id}`}>{blog.title}</Link></h6>
                                                    <span className="post-date">{blog.date}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="sidebar-widget tags-widget mb_45">
                                        <div className="widget-title mb_20">
                                            <h3>Popular tag</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="tags-list clearfix">
                                                {blogTags.map((tag) => (
                                                    <li key={tag.id}><Link href={`/blog?tag=${tag.id}`}>{tag.name}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                   
                                </div>
                             
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="blog-grid-content">
                                    <div className="row clearfix">
                                        {blogs.map((blog) => (
                                            <div className="col-lg-6 col-md-6 col-sm-12 news-block" key={blog.id}>
                                                <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image"><Link href={`/blog/${blog.id}`}><img src={blog.image} alt={blog.title}/></Link></figure>
                                                            <figure className="overlay-image"><Link href={`/blog/${blog.id}`}><img src={blog.image} alt={blog.title}/></Link></figure>
                                                        </div>
                                                        <div className="lower-content">
                                                            <span className="category">{blog.category}</span>
                                                            <h3><Link href={`/blog/${blog.id}`}>{blog.title}</Link></h3>
                                                            <ul className="post-info">
                                                                <li>By <Link href={`/blog/${blog.id}`}>{blog.author}</Link></li>
                                                                <li><span>{blog.date}</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div className="pagination-wrapper">
                                        <ul className="pagination clearfix">
                                            <li><Link href="/blog"><i className="icon-34"></i></Link></li>
                                            <li><Link href="/blog" className="current">1</Link></li>
                                            <li><Link href="/blog">2</Link></li>
                                            <li><Link href="/blog">3</Link></li>
                                            <li><Link href="/blog"><i className="icon-35"></i></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Subscribe/>

            </Layout>
        </div>
    )
}
