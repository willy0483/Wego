import Card from "@/components/card";
import { Spinner } from "@/components/spinner";
import { useTrips } from "@/lib/query";
import { createFileRoute } from "@tanstack/react-router";
import { isToday, isTomorrow } from "date-fns";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/lift/")({
  component: RouteComponent,
  pendingComponent: () => (
    <div className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-80px)]">
      <Spinner />
    </div>
  ),
});

function RouteComponent() {
  const { data: trips, isError, error, refetch } = useTrips();

  const todayTrips = trips.filter((trip) =>
    isToday(new Date(trip.departureDate))
  );
  const tomorrowTrips = trips.filter((trip) =>
    isTomorrow(new Date(trip.departureDate))
  );

  const otherTrips = trips.filter(
    (trip) =>
      !isToday(new Date(trip.departureDate)) &&
      !isTomorrow(new Date(trip.departureDate))
  );

  if (isError)
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-2">
        <div className="bg-app-surface p-6 rounded-xl shadow text-app-text border border-app-secondary w-full max-w-md">
          <p className="text-red-500 mb-2 font-semibold text-center">
            Something went wrong.
          </p>
          <p className="text-app-secondary text-sm mb-4 text-center break-words">
            Error: {error.message}
          </p>
          <button
            aria-label="Refetch the api"
            className="bg-app-primary text-white px-4 hover:cursor-pointer py-2 rounded transition-colors w-full font-semibold"
            onClick={() => refetch()}
          >
            Try Again
          </button>
        </div>
      </div>
    );

  return (
    <>
      {trips.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-260px)] w-full">
          <div className="bg-app-surface p-6 rounded-xl shadow text-app-text border border-app-secondary w-full max-w-md">
            <p className="text-app-secondary mb-2 font-semibold text-center text-lg">
              trips ikke fundet
            </p>
            <p className="text-app-muted text-sm text-center">
              Der er ingen trips endnu.
            </p>
          </div>
        </div>
      ) : (
        <section>
          <h2 className="font-bold text-xl">Næste lift</h2>
          {todayTrips.length > 0 && (
            <>
              <div className="my-4 flex flex-col gap-4">
                {todayTrips.map((item) => (
                  <Card {...item} />
                ))}
              </div>
            </>
          )}
          {tomorrowTrips.length > 0 && (
            <>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 mr-1" />
                <h3 className="font-bold text-lg">I morgen</h3>
              </div>
              <div className="my-4 flex flex-col gap-4">
                {tomorrowTrips.map((item) => (
                  <Card {...item} />
                ))}
              </div>
            </>
          )}
          {otherTrips.length > 0 && (
            <>
              <h3 className="font-bold text-lg mb-2">Senere</h3>
              <div className="my-4 flex flex-col gap-4">
                {otherTrips.map((item) => (
                  <Card {...item} />
                ))}
              </div>
            </>
          )}
        </section>
      )}
    </>
  );
}
