/* jshint esversion:11 */

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "./Footer";
import Seat from "./Seat";

export default function SeatsPage({ orderData }){

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seats, setSeats] = useState([]);
    const [movie, setMovie] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{

        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`).then(response=>{

            const responseData = response.data;

            orderData.movieData = {
                weekday: responseData.day.weekday,
                date: responseData.day.date,
                title: responseData.movie.title,
                hours: responseData.name
            };

            setSeats(responseData.seats);

            setMovie({
                title: responseData.movie.title,
                posterURL: responseData.movie.posterURL,
                weekday: responseData.day.weekday,
                hours: responseData.name
            });

        }).catch(err=>{
            console.log(err);
            alert('Ocorreu um erro ao carregar a lista de assentos disponíveis.');
        });

    }, []);

    function findSeat(seatID){
        return seats.find(seat => seat.id === seatID);
    }

    function bookSeat(e){

        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {
            ids: selectedSeats,
            name: formData.get('name'),
            cpf: formData.get('cpf')
        };

        orderData.seatsData = body.ids.map(seat => findSeat(seat));
        orderData.buyerData = {
            name: body.name,
            cpf: body.cpf
        };

        axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, body).then(response=>{

            navigate('/sucesso');

        }).catch(err=>{
            console.log(err);
            alert('Ocorreu um erro ao reservar os assentos.');
        });

    }
    
    return (
        <>
           <div className="seats-screen d-flex">

                <div className="seats-wrapper">
                    <div className="seats-list d-flex">
                        { seats.map(seat => <Seat id={seat.id} name={seat.name} isAvailable={seat.isAvailable} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} /> ) }
                    </div>
                    <div className="seats-legends d-flex">
                        <div className="d-flex">
                            <div className="seat selected"></div>
                            <p>Selecionado</p>
                        </div>
                        <div className="d-flex">
                            <div className="seat"></div>
                            <p>Disponível</p>
                        </div>
                        <div className="d-flex">
                            <div className="seat unavailable"></div>
                            <p>Indisponível</p>
                        </div>
                    </div>
                </div>

                <form className="d-flex" onSubmit={bookSeat}>
                    <div className="form-group d-flex">
                        <label htmlFor="name">Nome do comprador:</label>
                        <input type="text" name="name" placeholder="Digite seu nome" required />
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="cpf">CPF do comprador:</label>
                        <input type="text" name="cpf" placeholder="Digite seu CPF" maxLength="11" required />
                    </div>
                    <button className="btn-primary" type="submit">Reservar assento(s)</button>
                </form>

            </div> 
            <Footer title={movie.title} posterURL={movie.posterURL} weekday={movie.weekday} hours={movie.hours} />
        </>
    );

}