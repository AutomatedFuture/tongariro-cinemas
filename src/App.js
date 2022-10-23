/*
Author: AutomatedFuture@github
*/

// Brings together all routes

import Header from "./header";
import {Routes, Route, Navigate } from "react-router-dom";
import Footer from "./footer";
import Home from "./home";
import {Helmet} from "react-helmet";
import Booking from './booking';
import Movies from './movies';
import Payment from './payment';
import About from './about';
import Eror404 from './Error404';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      </Helmet>
      <div className="main_container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="movies" element={<Movies />} />
          <Route path="payment" element={<Payment />} />
          <Route path="about" element={<About hello="hello" />} />
          <Route path="cinemas" element={<Eror404 />} />
          <Route path="rewards" element={<Eror404 />} />
          <Route path="/404" element={<Eror404 />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;