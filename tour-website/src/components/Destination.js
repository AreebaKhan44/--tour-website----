import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      
          <DestinationData
          className="first-des"
          heading="Taal Volcano,Batangas"
          text="Travel can represent financial risk. No matter your destination, there’s always a chance you could face an unanticipated cancellation, interruption, mishap, or emergency.

          WorldTrips offers travel insurance and travel assistance services to guide you through the unexpected and help ease your stress. We enable travelers to explore the world with confidence."
           img1={Mountain1}
           img2={Mountain2}          
          />
          
          <DestinationData
          className="first-des-reverse"
          heading="Mt. Daguldul, Batangas"
          text="Close your eyes and imagine being in a place you’ve always wanted to visit. What if you could make that dream a reality? Knowing how to plan and use travel websites can help make a dream trip possible.

          We’re going to give you all the best travel websites that specialize in getting you the best rates. Y
          
          "
           img1={Mountain3}
           img2={Mountain4}
          
          />
        </div>

  );
};

export default Destination;
