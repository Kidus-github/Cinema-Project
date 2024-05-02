import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { useNavigate } from "react-router";

function MoviesPage() {
  let navigate = useNavigate();
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7247/api/Productions`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch(() => {
        console.log("dataFailed");
        // console.log(news.contentId);
      });
  }, []);

  function handleticket(id) {
    navigate(`/GetTicketPage/${id}`);
  }
  return (
    <div className="flex gap-6 px-8 relative top-[150px] w-full justify-around flex-wrap">
      {Movies.map((movie, i) => (
        <MovieCard
          key={i}
          url={movie.production_Image}
          title={movie.production_Name}
          shortdisc={movie.production_ShortDisc}
          handleticket={() => handleticket(movie.productionId)}
        />
      ))}
    </div>
  );
}

export default MoviesPage;
