import React from "react";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="bg-gray h-screen">
      <Navbar />
      <div></div>
      <div className="pt-[64px] bg-gradient-to-br from-primaryblue/30 to-white w-full h-full  flex">
        <div className="flex-1 flex justify-center items-center">
          <h1 className="font-roboto text-4xl font-semibold mb-16">
            The simple way to <br />
            connect and look back <br />
            on moments forever.
          </h1>
        </div>
        <div
          className=" bg-no-repeat bg-cover h-full flex-1 "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/vLsw5sT/undraw-Social-update-re-xhjr.png)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
