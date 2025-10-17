import React from 'react'
import { Metadata } from 'next'; // Import Metadata type
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import { blogs, blogCategories, blogTags } from '@/lib/data';

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        blogId: blog.id,
    }));
}

export async function generateMetadata({ params }) {
    const { blogId } = params;
    const blog = blogs.find(b => b.id === blogId);

    if (!blog) {
        return {
            title: 'Blog Not Found - Employment One Stop Solutions',
            description: 'The blog post you are looking for does not exist.',
        };
    }

    return {
        title: `${blog.title} - Employment One Stop Solutions`,
        description: blog.content.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...', // Extract plain text and truncate
    };
}

export default async function BlogDetailsPage({ params }) {
    const { blogId } = params;
    const blog = blogs.find(b => b.id === blogId);

    if (!blog) {
        return (
            <div className="boxed_wrapper">
                <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Blog Not Found">
                    <section className="sidebar-page-container p_relative pt_110 pb_120">
                        <div className="auto-container">
                            <p>Blog post not found.</p>
                        </div>
                    </section>
                    <Subscribe/>
                </Layout>
            </div>
        );
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle={blog.title}>
                
                <section className="sidebar-page-container p_relative pt_110 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar mr_40 mb_30">
                                    {/* <div className="search-widget mb_60">
                                        <div className="search-form">
                                            <form method="post" action="/blog">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Search" required/>
                                                    <button type="submit"><i className="icon-1"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div> */}
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
                                            {blogs.slice(0, 3).map((latestBlog) => (
                                                <div className="post" key={latestBlog.id}>
                                                    <figure className="post-thumb"><Link href={`/blog/${latestBlog.id}`}><img src={latestBlog.image} alt={latestBlog.title}/></Link></figure>
                                                    <h6><Link href={`/blog/${latestBlog.id}`}>{latestBlog.title}</Link></h6>
                                                    <span className="post-date">{latestBlog.date}</span>
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
                                <div className="blog-details-content">
                                    <div className="news-block-two">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src={blog.image} alt={blog.title}/></figure>
                                            </div>
                                            <div className="lower-content">
                                                <span className="category">{blog.category}</span>
                                                <h3>{blog.title}</h3>
                                                <ul className="post-info">
                                                    <li>By <Link href={`/blog?author=${blog.author}`}>{blog.author}</Link></li>
                                                    <li><span>{blog.date}</span></li>
                                                </ul>
                                            </div>
                                            <div className="text-box pt_25 mb_50" dangerouslySetInnerHTML={{ __html: blog.content }}>
                                            </div>
                                        </div>
                                    </div>
                                    {/* The following sections are static content from the original blog-details page.
                                        They can be made dynamic if more data is added to lib/data.js for each blog. */}
                               
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
