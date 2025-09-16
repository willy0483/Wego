type DepartureProps = {
  cityDeparture: string;
  addressDeparture: string;
};

const Departure = ({ cityDeparture, addressDeparture }: DepartureProps) => {
  return (
    <figure className="flex gap-3">
      <img src="icons/Location.svg" alt="Location icon" className="w-6 h-6" />
      <figcaption>
        <p className="font-bold text-md leading-tight">{cityDeparture}</p>
        <p className="text-md leading-tight">{addressDeparture}</p>
      </figcaption>
    </figure>
  );
};
export default Departure;
