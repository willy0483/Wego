import { useSuspenseQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { T_Slides } from "./types";

export const useSlides = () =>
  useSuspenseQuery({
    queryKey: ["slides"],
    queryFn: () => api.get<T_Slides[]>(`slides`),
    staleTime: 1000 * 60 * 60,
  });
