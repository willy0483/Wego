import type { T_Trips } from "@/lib/types";
import Stars from "./stars";
import { formatDate } from "./formatDate";
import Departure from "./departure";
import Destination from "./destination";
import Seats from "./seats";

const Card = ({
  user,
  departureDate,
  useFerry,
  isElectric,
  addressDeparture,
  cityDeparture,
  addressDestination,
  cityDestination,
  pricePerSeat,
  seatsBooked,
  seatsTotal,
}: T_Trips) => {
  return (
    <section className="grid grid-cols-[220px_1fr_220px] bg-white rounded-xl shadow p-0 items-center overflow-hidden">
      <figure className="flex flex-col justify-center items-center border-r-2 px-4 py-6 h-full">
        <img
          src={user.imageUrl}
          alt={`${user.imageUrl} user image`}
          className="rounded-full w-16 h-16 object-cover mb-2"
        />
        <figcaption>
          <h3 className="text-center font-medium text-base mb-1">
            {user.firstname}
          </h3>
          <Stars avgStars={user.avgStars} />
        </figcaption>
      </figure>

      <div className="flex flex-col gap-2 px-4 py-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg">{formatDate(departureDate)}</span>
          <div className="flex gap-2">
            {useFerry && (
              <img src="icons/Ship.svg" alt="Ship image" className="w-6 h-6" />
            )}
            {isElectric && (
              <img
                src="icons/Lightning.svg"
                alt="Lightning image"
                className="w-6 h-6"
              />
            )}
          </div>
        </div>
        <Departure
          addressDeparture={addressDeparture}
          cityDeparture={cityDeparture}
        />
        <Destination
          addressDestination={addressDestination}
          cityDestination={cityDestination}
        />
      </div>

      <div className="border-l-2 py-8 h-full flex flex-col items-center justify-center">
        <div className="font-bold text-2xl text-center mb-8">
          DKK {pricePerSeat}
        </div>
        <hr className="w-full border-t-2 border-gray-200 mb-8" />
        <Seats seatsBooked={seatsBooked} seatsTotal={seatsTotal} />
      </div>
    </section>
  );
};
export default Card;
