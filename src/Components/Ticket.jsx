/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

function Ticket({ Ticket, seat, price }) {
  const [production, setProduction] = useState({});
  const {
    email,
    fname,
    lname,
    phoneNumber,
    streetAddress,
    city,
    zipcode,
    productionId,
    performance_Date,
  } = Ticket;
  const state = "LA";

  function categorizeTimeOfDay(isoTimestamp) {
    const date = new Date(isoTimestamp);
    const hour = date.getUTCHours(); // Use getUTCHours() to match the Z (UTC) time

    if (hour >= 0 && hour < 3) {
      return "Midnight";
    } else if (hour >= 3 && hour < 12) {
      return "Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Afternoon";
    } else if (hour >= 17 && hour < 20) {
      return "Evening";
    } else {
      return "Night";
    }
  }
  function extractDateOnly(isoTimestamp) {
    const date = new Date(isoTimestamp);
    return date.toLocaleDateString(); // This will format the date based on the user's locale
  }

  useEffect(() => {
    fetch(`https://localhost:7247/api/Productions/${productionId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduction(data);
      })
      .catch(() => {
        console.log("dataFailed");
      });
  }, [productionId]);

  function formatSeats(seats) {
    const rows = "ABCDEFGHIJ".split("");
    return seats
      .map((seat) => {
        const row = rows[parseInt(seat.Row) - 1];
        return `${row}-${seat.Seat}`;
      })
      .join(", ");
  }

  return (
    <div className="flex justify-center">
      <div className="bg-[#ffffcc] text-black font-bold w-[950px] p-10 my-8 rounded-lg">
        <header className="flex items-center mb-8">
          <img
            src="/src/assets/images/logo.png"
            className="mr-[100px] w-[150px]"
          />
          <h2 className="text-2xl">Will Call Reservation Form</h2>
        </header>
        <div>
          <div className="my-2">
            <span>First Name:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={fname}
              disabled
            />
            <span>Last Name: </span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={lname}
              disabled
            />
          </div>
          <div className="my-2">
            <span>Street Address:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={streetAddress}
              disabled
            />
          </div>
          <div className="my-2">
            <span>City:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={city}
              disabled
            />
            <span>State:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={state}
              disabled
            />
            <span>Zip:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={zipcode}
              disabled
            />
          </div>
          <div className="my-2">
            <span>Phone Number:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={phoneNumber}
              disabled
            />
            <span>Email:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={email}
              disabled
            />
          </div>
          <div className="my-2 flex">
            <span>Performance:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={production.production_Name}
              disabled
            />
            <span>Date:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={extractDateOnly(performance_Date)}
              disabled
            />
            <span>Time:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={categorizeTimeOfDay(performance_Date)}
              disabled
            />
          </div>
          <div className="my-2">
            <span>Seat:</span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={formatSeats(seat)}
              readOnly
            />
          </div>

          <div className="my-2 mt-10">
            <span>Total to be collected : </span>
            <input
              className="bg-transparent border-b-2 border-b-black mx-4 text-center"
              type="text"
              value={`$ ${price}`}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
