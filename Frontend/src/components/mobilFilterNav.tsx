import { useFilter } from "@/lib/utils";
import { useState } from "react";

const MobilFilterNav = () => {
  const { setLocation, setDestination } = useFilter();
  const [tempLocation, setTempLocation] = useState<string>("");
  const [tempDestination, setTempDestination] = useState<string>("");

  const handleSøg = () => {
    setLocation(tempLocation);
    setDestination(tempDestination);
  };

  return (
    <section className="max-w-[500px] bg-app-background mx-auto rounded-2xl p-8 xl:hidden">
      <div className="max-w-md mx-auto flex flex-col gap-4">
        <h2 className="font-bold text-lg">Find et lift</h2>
        <div className="flex flex-col gap-3">
          <div className="relative flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 bg-white shadow-sm w-full h-12">
            <img
              src="icons/Location.svg"
              alt="Location icon"
              className="w-5 h-5 text-app-secondary"
            />
            <input
              type="text"
              id="location-mobile"
              name="location-mobile"
              placeholder="Hvor fra"
              value={tempLocation}
              onChange={(e) => setTempLocation(e.target.value)}
              className="flex-1 border-none outline-none bg-transparent text-base placeholder:text-gray-400"
            />
          </div>
          <div className="relative flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 bg-white shadow-sm w-full h-12">
            <img
              src="icons/Destination.svg"
              alt="destination icon"
              className="w-5 h-5 text-app-secondary"
            />
            <input
              type="text"
              id="destination-mobile"
              name="destination-mobile"
              placeholder="Hvor til"
              value={tempDestination}
              onChange={(e) => setTempDestination(e.target.value)}
              className="flex-1 border-none outline-none bg-transparent text-base placeholder:text-gray-400"
            />
          </div>
        </div>
        <button
          onClick={handleSøg}
          className="bg-app-secondary w-full text-white font-semibold rounded-full px-6 py-3 shadow hover:bg-app-primary90 transition hover:cursor-pointer text-lg"
        >
          Søg lift
        </button>
      </div>
    </section>
  );
};
export default MobilFilterNav;
