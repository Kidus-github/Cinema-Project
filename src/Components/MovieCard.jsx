/* eslint-disable react/prop-types */
function MovieCard({ url, title, shortdisc, handleticket }) {
  return (
    <div className="w-[350px] mb-8 ">
      <img src={url} className="w-full h-[500px] mb-4" />
      <div className="flex flex-col items-center flex-wrap">
        <h1 className="text-3xl text-white uppercase">{title}</h1>
        <p>{shortdisc}</p>
      </div>
      <button
        className="bg-[#f0dca6] text-black px-8 py-4 mt-4 rounded-lg font-bold m-auto w-full hover:bg-[#f0dca6ba]"
        onClick={handleticket}
      >
        Get Ticket
      </button>
    </div>
  );
}

export default MovieCard;
