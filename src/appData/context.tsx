"use client";

import { CinemaData, MovieData } from "@/types/api";
import { createContext } from "react";

export const AppDataContext = createContext<{
  movies: MovieData[];
  cinemas: CinemaData[];
}>({ movies: [], cinemas: [] });

export function AppDataProvider({
  movies,
  cinemas,
  children,
}: {
  movies: MovieData[];
  cinemas: CinemaData[];
  children: React.ReactNode;
}) {
  return (
    <AppDataContext.Provider value={{ movies, cinemas }}>
      {children}
    </AppDataContext.Provider>
  );
}
