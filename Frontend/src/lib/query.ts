import { useSuspenseQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { T_Slides, T_SådanVirkerDet } from "./types";

export const useSlides = () =>
  useSuspenseQuery({
    queryKey: ["slides"],
    queryFn: () => api.get<T_Slides[]>(`slides`),
    staleTime: 1000 * 60 * 60,
  });

export const useSådan = () =>
  useSuspenseQuery({
    queryKey: ["Sådan virker det"],
    queryFn: () => api.get<T_SådanVirkerDet[]>(`content`),
    staleTime: 1000 * 60 * 60,
  });
