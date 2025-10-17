"use client"
import { testimonials } from '@/lib/data'
import React from 'react'

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Testimonials() {
    const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
  return (
        <section className="testimonial-style-two pt_120 pb_120">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Testimonials</span>
                            <h2 className="title-animation">Love From Users</h2>
                        </div>
                        <div className='slider-content p_relative'>
                            <Swiper {...swiperOptions} className="two-item-carousel">
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide key={testimonial.id}>
                                        <div className="testimonial-block-two">
                                            <div className="inner-box">
                                                <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt="Quote icon" /></div>
                                                <div className="author-box">
                                                    <figure className="thumb-box"><img src={testimonial.logo} alt={testimonial.name} /></figure>
                                                    <h4>{testimonial.name}</h4>
                                                    <span className="designation">{testimonial.designation}, {testimonial.company}</span>
                                                </div>
                                                <p>{testimonial.text}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="owl-dots">
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}
