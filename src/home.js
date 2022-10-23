/*
Author: AutomatedFuture@github
*/

// Home page

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; // Carousel component
import {useNavigate} from 'react-router-dom';

function Home() {

    // Setting hook

    const navigate = useNavigate();

    // Methods for navigation

    const ToBookingPagePray=()=>{
        navigate('/booking',{state:{ poster: "./images/preywide.jpg", title: "Prey (2022)" }});
    }

    const ToBookingPageBulletTrain=()=>{
        navigate('/booking',{state:{ poster: "./images/bullettrain-wide.webp", title: "Bullet Train (2022)" }});
    }

    const ToBookingPageLightyear=()=>{
        navigate('/booking',{state:{ poster: "./images/lightyear-wide.webp", title: "Lightyear (2022)" }});
    }


    return (
        <main>
            <div id="banner">
                <img src="./images/banner.png" alt="" />
            </div>

            {/* // Carousel component */}

            <Carousel interval={5000} autoPlay={true} centerMode={true} centerSlidePercentage={100} infiniteLoop={true} emulateTouch={true}>
                <div>                
                    <img src="./images/preywide.jpg" />
                    <div className="legend">                        
                        <div className="movie-options-expanded">
                            <a href="/movies">Play Trailer</a>
                            <a onClick={()=>{ToBookingPagePray()}}>Buy Tickets</a>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="./images/bullettrain-wide.webp" />
                    <div className="legend">                        
                        <div className="movie-options-expanded">
                            <a href="/movies">Play Trailer</a>
                            <a onClick={()=>{ToBookingPageBulletTrain()}}>Buy Tickets</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./images/lightyear-wide.webp" />
                    <div className="legend">                        
                        <div className="movie-options-expanded">
                            <a href="/movies">Play Trailer</a>
                            <a onClick={()=>{ToBookingPageLightyear()}}>Buy Tickets</a>
                        </div>
                    </div>
                </div>
            </Carousel>


            <div id="grid-ads">
                <img src="./images/museum.png" alt="" />
                <img src="./images/restauraunt.png" alt="" />
            </div>
        </main>
    )
}

export default Home;