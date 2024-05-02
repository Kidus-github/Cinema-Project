import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="flex gap-6 px-5">
      <NavLink
        to={"/movies"}
        className="cursor-pointer hover:text-[#f0dca6] font-semibold px-2 py-1 ease-in-out"
      >
        Movies
      </NavLink>
      <NavLink className="cursor-pointer hover:text-[#f0dca6] font-semibold px-2 py-1 ease-in-out">
        Foods And Drinks
      </NavLink>
      <NavLink
        to={"/ticket"}
        className="cursor-pointer hover:text-[#f0dca6] font-semibold px-2 py-1 ease-in-out"
      >
        Ticket
      </NavLink>
      <NavLink
        to={"/"}
        className="cursor-pointer hover:text-[#f0dca6] font-semibold px-2 py-1 ease-in-out"
      >
        Schedule
      </NavLink>
    </div>
  );
}

export default Nav;
