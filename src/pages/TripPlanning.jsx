import React, { useState } from 'react';
// Import your CSS file if you have specific styles for this page
// import './TripPlanning.css';

const TripPlanning = () => {
    const [tripDetails, setTripDetails] = useState({
        departure: '',
        arrival: '',
        departureDate: '',
        arrivalDate: ''
    });

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the trip planning logic here
        console.log(tripDetails);
    };

    // Handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTripDetails({ ...tripDetails, [name]: value });
    };

    return (
        <div className="trip-planning">
            <h1>Plan Your Trip</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Departure Location:</label>
                    <input
                        type="text"
                        name="departure"
                        value={tripDetails.departure}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Arrival Location:</label>
                    <input
                        type="text"
                        name="arrival"
                        value={tripDetails.arrival}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Departure Date and Time:</label>
                    <input
                        type="datetime-local"
                        name="departureDate"
                        value={tripDetails.departureDate}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Arrival Date and Time:</label>
                    <input
                        type="datetime-local"
                        name="arrivalDate"
                        value={tripDetails.arrivalDate}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">Plan Trip</button>
            </form>
        </div>
    );
};

export default TripPlanning;
