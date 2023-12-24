import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";


function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using  Google maps</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Trip in Indonesia"
        text="On this site, you can get discounts on almost anything, including flights, hotel, cars, activities, and more."
        />

       <TripData
        image={Trip2}
        heading="Trip in Indonesia"
        text="One of the most well-known travel websites in the world, Expedia has a robust rewards program with amenities and discounts you won't find anywhere else."
        />

        <TripData
        image={Trip3}
        heading="Trip in Indonesia"
        text="One of the most well-known travel websites in the world, Expedia has a robust rewards program with amenities and discounts you won’t find anywhere else."
        />

      </div>
    </div>
  );
}

export default Trip;
