import React from "react";
import "./Yatri.css";

const Yatri = () => {
  return (
    <div className="containe">
      <header className="banner2">
        <div className="banner2-image">
          <img src="/img/rent.png" alt="car" />
        </div>
        <div className="banner2-content">
          <h1>
            Why <span className="highlight">YATRI</span>?
          </h1>
          <div className="features">
            <div className="feature f1">
              <img src="/img/flag.png" alt="Icon" className="icon" />
              <h3>Fast Response Time</h3>
              <p>
                Avail best car rental service in Lucknow with driver for local
                or outstation within the moment of your call for best car hire
                experience.
              </p>
            </div>

            <div className="feature f2">
              <img src="/img/group.png" alt="Icon" className="icon" />
              <h3>Vast Fleet</h3>
              <p>
                We have all kinds of cars on rent available like Sedan, SUV,
                MUV, Premium Sedan, Tempo Traveller etc as per your requirement.
              </p>
            </div>

            <div className="feature f3">
              <img src="/img/phone.png" alt="Icon" className="icon" />
              <h3>Easy to Order</h3>
              <p>
                Easily book cabs online with our website or call our customer
                support team.
              </p>
            </div>

            <div className="feature f4">
              <img src="/img/dollor.gif" alt="Icon" className="icon" />
              <h3>Great Tariffs</h3>
              <p>
                Rent a car! Our car hire tariffs are very low when compared to
                other operators in Lucknow. Book online cabs with best prices in
                Lucknow at Yatri Car Rental.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="pricing">
        <table>
          <thead>
            <tr>
              <th>Car Type</th>
              <th>Model Includes</th>
              <th>Passengers</th>
              <th>Ideal For</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AC Sedans</td>
              <td>Etios, Amaze, Dzire etc.</td>
              <td>4 Pax</td>
              <td>Comfortable trips with small families</td>
              <td>Rs.11/KM</td>
            </tr>
            <tr>
              <td>AC Hatchbacks</td>
              <td>Wagon R, Celerio, Micra etc.</td>
              <td>4 Pax</td>
              <td>Budget trips over short distances</td>
              <td>Rs.11/KM</td>
            </tr>
            <tr>
              <td>AC SUV</td>
              <td>Ertiga, Xylo etc.</td>
              <td>6-7 Pax</td>
              <td>Premium trips with large families</td>
              <td>Rs.13/KM</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* choose section */}
      <div className="choose">
        <section className="chooseService">
          <div className="chooseServ">
            <img src="/img/palm.png" alt="Icon" className="icon"></img>
            <h2>Return Fare, Not Fair!</h2>
            <p>
              Why Pay For Return Journey When You Are Travelling One-Way? Now
              Get Discounted AC Taxi At Just Half Of The Round Trip Cost For
              Your One-Way Travel.
            </p>
          </div>

          <div className="chooseServ">
            <img src="/img/location.png" alt="Icon" className="icon"></img>
            <h2>GPS Based Billing System</h2>
            <p>
              Since the GPS Data Captures the Actual Distance And Time Traveled,
              It Reduce The Chance Of Kilometer Tampering Or Discrepancies In
              Billing.
            </p>
          </div>

          <div className="chooseServ">
            <img src="/img/caricon.png" alt="Icon" className="icon"></img>
            <h2>Now Available Routes Are!</h2>
            <p>Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly</p>
          </div>
        </section>

        <section className="journey">
          <div>
            <h2>
              Why Choose AC Bus Or AC Train For Your{" "}
              <span>One-Way Journey?</span>
            </h2>
            <p>
              Our Oneway Cab Service Is Cheaper Than AC Bus and 2 Tier AC Train
              Ticket Fares, It Reduces Your Travel Time And You Travel At Your
              Own Private Space Also To Enjoy Your Journey. Our One Way Taxi
              Will Come At Your Doorstep And Take You To Your Desired
              Destination. So Book You Oneway Cab From Lucknow To Gorakhpur or
              Varanasi To Bareilly.
            </p>
            <bold>Read More....</bold>
          </div>
          <img src="img/movecar.gif" alt="Taxi" />
        </section>
      </div>
    </div>
  );
};

export default Yatri;
