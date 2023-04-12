import "./HeroStyles.css";



function Hero(props){
    return(
        <>
       <div className={props.cName}>
        <img alt="HeroImg" 
       src={props.heroImg}/>

<div className="hero-text">
<h1>{props.title}</h1>
<p>{props.text}</p>
<a href={props.url} className={props.btnClass}>
{props.buttonText}
</a>
</div>
       </div>
        </>
    )
}

export default Hero;


// return(
//     <>
//    <div className="hero">
//     <img alt="HeroImg" 
//    src="src/assets/10.jpg"/>

// <div className="hero-text">
// <h1>Your Journey Your Story</h1>
// <p>Choose your Favourite Destination</p>
// <a href="/">
// Travel Plan
// </a>
// </div>
//    </div>
//     </>
// )
// }