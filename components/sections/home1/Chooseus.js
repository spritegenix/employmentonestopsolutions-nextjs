'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Chooseus(){
    const pathname = usePathname()
    return (
        <> 

        <section className="chooseus-section pt_200 pb_90">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Why Us</span>
                    <h2 className="title-animation">Why Choose Us</h2>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-4"></i></div>
                                    <h3><Link href="/about">Find Top Talent</Link></h3>
                                    <p>We connect you with the right people, making growth simple and fulfilling.</p>
                                   {
                                    pathname === '/' && <div className="link"><Link href="/about">Learn More<i className="icon-7"></i></Link></div> 
                                   } 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h3><Link href="/about">Stay Transparent</Link></h3>
                                    <p>Reliable hiring with background checks and clear processes you can trust.</p>
                                  {
                                    pathname === '/' && <div className="link"><Link href="/about">Learn More<i className="icon-7"></i></Link></div> 
                                   } 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h3><Link href="/about">Grow Skills</Link></h3>
                                    <p>Access training and mentoring to unlock new opportunities and potential.</p>
                                  {
                                    pathname === '/' && <div className="link"><Link href="/about">Learn More<i className="icon-7"></i></Link></div> 
                                   } 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
