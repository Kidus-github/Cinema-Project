import { useState, useEffect } from "react";
import Ticket from "../Components/Ticket";
import { useParams } from "react-router-dom";
/* eslint-disable react/prop-types */

function GetTicketPage({ rows, columns }) {
  const params = useParams();
  const { id } = params;
  const userId = "6631a8b10a04c13998080909";
  // const perId = "663306299578b8ce6cff7c8f";
  const [seats, setSeats] = useState(
    Array.from({ length: rows }, () => new Array(columns).fill(false))
  );
  const selectedSeats = [];
  const [selectedSeat, setSelectedSeats] = useState([]);

  const [Showticket, setshowTicket] = useState(false);
  const [price, setPrice] = useState(0);

  const toggleSeat = (row, col) => {
    const newSeats = seats.map((seatRow, idx) => {
      if (idx === row) {
        return seatRow.map((seat, seatIdx) => (seatIdx === col ? !seat : seat));
      }
      return seatRow;
    });
    setSeats(newSeats);
  };

  // Function to get and display selected seats
  const getSelectedSeats = () => {
    seats.forEach((row, rowIndex) => {
      row.forEach((seat, colIndex) => {
        if (seat) {
          selectedSeats.push({
            Row: `${rowIndex + 1}`,
            Seat: `${colIndex + 1}`,
          });
          setSelectedSeats([
            ...selectedSeats,
            {
              Row: `${rowIndex + 1}`,
              Seat: `${colIndex + 1}`,
            },
          ]);
        }
      });
    });
    // alert("Selected Seats: " + selectedSeats.join(", "));
    console.log(selectedSeat);
    setPrice(selectedSeats.length * 120 + 100);
    setshowTicket(true);
  };

  useEffect(() => {
    fetch(`https://localhost:7247/api/User/${userId}`)
      .then((res) => res.json())
      .then((userdata) => {
        fetch(
          `https://localhost:7247/api/Performance/GetPerformanceByProductionid?id=${id}`
        )
          .then((res) => res.json())
          .then((datas) => {
            fetch(
              `https://localhost:7247/api/Performance/${datas.performanceId}`
            )
              .then((res) => res.json())
              .then((data) => {
                setticket({ ...userdata, ...data });
              });
          });
      })
      .catch(() => {
        console.log("dataFailed");
        // console.log(news.contentId);
      });
  }, [userId, id]);

  const [ticket, setticket] = useState([]);

  return (
    <div className="relative top-[150px]">
      <h1 className="text-center text-3xl">Select Your Seat</h1>
      <div className="flex flex-col items-center justify-center p-4 overflow-auto">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center">
            {row.map((selected, colIndex) => (
              <button
                key={colIndex}
                className={`text-black m-1 w-14 h-10 ${
                  selected ? "bg-blue-500" : "bg-gray-300"
                } rounded focus:outline-none transition duration-300 ease-in-out transform hover:scale-110`}
                onClick={() => toggleSeat(rowIndex, colIndex)}
                aria-label={`Seat: ${rowIndex + 1}-${colIndex + 1}`}
              >
                {selected ? "✓" : `${rowIndex + 1}-${colIndex + 1}`}
              </button>
            ))}
          </div>
        ))}
        <button
          className="mt-4 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
          onClick={getSelectedSeats}
        >
          Confirm Selection
        </button>
      </div>
      <div>
        {Showticket && (
          <div className="pb-36">
            <Ticket Ticket={ticket} seat={selectedSeat} price={price} />
            <div className="flex justify-center gap-28 font-bold">
              <button className="mt-4 px-8 py-2 text-white bg-green-500 rounded hover:bg-green-700">
                PAY
              </button>
              <button className="mt-4 px-8 py-2 text-black bg-[#f0dca6] rounded hover:bg-[#f0dca6ad]">
                CANCEL
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GetTicketPage;
