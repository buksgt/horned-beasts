function HornedBeast( props ) {

    return(
        <>
            <h1>The Horned Beast Component yay!</h1>

           <h2>{props.title}</h2>
           <img src={props.image_url} alt={props.title} width='200px'></img> 
           <p>{props.description}</p>
        </>
    ) // use curlies because passing props.


}


export default HornedBeast