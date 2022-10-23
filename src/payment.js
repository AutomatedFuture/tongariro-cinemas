/*
Author: AutomatedFuture@github
*/

import {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';


function Payment(props) {

    // Initialising hooks

    const location = useLocation();
    const navigate = useNavigate();

    // Setting states

    
    const [paid, setPaid] = useState(false); 

    // Variable for display JSX and conditional formatting
    let display = "";


    // Form variable states

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [ccNumber, setCcNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState("");
    const [expiryYear, setExpiryYear] = useState("");
    const [ccCSV, setCcCSV] = useState("");

    // Credit card checker function

    const formatAndSetCcNumber = e => {
        const inputVal = e.target.value.replace(/ /g, ""); // Remove all the empty spaces in the input
        let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Get only digits

        if (inputNumbersOnly.length > 16) {
            
            //If entered value has a length greater than 16 then take only the first 16 digits
            
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }

        // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
        const splits = inputNumbersOnly.match(/.{1,4}/g);

        let spacedNumber = "";

        if (splits) {
            spacedNumber = splits.join(" "); // Join all the splits with an empty space
        }

        setCcNumber(spacedNumber); // Set the new CC number
    };


    // Fill form button

    const fillForm = (e) => {
        setFirstName("Saabiq");
        setLastName("Chowdhury");
        setEmailAddress("contact@sebchowdhury.com");
        setPhoneNumber("021 000 000");
        setCcNumber("1111 1111 1111 1111");
        setExpiryMonth("07");
        setExpiryYear("24");
        setCcCSV("909");
    }

    // Submit form

    const handleSubmit = (e) => {   
        e.preventDefault();
        setPaid(true);
    }


    // Check if user previously went through proper menus
    
    if (location.state && !paid) { 
        display = (
                <div>
                <img className="booking-banner" src={location.state.poster} alt="" />
                <h1 className="booking-title">Buy tickets for {location.state.title}</h1>

                    <div className="price-table-container">
                        <div className="price-table">
                                <div className="ticket-type">
                                    <div>
                                        Adult 
                                    </div>
                                    <div>
                                        Child
                                    </div>
                                </div>
                                <div className="ticket-quantity">
                                    <div>
                                        x {location.state.adult}
                                    </div>
                                    <div>
                                        x {location.state.child}
                                    </div>        
                                </div>
                                <div className="ticket-pricing">
                                    <div>
                                        ${location.state.adult * 20}
                                    </div>
                                    <div>
                                        ${location.state.child * 12}
                                    </div>        
                                </div>
                            </div>

                            <div className="amount-to-pay">
                                Amount to Pay <span>${location.state.total}</span>
                            </div>
                        </div>
                        
                    
                    <div id="payment-form-container">
                        <form id="payment-form" onSubmit={handleSubmit}>
                            <h2>Please enter your details:</h2>

                            <div className="twocolumnfields">
                                <div>
                                    <label>First Name </label> <br /> <input type="text" value={firstName} required={true}  onChange={e => setFirstName(e.target.value)}/> <br />
                                </div>
                                <div>
                                    <label>Last Name </label> <br /> <input type="text" value={lastName} required={true} onChange={e => setLastName(e.target.value)} /> <br />
                                </div>
                            </div>
                            
                            <div className="twocolumnfields">
                                <div>
                                    <label>Email address </label> <input type="email" required={true} value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
                                </div>
                                <div>
                                    <label>Phone number </label> <input required={true} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="phone"/>
                                </div>
                            </div>
                            

                            

                            <div className="onecolumnfield">
                                <div>
                                    <label>Credit card number </label> <br /> <input id="cardnumber" type="text" value={ccNumber} onChange={formatAndSetCcNumber} required={true} />
                
                                </div>
                            </div>

                            <div className="twocolumnfields">
                                <div>
                                    <label>Expiry Month </label> <input id="cardnumber" type="text" pattern="[0-9]*" value={expiryMonth} onChange={e => setExpiryMonth(e.target.value)} inputMode="numeric"  required={true}/>
                                </div>
                                <div>
                                    <label>Expiry Year </label> <input id="cardnumber" type="text" pattern="[0-9]*" value={expiryYear} onChange={e => setExpiryYear(e.target.value)} inputMode="numeric" required={true} />
                                </div>
                            </div>

                            <div className="onecolumnfield">
                                <div>
                                    <label>CSV </label> <br /> <input id="cardnumber" value={ccCSV} onChange={e => setCcCSV(e.target.value)} type="text" pattern="[0-9]*" inputMode="numeric" required={true} />
                                </div>
                            </div>

                            <br />
                            <button className="payment-submit" type="button" onClick={fillForm}>(Demonstration) Fill Values</button><br /> <br />

                            <button className="payment-submit">Submit</button>
                            <br /> <br />
                            <button className="payment-submit goback" type="button" onClick={() => navigate(-1)}>Go Back</button><br /> <br />
                            
                        </form>
                    </div>
            </div>
        )
    }
    else {
        display = (
            <main>
            <div className="Error404">
              <p>You will need to choose a movie in order to enter this page!</p>
              <button onClick={() => navigate("/movies")} className="goback">Explore Movies</button>
            </div>
          </main>
        )
    }

    const goBackToMovies = () => { 
        navigate("/movies")
    }

    if (paid) {  // Thank you message after user paid
        return (
            <main>
                <div className="payment-finished">
                    <br /><br />
                    <img src="" alt="" />
                    <br />
                    <h1>Thank you {firstName}. Enjoy the movie!</h1>
                    <br />
                    <button onClick={goBackToMovies}>Go Back To Movies</button>
                    <br /><br /><br />
                    
                </div>
            </main>             
        )
    } else {
        return (
            <main>
                {display}
            </main>             
        )
    }
}

export default Payment;