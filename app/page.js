import LenisScroll from "@/components/LenisScroll";
import IntroLoader from "@/components/IntroLoader";
import PageAnimations from "@/components/PageAnimations";
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
            <PageAnimations />
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