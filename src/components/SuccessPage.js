/* jshint esversion:11 */

import { Link } from "react-router-dom";

export default function SuccessPage({ orderData }){

    return (
        <div className="finish-order d-flex">
            <div>
                <h3>Filme e sessão</h3>
                <p>{orderData.movieData.title}</p>
                <p>{orderData.movieData.date} - {orderData.movieData.hours}</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                { orderData.seatsData.map(seat => <p>Assento {seat.name}</p>) }
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: {orderData.buyerData.name}</p>
                <p>CPF: {orderData.buyerData.cpf}</p>
            </div>
            <Link to="/">
                <button className="btn-primary">Voltar pra home</button>
            </Link>
        </div>
    );

}