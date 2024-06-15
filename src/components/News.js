import React from 'react';
import './News.css';

function News() {
  return (
   
      <div className="news">
        <h1>Why Choose One Way Cab?</h1>
        <div className="news-allContent">

          <div className="news-booking">
            <ul>
              <li>Instant Booking & Confirmation</li>
              <li>Confirmed Booking Immediately</li>
              <li>No Return Fare For One-Way Trip</li>
              <li>Clean & Professional Cab Services</li>
              <li>Transparent Billing With GPS Based Billing System</li>
            </ul>
          </div>

          <div className="rental">
            <img src="/img/redcar.gif" alt="Car" />
          </div>

          <div className="pickup">
            <ul>
              <li>Pick-Up From Your House</li>
              <li>Dedicated Cab Just For You</li>
              <li>Drop To Your Desired Destination</li>
              <li>Completed More Than 20,000+ One-Way Trips</li>
              <li>Multiple Payment Option Including Credit Card</li>
            </ul>
          </div>
          </div>


        <div className="title-case">
          <span>Discover affordable travel with our seamless <p>intercity car rentals </p>in India – where excellence meets affordability with standardized rates in every city. Unleash your journey!</span>
        </div>

        <div className='at'>
          <p>DISCOVERING INDIA'S DIVERSE LANDSCAPES,ONE SCENIC ROAD TRIP AT A TIME</p>
        </div>    
        </div>

   
     
       
  
  );
}

export default News;
