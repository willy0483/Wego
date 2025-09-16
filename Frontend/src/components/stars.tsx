import { Star } from "lucide-react";

const Stars = ({ avgStars }: { avgStars: number }) => {
  return (
    <div className="flex ">
      {Array.from({ length: 6 }).map((_, i) =>
        i < avgStars ? (
          <Star fill="#F3CC0B" stroke="none" />
        ) : (
          <Star fill="#DFE4E7" stroke="none" />
        )
      )}
    </div>
  );
};
export default Stars;
