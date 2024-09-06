import React, { useState } from 'react';
import axios from 'axios';

function AppointmentBooking() {
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');

    const handleBookAppointment = async () => {
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5000/api/appointments', { doctor, date }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Appointment booked');
        } catch (error) {
            console.error('Error booking appointment', error);
            alert('Booking failed');
        }
    };

    return (
        <div className="container">
            <h2>Book Appointment</h2>
            <form>
                <div className="form-group">
                    <label>Doctor</label>
                    <input type="text" className="form-control" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleBookAppointment}>Book Appointment</button>
            </form>
        </div>
    );
}

export default AppointmentBooking;
