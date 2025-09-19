import z from "zod";

export type FormState =
  | {
      error?: {
        name?: string[];
        firstname?: string[];
        lastname?: string[];
        email?: string[];
        password?: string[];
        image?: string[];
        description?: string[];
      };
      message?: string;
      success?: boolean;
      session?: Session;
    }
  | undefined;

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Indtast venligst en gyldig email." }),
  password: z.string().min(1, {
    message: "Adgangskodefeltet må ikke være tomt.",
  }),
});

export const SignupFormSchema = z.object({
  firstname: z
    .string()
    .min(2, {
      message: "Navn skal være mindst 2 tegn langt.",
    })
    .trim(),

  lastname: z
    .string()
    .min(2, {
      message: "Navn skal være mindst 2 tegn langt.",
    })
    .trim(),

  email: z
    .string()
    .email({ message: "Indtast venligst en gyldig email." })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Skal være mindst 8 tegn langt." })
    .regex(/[a-zA-Z]/, {
      message: "Skal indeholde mindst et bogstav.",
    })
    .regex(/[0-9]/, {
      message: "Skal indeholde mindst et tal.",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Skal indeholde mindst et specialtegn.",
    })
    .trim(),
  description: z.string().min(1, { message: "Må ikke være tom" }),
  imageUrl: z.string().min(1, { message: "Må ikke være tom" }),
});

export interface Session {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface CreateUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  image: string;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
}

export interface T_Slides {
  id: number;
  imageUrl: string;
  text: string;
}

export interface T_SådanVirkerDet {
  id: number;
  title: string;
  content: string;
}

export interface T_Trips {
  id: number;
  departureDate: string;
  cityDeparture: string;
  addressDeparture: string;
  cityDestination: string;
  addressDestination: string;
  pricePerSeat: string;
  bagSizeId: number;
  useFerry: boolean;
  isElectric: boolean;
  hasComfort: boolean;
  allowChildren: boolean;
  allowSmoking: boolean;
  allowMusic: boolean;
  allowPets: boolean;
  seatsTotal: number;
  seatsBooked: number;
  user: T_User;
}

export interface T_User {
  id: number;
  firstname: string;
  lastname: string;
  imageUrl: string;
  numReviews: number;
  numStars: number;
  avgStars: number;
}

export interface T_Trips_Details {
  id: number;
  userId: number;
  departureDate: string;
  addressDeparture: string;
  cityDeparture: string;
  addressDestination: string;
  cityDestination: string;
  routeDeviation: number;
  seatsTotal: number;
  pricePerSeat: string;
  bagSizeId: number;
  comment: string;
  allowChildren: boolean;
  allowSmoking: boolean;
  allowMusic: boolean;
  allowPets: boolean;
  hasComfort: boolean;
  useFerry: boolean;
  isElectric: boolean;
  createdAt: string;
  user: T_User;
  bagsize: Bagsize;
  bookings: Booking[];
  seatsBooked: number;
}
export interface Bagsize {
  name: string;
  description: string;
  iconUrl: string;
}

export interface Booking {
  id: number;
  numSeats: number;
  user: User2;
}

export interface User2 {
  id: number;
  firstname: string;
  imageUrl: string;
}

export interface T_Reviewer {
  reviewerId: number;
  numStars: number;
  comment: string;
  reviewer: Reviewer;
  createdAt: string;
  id: number;
}

export interface Reviewer {
  firstname: string;
  lastname: string;
  imageUrl: string;
}

export type ReviewFormState =
  | {
      error?: {
        comment?: string[];
        numStars?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;

export const ReviewFormSchema = z.object({
  comment: z.string().min(1, { message: "Må ikke være tom" }),
  numStars: z.number(),
  reviewedUserId: z.number(),
});

export type BookFormState =
  | {
      error?: {
        tripId?: string[];
        comment?: string[];
        numSeats?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;

export const BookFormSchema = z.object({
  tripId: z.number(),
  comment: z.string().min(1, { message: "Må ikke være tom" }),
  numSeats: z.number().min(1, { message: "Du skal vælge mindst 1 sæde." }),
});

export interface T_Booking {
  tripId: number;
  comment: string;
  id: number;
}
