/*
Author: AutomatedFuture@github
*/

// Bookings page

import React, { useState } from 'react';

import {useNavigate, useLocation} from 'react-router-dom';

function Booking() {

    // Set hooks

    const location = useLocation();
    const navigate = useNavigate();

    // Set states

    const [total, setTotal] = useState(0);
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [showError, setError] = useState(false);

    // Set blank JSX variable for conditional display and error checking

    let bookingDisplay = "";
    

    // Method for moving the page +
    // Method for moving states across pages

    const ToPaymentPage=(e)=>{
            if (total >= 1) {
                window.scrollTo(200, 200);
                navigate('/payment',{state:{ total: total, adult: adult, child: child, poster: location.state.poster, title: location.state.title }});
            } else {
                setError(true);
            }
    }

    // Methods for ticket quantity selector and calculator

    const increase = (e) => {  
        const count = e.target.parentElement.querySelector(".count");
        setError(false);
        if (count.innerHTML < 20 ) {
            const price = Number(e.target.parentElement.parentElement.querySelector(".price").innerHTML.replace(/[^0-9.-]+/g,""))
            count.innerHTML = parseInt(count.innerHTML) + 1;
            setTotal(total + price);
        }
    }

    const decrease = (e) => {
        const count = e.target.parentElement.querySelector(".count");
        if (count.innerHTML > 0 ) {
            const price = Number(e.target.parentElement.parentElement.querySelector(".price").innerHTML.replace(/[^0-9.-]+/g,""))
            count.innerHTML = parseInt(count.innerHTML) - 1;
            setTotal(total - price);
        }
    }

    const increaseAdult = (e) => {
        setError(false);
        const count = e.target.parentElement.querySelector(".count");
        if (count.innerHTML < 20 ) {
            setAdult(adult + 1);
        }
    }

    const decreaseAdult = (e) => {
        const count = e.target.parentElement.querySelector(".count");
        if (count.innerHTML > 0 ) {
            setAdult(adult - 1);
        }
    }

    const increaseChild = (e) => {
        const count = e.target.parentElement.querySelector(".count");
        if (count.innerHTML < 20 ) {
            setChild(child + 1);
        }
    }

    const decreaseChild = (e) => {
        const count = e.target.parentElement.querySelector(".count");
        if (count.innerHTML > 0 ) {
            setChild(child - 1);
        }
    }


    // Check if user previously went through proper menus

    if (location.state) { 
        bookingDisplay = (
        <main>
            <img className="booking-banner" src={location.state.poster} alt="" />
            <h1 className="booking-title">Buy tickets for {location.state.title}</h1>
            
            <div className="selection-container">
                <div className="ticket-grid">
                    <div className="ticket-unit">
                        <p>Adult</p>
                        <p className="price">$20.00</p>
                        <div className="counter">
                            <div className="reduce" onClick={(e) => {
                                decreaseAdult(e);
                                decrease(e);                                
                                }}> - </div>
                            <div className="count"> 0 </div>
                            <div className="increase" onClick={(e) => {
                                increaseAdult(e);
                                increase(e);                                
                                }}> + </div>
                        </div>                        
                    </div>
                </div>
                
                <div className="ticket-grid">
                    <div className="ticket-unit">
                        <p>Child under 16</p>
                        
                        <p className="price">$12.00</p>
                        <div className="counter">
                            <div className="reduce" onClick={(e) => {
                                decreaseChild(e);
                                decrease(e);                                
                                }}> - </div>
                            <div className="count"> 0 </div>
                            <div className="increase" onClick={(e) => {
                                increaseChild(e);
                                increase(e);                                
                                }}> + </div>
                        </div>  
                    </div>
                </div>

                
            </div>

            {showError ? <p className="ticket-warning">Please select at least one ticket!</p> : null } 
        
            <div className="total">
                Total $<span className="total-count">{total}</span>
            </div>
        
            <div className="continue">     
                <button onClick={(e)=>{ToPaymentPage(e)}}>Continue</button>
                <button onClick={(e)=>{navigate(-1)}}>Cancel</button>
            </div>

        </main> 
        )
    }
    else {
        bookingDisplay = (
        <main>
            <div className="Error404">
              <p>You will need to choose a movie in order to enter this page!</p>
              <button onClick={() => navigate("/movies")} className="goback">Explore Movies</button>
            </div>
          </main>
        )
    }


    return (
        <div>
            {bookingDisplay}
        </div>        
    )   
}


export default Booking;