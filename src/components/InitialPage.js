/* jshint esversion:11 */

import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function InitialPage(){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{

        axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies').then(response=>{

            setMovies([...response.data]);

        }).catch(err=>{
            console.log(err);
            alert('Ocorreu um erro ao carregar a lista de filmes');
        });

    }, []);
    
    return (
        <div className="movies-list d-flex">
            { movies.map(movie => <MovieCard key={movie.id} id={movie.id} title={movie.title} posterURL={movie.posterURL} />) }
        </div>
    );

}