import { useEffect, useState } from "react"
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {

    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
        const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsResponse, castResponse] = await Promise.all([movieDetailPromise, castPromise]);

        setstate({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castResponse.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return {
        ...state
    }
}


