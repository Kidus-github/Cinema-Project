function Nav() {
  return (
    <div className="flex gap-6 px-5">
      <div className="cursor-pointer hover:text-[#f0dca6] font-semibold px-2 py-1 ease-in-out">
        Movies
      </div>
      <div className="cursor-pointer hover:text-[#f0dca6] font-semibold px-2 py-1 ease-in-out">
        Foods And Drinks
      </div>
      <div className="cursor-pointer hover:text-[#f0dca6] font-semibold px-2 py-1 ease-in-out">
        Ticket
      </div>
      <div className="cursor-pointer hover:text-[#f0dca6] font-semibold px-2 py-1 ease-in-out">
        Schedule
      </div>
    </div>
  );
}

export default Nav;
