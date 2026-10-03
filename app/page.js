import LenisScroll from "@/components/LenisScroll";
import IntroLoader from "@/components/IntroLoader";
import ImagePop from "@/components/ImagePop";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <IntroLoader navbar />
            <ImagePop />
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
};