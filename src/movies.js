/*
Author: AutomatedFuture@github
*/

// For displaying all movies

import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import YoutubeEmbed from "./YoutubeEmbed";
import movies_data from './moviesData';


function Movie(props) {  
    const navigate = useNavigate();
    const ToBookingPage=()=>{
        navigate('/booking',{state:{ poster: props.wide_link, title: props.title }});
    }

    return (
        <div className={"movie_item"}>
            <div className="poster">
                <img src={props.poster_link} alt={"Movie poster for " + props.title}/>
            </div>
            <div className="movie-details">
                <h1>{props.title} ({props.year})</h1>
                <p>{props.synopsis}</p>
                <YoutubeEmbed embedId={props.trailer_link} />
                <div className="movie-page-button">                            
                            <a onClick={()=>{ToBookingPage()}}>Buy Tickets</a>
                </div>
                
            </div>
        </div>    
    )

}

function Movies() {
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        setMovies(movies_data);
    });

   
    const movieComponents = movies.map((movie) => (
        
        <Movie 
            key={"movie" + movie.id} 
            id={movie.id}
            title={movie.title}
            year={movie.year}
            synopsis={movie.synopsis}
            poster_link={movie.poster_link}
            trailer_link={movie.trailer_link}
            tabIndex={movie.id}
            wide_link={movie.wide_link}
            />
            
    ));

    return (
        <main>
            <div className="movies_container">
                {movieComponents}
            </div>                
        </main>           
    )
    
}

export default Movies;
