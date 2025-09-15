import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Session } from "./types";
import { createContext, useContext } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AuthContextType {
  loginData: Session | null | undefined;
  createSession: (payload: Session) => boolean;
  logout: () => boolean;
  loading: boolean;
  checkAuth: () => Promise<boolean>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface ModuleProviderType {
  isWorksOpen: boolean;
  setIsWorksOpen: (value: boolean) => void;
}

export const ModuleContext = createContext<ModuleProviderType>({
  isWorksOpen: false,
  setIsWorksOpen: () => {},
});

export const useModule = () => {
  const ctx = useContext(ModuleContext);
  if (!ctx) throw new Error("useModule must be used within <moduleProvider>");
  return ctx;
};
