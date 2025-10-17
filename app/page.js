import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Clients from "@/components/sections/home1/Clients"
import About from "@/components/sections/home1/About"
import Funfact from "@/components/sections/home1/Funfact"
import Slide_Text from "@/components/sections/home1/Slide-Text"
import Chooseus from "@/components/sections/home1/Chooseus"
import Category from "@/components/sections/home1/Category"
import Industries from "@/components/sections/home1/Industries"
import Process from "@/components/sections/home1/Process"
import Team from "@/components/sections/home1/Team"
import News from "@/components/sections/home1/News"
import Subscribe from "@/components/sections/home1/Subscribe"

export const metadata = {
    title: 'Employment One Stop Solutions - Find Your Dream Job',
    description: 'Employment One Stop Solutions helps you find the best job opportunities. Explore various industries, apply to top companies, and advance your career.',
};

export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <Clients/>
                <About/>
                <Funfact/>
                <Slide_Text/>
                <Chooseus/>
                <Category/>
                <Industries/>
                <Process/>
                {/* <Team/> */}
                <News/>
                <Subscribe/>
            </Layout>
        </div>
    )
}
