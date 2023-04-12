import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip(){
    return(
        <div className="trip">
       <h1>Recent Trips</h1>
       <p>You can Discover unique destinations using Google Maps</p>

      <div className="tripcard">
      <TripData 
       image={Trip1} 
       heading="Trip in Indonesia"
       text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia 
       and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands,
        including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
       />

<TripData 
       image={Trip2} 
       heading="Trip in Malaysia"
       text="Malaysia is a country in Southeast Asia. The federal constitutional monarchy
        consists of thirteen states and three federal territories, separated by the South China Sea 
        into two regions: Peninsular Malaysia and Borneo's East Malaysia. 
        Peninsular Malaysia shares a land and maritime border with Thailand and maritime 
        borders with Singapore, Vietnam, and Indonesia."
       />


<TripData 
       image={Trip3} 
       heading="Trip in France"
       text="France  officially the French Republic  is a country primarily located in Western Europe.
        It also includes overseas regions and territories in the Americas and the Atlantic,
         Pacific and Indian Oceans giving it one of the largest discontiguous exclusive economic 
         zones in the world. Its metropolitan area extends from the Rhine to the Atlantic Ocean 
         and from the Mediterranean Sea to the English Channel and the North Sea; overseas territories 
         include French Guiana in South America, Saint Pierre and Miquelon in the North Atlantic,
          the French West Indies, and many islands in Oceania and the Indian Ocean. 
          .."
       />


      </div>

        </div>
    )
}

export default Trip;