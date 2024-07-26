import { Tailwind, CSS } from "@fileforge/react-print";

const Template = ({ guest, companion }) => {
  return (
    <div style={{ color: "#2b3d58", background: "#fff0db" }}>
      <CSS>{`@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");@page {size: Letter;margin-top:0cm;margin-left:0cm;margin-right:0cm;margin-bottom:0cm;}`}</CSS>
      <Tailwind className="relative">
        <img src="plantas.png" alt="" className="absolute bottom-0 w-[850px]" />
        <div className="ml-[2cm] mr-[2cm] ">
          <main className="h-[100vh] flex flex-col">
            <div className="mt-20 mb-3" style={{ fontFamily: "Great Vibes" }}>
              <h1 className="text-center text-8xl">Maria & Diego</h1>
            </div>
            <div className="relative flex h-[30vh]">
              <div className=" flex flex-col w-1/2 h-full relative">
                <div
                  className="w-full mb-2 "
                  style={{ height: "calc(50% - 0.5rem)" }}
                >
                  <img
                    src="1.webp"
                    alt="Maria & Diego"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center">
                  <p
                    className="bg-white p-2 text-center text-xs font-semibold tracking-widest rounded"
                    style={{ fontFamily: "Raleway" }}
                  >
                    WE'RE GETTING MARRIED!
                  </p>
                </div>
                <div
                  className="w-full overflow-hidden mt-2"
                  style={{ height: "calc(50% - 0.5rem)" }}
                >
                  <img
                    src="2.webp"
                    alt="Maria & Diego"
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              </div>
              <div className="w-1/2 h-full ml-4">
                <img
                  src="3.webp"
                  alt="Maria & Diego"
                  className="h-full w-full object-cover rounded"
                />
              </div>
              <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2 flex justify-center">
                <p
                  className="bg-white p-2 text-center text-xs font-semibold tracking-widest rounded"
                  style={{ fontFamily: "Raleway" }}
                >
                  AND YOU ARE INVITED
                </p>
              </div>
            </div>
            <div
              className="mt-10 flex justify-center text-5xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              <p className="inline-block border-y-2 p-2 border-y-[#2b3d58]">
                &nbsp;SAVE THE DATE&nbsp;
              </p>
            </div>
            <div className="mt-5 text-center">
              <p>
                Saturday / <span className="font-semibold">14</span> / September
                24
              </p>
            </div>
            {/* <div
              className="flex justify-center items-center mt-10 text-lg font-semibold"
              style={{ fontFamily: "Raleway" }}
            >
              <div className="mr-10 flex flex-col items-center">
                <h3>Wednesday</h3>
                <h3>4:00 PM</h3>
              </div>
              <div className="mr-10">
                <h3 className="text-3xl">23</h3>
              </div>
              <div className="flex flex-col items-center">
                <h3>September</h3>
                <h3>2024</h3>
              </div>
            </div> */}
            <div
              className="flex justify-center items-center mt-5"
              style={{ fontFamily: "Raleway" }}
            >
              <div className="flex flex-col items-center justify-center font-semibold">
                <h3>Kormoran MediSpa</h3>
                <h3>Rowy</h3>
                <h3>Poland</h3>
              </div>
            </div>
            <div>
              <h3
                className="text-center mt-10 text-2xl font-semibold"
                style={{ fontFamily: "Great Vibes" }}
              >
                {guest} {companion && `& ${companion}`}
              </h3>
            </div>
          </main>
        </div>
      </Tailwind>
    </div>
  );
};

export default Template;
