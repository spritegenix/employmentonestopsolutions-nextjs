import "react-modal-video/css/modal-video.css";
import ToggleBodyClass from "@/components/elements/Togglebtn";
import "@/public/assets/css/bootstrap.css";
import "@/public/assets/css/color.css";
import "@/public/assets/css/rtl.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/company-listing.css";
import "@/public/assets/css/blog-content.css"; /* Custom styles for blog rich text content */
import "@/public/assets/css/responsive.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { outfit, inter } from "@/lib/font";
export const metadata = {
    title: "Employment One Stop - Global Job Marketplace",
    description: "Discover careers that match your skills and goals",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body>
                {/* <ToggleBodyClass /> */}
                {children}
            </body>
        </html>
    );
}
