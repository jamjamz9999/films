// This file exports TypeScript types or interfaces that define the shape of data used in the application, enhancing type safety.

export interface Film {
    id: number;
    title: string;
    description: string;
    releaseDate: string;
    genre: string[];
    director: string;
    cast: string[];
    rating: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    favoriteFilms: number[];
}

export interface Review {
    id: number;
    filmId: number;
    userId: number;
    rating: number;
    comment: string;
    createdAt: string;
}