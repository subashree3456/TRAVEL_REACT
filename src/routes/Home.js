
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";



function Home(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName ="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHRvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Your Journey Your Story"
        text="Choose your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;