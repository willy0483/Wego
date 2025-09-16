type DestinationProps = {
  cityDestination: string;
  addressDestination: string;
};

const Destination = ({
  addressDestination,
  cityDestination,
}: DestinationProps) => {
  return (
    <figure className="flex  gap-3">
      <img
        src="icons/Destination.svg"
        alt="Destination icon"
        className="w-6 h-6"
      />
      <figcaption>
        <p className="font-bold text-md leading-tight">{addressDestination}</p>
        <p className="text-md leading-tight">{cityDestination}</p>
      </figcaption>
    </figure>
  );
};
export default Destination;
