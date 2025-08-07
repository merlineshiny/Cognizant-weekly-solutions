import React from 'react';
import './App.css';

function App() {
  const officeList = [
    {
      name: "Tech Park Office",
      rent: 55000,
      address: "123, City Center, Bangalore",
      image: "https://via.placeholder.com/400x200?text=Office+1"
    },
    {
      name: "Startup Hub",
      rent: 70000,
      address: "45, Innovation Road, Chennai",
      image: "https://via.placeholder.com/400x200?text=Office+2"
    },
    {
      name: "Co-Work Space",
      rent: 45000,
      address: "88, MG Road, Mumbai",
      image: "https://via.placeholder.com/400x200?text=Office+3"
    }
  ];

  return (
    <div className="App">
      <h1>Welcome to Office Space Rental App</h1>

      {officeList.map((office, index) => (
        <div key={index}>
          <img src={office.image} alt={office.name} />
          <h2>{office.name}</h2>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            Rent: ₹{office.rent}
          </p>
          <p>Address: {office.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
