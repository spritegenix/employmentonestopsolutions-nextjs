import React from 'react'
import Link from "next/link"
import { clients } from '@/lib/data'

export default function Clients(){
    return (
    <> 
       <section className="clients-section home-3">
            <div className="bg-color"></div>
            <div className="auto-container">
                <div className="inner-container">
                    {
                        clients.map((client) => (
                            <div className="clients-box" key={client.id} style={{padding: "0 20px"}}>
                                <figure className="clients-logo"><Link href={client.link}><img src={client.image}   alt=""/></Link></figure>
                                {/* <figure className="overlay-logo"><Link href={client.link}><img src={client.image}  alt=""/></Link></figure> */}
                            </div>
                        ))
                    }
                  
                </div>
            </div>
        </section>
    </>
  )
}
