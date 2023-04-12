import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours gives you the oppoutunity to see a lot within a time frame</p>
        
        <DestinationData
        className="first-des"
        heading="Taal Volcano Batangas"
        text="Taal Volcano is a large caldera filled by Taal Lake in the Philippines.Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake. The caldera was formed by prehistoric eruptions between 140,000 
        and 5,380 BP. The volcano is located about 50 kilometers (31 mi) south of Manila, the capital 
        of the Philippines. Taal Volcano has had several violent eruptions in the past, causing deaths
         on the island and the populated areas surrounding the lake, with an overall death toll of about 6,000.
          Because of its proximity to populated areas and its eruptive history, the volcano was designated a 
          Decade Volcano, worthy of close study to prevent future natural disasters. 
          All volcanoes in the Philippines are part of the Ring of Fire."
          img1={Mountain1}
          img2={Mountain2}
        
        />

<DestinationData
className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas.
         It offers a scenic view of nearby Batangas mountains and beaches. 
         Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet.
          Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas.
           It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands,
            with Mt. Naguiling being the tallest mountain.
        The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. According to locals, the mountain was named as such because it describes the magnificence of the mountain range and the blunt rolling of its slopes. Mt. Daguldol has a total trail length of nine kilometers. "
          img1={Mountain3}
          img2={Mountain4}
        
        />

      </div>
    </>
  );
};

export default Destination;
