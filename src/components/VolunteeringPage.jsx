import React from 'react';
import '../Styles/VolunteeringPage.css';
import Navbarhome from './Navbar';

function VolunteerPage() {
  return (
    <>
    <Navbarhome/>
    <div className='a'>
    <div className="form-container mb-5">
      <h2>Volunteer Registration Form</h2>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" placeholder="Enter your phone number" required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" placeholder="Enter your address" required></textarea>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="date">Date of Availability:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="interests">Interests and Skills:</label>
        <textarea id="interests" name="interests" placeholder="Enter your interests and skills" required></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
    </div>
    </>
  );
}

export default VolunteerPage;
