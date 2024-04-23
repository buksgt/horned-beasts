import HornedBeast from './HornedBeast' //who we want to talk to


function Gallery( props ) { // prepare a function
    console.log(props.allHornedBeasts) 





            // return "something"
            // <> because we can only return one thing, but can jam pack the frag
            // finally talk to any components inside the frag 
    return(  
        <> 
            {props.allHornedBeasts.map(beastObj => (
                <HornedBeast
                    key={beastObj._id} // this is key prop, differentiates each horned beast component
                    image_url={beastObj.image_url} //verify in json file
                    title={beastObj.title}
                    description={beastObj.description}               
                
                />
            ))} 
            
        </>
    );
    
}


export default Gallery