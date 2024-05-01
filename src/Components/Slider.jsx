import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Slider() {
  const [current, setCurrent] = useState(0);
  const Slider = [
    {
      url: "/src/assets/images/AL_1034_A-LIST_SPRING_ACQUISITION_HP_DESKTOP_HERO_2000x600_V2.avif",
      shortDiscription: "Take a Swing at Our Sweepstakes",
      discription:
        "Prepare for gameday and get tickets to see CHALLENGERS Thursday through Sunday for your chance to win a trip to see the BNP Paribas Open in Palm Springs!",
    },
    {
      url: "/src/assets/images/BKW DesktopHero_2000x600.avif",
      shortDiscription: "One Word: Unhinged.",
      discription:
        "See Bill Skarsgård star in the action-packed BOY KILLS WORLD, opening Friday at Medallion Theatres.",
    },
    {
      url: "/src/assets/images/FLM_2656_ABIGAIL_TTHRILLS_AND_CHILLS_Awareness_Desktop_Hero_2000x600.avif",
      shortDiscription: "Children Can Be Such Monsters",
      discription:
        "Watch a group of criminals attempt to survive an isolated evening with a kidnapped but dangerous little girl in ABIGAIL, now showing.",
    },
    {
      url: "/src/assets/images/FLM_2647_UNSUNG_HERO_GENERAL_AWARENESS_HP_Desktop_Hero.webp",
      shortDiscription: "From Down Under to Center Stage",
      discription:
        "Watch the inspirational true story of one family’s unlikely journey to musical success in UNSUNG HERO, now showing.",
    },
    {
      url: "/src/assets/images/FLM_2666_CHALLENGERS_SWEEPSTAKES_HP_Desktop_Hero_2000x600.avif",
      shortDiscription: "Enjoy a Month of Movies for 99ETB",
      discription:
        "Become an A-Lister now and save up to $23.96+tax on your first month. Watch up to 3 movies every week in any format, including Dolby Cinema and IMAX®.",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      if (current == Slider.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 5000);
  });
  function handlePrevious() {
    if (current == 0) setCurrent(Slider.length - 1);
    else setCurrent(current - 1);
    console.log(current);
  }
  function handleNext() {
    if (current == Slider.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }
  return (
    <div className="h-fit flex justify-center overflow-hidden relative">
      <ul
        className={`h-full relative flex transition ease-in-outout duration-700`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {Slider.map((slide, i) => (
          <li key={i} className="w-full shrink-0 relative">
            <img
              src={slide.url}
              alt="BKW DesktopHero"
              className="h-full object-cover"
            />
            <div className="absolute bottom-[200px] left-[100px] w-[900px]">
              <h1 className="font-bold text-6xl my-8">
                {slide.shortDiscription}
              </h1>
              <p className="font-light text-2xl ">{slide.discription}</p>
            </div>
            <button className="font-semibold border rounded-lg bottom-[100px] px-10 py-4 bg-transparent border-white absolute left-[100px] hover:bg-#f0dca6 hover:text-black cursor-pointer">
              Get Ticket
            </button>
          </li>
        ))}
      </ul>
      <div className="absolute top-0 flex justify-between items-center h-full w-full text-white px-10 text-3xl">
        <button onClick={() => handlePrevious()}>
          <FaAngleLeft />
        </button>
        <button onClick={() => handleNext()}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Slider;
