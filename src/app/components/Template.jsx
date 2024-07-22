import { Footnote, Tailwind, CSS } from "@fileforge/react-print";

const Template = ({ name, guest, email }) => {
  return (
    <div style={{  color: "#2b3d58" }}>
      <CSS>{`@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");@page {size: Letter;margin-top:0cm;margin-left:0cm;margin-right:0;margin-bottom:0cm;}`}</CSS>
      <Tailwind className="relative">
        <div className="ml-[2cm] mr-[2cm] ">
          {/* <img
            src="Picture1.png"
            alt="sakura"
            className="absolute w-56 -left-20 -top-10"
          />
          <img
            src="Picture2.png"
            alt="sakura"
            className="absolute w-52 -right-10 -top-14"
          /> */}
          <img src="border.png" alt="sakura" className="absolute left-0" />
          {/* <img
            src="2.png"
            alt="sakura"
            className="absolute left-0"
          /> */}
          {/* <img
            src="border1.png"
            alt="sakura"
            className="absolute w-64 bottom-0 right-0"
          /> */}
          <main className="pt-24 h-[100vh] flex flex-col">
            <div style={{ fontFamily: "Great Vibes" }}>
              <h1 className="text-center text-6xl mt-36">Diego Arancibia</h1>
              <h1 className="text-center text-6xl">&amp;</h1>
              <h1 className="text-center text-6xl">Maria Arancibia</h1>
            </div>
            <div
              className="text-center text-lg mt-4"
              style={{ fontFamily: "Raleway" }}
            >
              <h2>INVITE YOU TO CELEBRATE</h2>
              <h2>THEIR WEDDING DAY</h2>
            </div>
            <div
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
            </div>
            {/* <div className="" style={{ fontFamily: "Raleway" }}>
              <h3 className="text-center">1234 Wedding Street</h3>
              <h3 className="text-center">Wedding City</h3>
            </div> */}
            <div
              className="flex justify-center items-center mt-10"
              style={{ fontFamily: "Raleway" }}
            >
              <div className="flex flex-col items-center justify-center">
                <h3>Slane Castle</h3>
                <h3>404 Not Found Street</h3>
                <h3>Poland</h3>
              </div>
            </div>
          </main>
        </div>
      </Tailwind>
    </div>
  );
};

export default Template;
