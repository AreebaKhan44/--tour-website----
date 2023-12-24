import Hero from  "../components/Hero";
import Navbar  from  "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";


import "./AboutUsStyles.css";

function AboutUs() {
  return (
    <div className="about-container">
      <h1>Our History</h1>
      <p> Choose from several different types of travel insurance with varying coverage levels and optional upgrades to create personalized coverage for your trip.
</p>

      <h1>Our Mission</h1>
      <p>Contact us anytime and from anywhere. Our multilingual customer support team is on call 24/7 to answer your questions if an emergency arises.</p>


      <h1>Our Vision</h1>
      <p>Proof of coverage will be delivered to you immediately upon purchase. Easily access your insurance card and visa letter to prove you have coverage throughout your entire trip.</p>
    </div>
  );
}

export default AboutUs;
