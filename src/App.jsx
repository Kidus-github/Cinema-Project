import Header from "./Components/Header";
import SiteContent from "./Components/SiteContent";
import SignUpPage from "./Pages/SignUpPage";
import TicketPage from "./Pages/TicketPage";
import MoviesPage from "./Pages/MoviesPage";

import GetTicketPage from "./Pages/GetTicketPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="text-white">
        <Header />
        <Routes>
          <Route path="/" element={<SiteContent />} />
          <Route path="/ticket" element={<TicketPage />} />

          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/movies" element={<MoviesPage />} />
          <Route
            path="/GetTicketPage/:id"
            element={<GetTicketPage rows={10} columns={15} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    // {/* <GetTicketPage  /> */}
  );
}

export default App;
