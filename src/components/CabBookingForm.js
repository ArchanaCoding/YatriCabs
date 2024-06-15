import React, { useState } from "react";
import "./CabBookingForm.css";

const CabBookingForm = () => {
  const [tripType, setTripType] = useState("Outstation");
  const [tripMode, setTripMode] = useState("One Way");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    pickupDate: "",
    returnDate: "",

    pickupTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = () => {
    alert(
      `Trip Type: ${tripType}\nTrip Mode: ${tripMode}\nFrom: ${formData.from}\nTo: ${formData.to}\nPickup Date: ${formData.pickupDate}\nReturn Date: ${formData.returnDate}\nPickup Time: ${formData.pickupTime}`
    );
  };

  return (
    <div className="cab-booking-form">
      <div className="trip-type">

        <button
          className={tripType === "Outstation" ? "active" : ""}
          onClick={() => setTripType("Outstation")}
        >
          Outstation
        </button>

        <button
          className={tripType === "Local" ? "active" : ""}
          onClick={() => setTripType("Local")}
        >
          Local
        </button>

        <button
          className={tripType === "Airport" ? "active" : ""}
          onClick={() => setTripType("Airport")}
        >
          Airport
        </button>

      </div>

      {tripType === "Outstation" && (
        <>
          <div className="trip-mode">
            <button
            className={`trip-mode-button ${tripMode === "One Way" ? "active" : ""} ml-10`}
            onClick={() => setTripMode("One Way")}
            >
              One Way
            </button>
            <button
            className={`trip-mode-button ${tripMode === "Round Trip" ? "active" : ""} mr-10`}
            onClick={() => setTripMode("Round Trip")}
            >
              Round Trip
            </button>
          </div>
          <div className="form-field">
            <input
              type="text"
              name="from"
              placeholder="From"
              value={formData.from}
              onChange={handleInputChange}
            />
            <img src="/img/arrow.png" alt="arrow"></img>
            <input
              type="text"
              name="to"
              placeholder="To"
              value={formData.to}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-fields">
            <label className="l1">PICK UP DATE</label>
            <input
              type="date"
              name="pickupDate"
              placeholder="Pick Up Date"
              value={formData.pickupDate}
              onChange={handleInputChange}
            />
            {tripMode === "Round Trip" && (
              <>
                <label className="l1">RETURN DATE</label>
                <input
                  type="date"
                  name="returnDate"
                  placeholder="Return Date"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                />
              </>
            )}
            <label className="l1">PICKUP AT</label>
            <input
              type="time"
              name="pickupTime"
              placeholder="Pick Up At"
              value={formData.pickupTime}
              onChange={handleInputChange}
            />
          </div>
        </>
      )}

      {tripType === "Local" && (
        <>
        <div className="form-field">
          <input
            type="text"
            name="from"
            placeholder="From"
            value={formData.from}
            onChange={handleInputChange}
          />
          </div>
          <div className="form-fields">
          <label className="l1">PICK UP DATE</label>
          <input
            type="date"
            name="pickupDate"
            placeholder="Pick Up Date"
            value={formData.pickupDate}
            onChange={handleInputChange}
          />
          <label className="l1">PICKUP AT</label>
          <input
            type="time"
            name="pickupTime"
            placeholder="Pick Up At"
            value={formData.pickupTime}
            onChange={handleInputChange}
          />
        </div>
        </>
      )}

      {tripType === "Airport" && (
        <>
        <div className="form-field">
          <input
            type="text"
            name="from"
            placeholder="From"
            value={formData.from}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="trip"
            placeholder="Trip"
            value={formData.trip}
            onChange={handleInputChange}
          />
          </div>
          <div className="form-fields">
          <label className="l1">PICK UP DATE</label>
          <input
            type="date"
            name="pickupDate"
            placeholder="Pick Up Date"
            value={formData.pickupDate}
            onChange={handleInputChange}
          />
          <label className="l1">PICKUP AT</label>
          <input
            type="time"
            name="pickupTime"
            placeholder="Pick Up At"
            value={formData.pickupTime}
            onChange={handleInputChange}
          />
        </div>
        </>
      )}

      <button className="explore-cabs" onClick={handleSubmit}>
        Explore Cabs
      </button>
    </div>
  );
};

export default CabBookingForm;

