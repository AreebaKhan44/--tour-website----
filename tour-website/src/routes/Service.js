import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import AboutUs from "../components/AboutUs";


function About() {
  return (
    <>
    <Navbar />
    <Hero 
    cName="hero-mid"
    heroImg={AboutImg}
    text="Service"
    btnClass="hide"

    />
    <Trip />
    <Footer />
     
    </>
  );
}

export default About;
