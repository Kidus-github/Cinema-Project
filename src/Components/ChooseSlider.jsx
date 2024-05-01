function ChooseSlider() {
  const Movielist = [
    {
      url: "/src/assets/images/bg1.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg2.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg3.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg4.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg5.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg6.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg7.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg8.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg9.avif",
      title: "",
      discription: "",
    },
    {
      url: "/src/assets/images/bg10.avif",
      title: "",
      discription: "",
    },
  ];
  return (
    <div className="h-[100vh] text-white overflow-hidden">
      <ul className="flex h-full gap-10 m-4 p-10">
        {Movielist.map((movie, i) => {
          return (
            <li key={i} className="w-[400px] shrink-0 h-[550px] relative p-10">
              <img
                src={movie.url}
                alt=""
                className="w-full h-full bg-black bg-blend-lighten mb-4"
              />
              <div className="flex flex-col w-full justify-center text-center">
                <div>
                  <h1>Title</h1>
                  <span>discription</span>
                </div>

                <button>GetTicket</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChooseSlider;
