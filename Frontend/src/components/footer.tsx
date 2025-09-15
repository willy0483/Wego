import { useLocation } from "@tanstack/react-router";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <figure
      className={`${pathname == "/" ? "fixed bottom-0 z-10" : "relative"} w-full `}
    >
      <img
        src="bg/WeGoFooter.svg"
        alt="wego footer background"
        className="w-full"
      />
      <figcaption className=" absolute bottom-0">
        <div className="text-app-secondary text-xl font-light mb-2 mx-4">
          <p> © 2025 WeGo ApS</p>
          <p> Fartstræde 12c, 2. sal, 9000 Aalborg</p>
        </div>
      </figcaption>
    </figure>
  );
};
export default Footer;
