import { useEffect, useState } from "react";
import Gadget from "./Gadget";

const CardBox = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("./gadgets.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const filteredGadgets =
    selectedCategory === "All"
      ? gadgets
      : gadgets.filter((gadget) => gadget.category === selectedCategory);

  return (
    <>
      <h1 className="text-3xl text-center mb-6 font-bold">Explore Cutting-Edge Gadgets!!!</h1>
      <div className="flex flex-col md:flex-row justify-around container mx-auto border p-10 rounded-3xl mb-10">
        <div className="flex flex-col gap-4 p-4">
          <button
            className={`btn ${
              selectedCategory === "All" ? "bg-[#9538E2] text-white" : ""
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            Show All Gadgets
          </button>
          <button
            className={`btn ${
              selectedCategory === "Smartphones"
                ? "bg-[#9538E2] text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory("Smartphones")}
          >
            Smartphones
          </button>
          <button
            className={`btn ${
              selectedCategory === "Cameras" ? "bg-[#9538E2] text-white" : ""
            }`}
            onClick={() => setSelectedCategory("Cameras")}
          >
            Cameras
          </button>
          <button
            className={`btn ${
              selectedCategory === "Audio Devices"
                ? "bg-[#9538E2] text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory("Audio Devices")}
          >
            MP3/MP4
          </button>
          <button
            className={`btn ${
              selectedCategory === "Smartwatch" ? "bg-[#9538E2] text-white" : ""
            }`}
            onClick={() => setSelectedCategory("Smartwatch")}
          >
            Smartwatch
          </button>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGadgets.length > 0 ? (
            filteredGadgets.map((gadget) => (
              <Gadget key={gadget.id} gadget={gadget} />
            ))
          ) : (
            <div className="col-span-3 ">
              <p className="text-6xl text-red-500 p-8 italic border-2  ">
                There are no product in the page {selectedCategory} category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardBox;
