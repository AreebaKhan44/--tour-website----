import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
    <Navbar />
    <Hero 
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"

    title="Your Journey your Story"
    text="Choose your Favourite Destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"

    />
    <Destination />
    <Trip />
    <Footer />
     
    </>
  );
}

export default Home;
