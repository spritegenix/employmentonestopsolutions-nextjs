'use client'
import { INDUSTRIES } from '@/lib/data'
import Link from 'next/link'



export default function Industries(){
  return (
    <>
      <section className="industries-section pt_20 pb_120">
        <div className="auto-container">
          <div className="sec-title centred pb_60 sec-title-animation animation-style2">
            <span className="sub-title mb_10 title-animation">Industries</span>
            <h2 className="title-animation">Industries Served</h2>
          </div>

          <div className="inner-container clearfix">
            {INDUSTRIES.map(({ id, icon, label, href, count }) => (
              <div className="industries-block-one" key={id}>
                <div className="inner-box">
                  <div className="icon-box"><i className={icon}></i></div>
                  {/* <div className="icon-box"><img src={`/assets/images/icons/${icon}.svg`} style={{width:"64px"}} alt={label}/></div> */}
                  <h3><Link href={href}>{label}</Link></h3>
                  <p>{count} Staffs</p>
                </div>
              </div>
            ))}
          </div>
{/* 
          <div className="btn-box centred mt_60">
            <Link href="/" className="theme-btn btn-one">View All Categories</Link>
          </div> */}
        </div>
      </section>
    </>
  )
}
