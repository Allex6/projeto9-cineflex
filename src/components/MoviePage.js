/* jshint esversion:11 */

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import SessionItem from "./SessionItem";

export default function MoviePage(){
    
    const params = useParams();
    const [sessions, setSessions] = useState([]);
    const [movie, setMovie] = useState({});

    useEffect(()=>{

        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idFilme}/showtimes`).then(response=>{

            const responseData = response.data;

            setSessions(responseData.days);
            setMovie({
                title: responseData.title,
                posterURL: responseData.posterURL
            });

        }).catch(err=>{
            console.log('err', err);
            alert('Ocorreu um erro ao carregar a lista de sessões disponíveis do filme.');
        });

    }, []);

    return (
        <>
            <div className="session-selection">

                { sessions.map(session => <SessionItem weekday={session.weekday} date={session.date} showtimes={session.showtimes} />) }

            </div>
            <Footer title={movie.title} posterURL={movie.posterURL} weekday='' hours='' />
        </>
    );

}