import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import puja from "@/data/puja";
import PujaCard from "@/components/PujaCard";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">

        <Header name="Ramesh Adhikari" />

        <main className="mx-auto max-w-2xl px-4 pt-28">

          {/* Heading */}
          <div className="mb-4 text-center">
            <h5 className=" font-bold text-gray-900/80 font-mono duration-500 mt-2"> Puja Services :</h5>
          </div>

          {/* Cards */}
          <div className="space-y-5">
            {puja.map((item) => (
              <PujaCard key={item.name} puja={item} />
            ))}
          </div>
          {/* Cards ends */}

        </main>

        <Footer />

      </div>
    </>
  );
};

export default Home;
