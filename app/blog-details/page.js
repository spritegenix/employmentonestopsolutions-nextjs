'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { blogCategories, blogs, blogTags } from '@/lib/data';


export default function Blog_Details() {

    // This page is now a generic blog details template.
    // For dynamic blog details, use app/blog/[blogId]/page.js

    // Example of how to use a specific blog for static display if needed
    const staticBlog = blogs[0]; // Display the first blog as an example

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle={staticBlog.title}>
                
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
                                                    <li key={category.id}><Link href={`/blog?category=${category.id}`}>{category.name}<span>({category.count})</span></Link></li>
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
                                                    <figure className="post-thumb"><Link href={`/blog/${blog.id}`}><img src={blog.image} alt=""/></Link></figure>
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
                                    <div className="sidebar-widget archives-widget">
                                        <div className="widget-title mb_11">
                                            <h3>Archives</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="archives-list clearfix">
                                                <li><Link href="/blog-details"><i className="fal fa-angle-right"></i>December 20, 2022<span>(09)</span></Link></li>
                                                <li><Link href="/blog-details"><i className="fal fa-angle-right"></i>December 26, 2022<span>(20)</span></Link></li>
                                                <li><Link href="/blog-details"><i className="fal fa-angle-right"></i>December 26, 2022<span>(25)</span></Link></li>
                                                <li><Link href="/blog-details"><i className="fal fa-angle-right"></i>December 26, 2022<span>(06)</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="download-widget mr_40">
                                    <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-24.png)" }}></div>
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="/assets/images/resource/book-3.png" alt=""/></figure>
                                        <h4>The 2024 guide for Optimal Content <span>Management</span></h4>
                                        <button type="button" className="theme-btn btn-one">Download E-book</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="blog-details-content">
                                    <div className="news-block-two">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src={staticBlog.image} alt=""/></figure>
                                            </div>
                                            <div className="lower-content">
                                                <span className="category">{staticBlog.category}</span>
                                                <h3>{staticBlog.title}</h3>
                                                <ul className="post-info">
                                                    <li>By <Link href={`/blog?author=${staticBlog.author}`}>{staticBlog.author}</Link></li>
                                                    <li><span>{staticBlog.date}</span></li>
                                                </ul>
                                            </div>
                                            <div className="text-box pt_25 mb_50" dangerouslySetInnerHTML={{ __html: staticBlog.content }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-share-option mb_60">
                                        <ul className="tags-list">
                                            <li><h6>Tags:</h6></li>
                                            {blogTags.map((tag) => (
                                                <li key={tag.id}><Link href={`/blog?tag=${tag.id}`}>{tag.name}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
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
