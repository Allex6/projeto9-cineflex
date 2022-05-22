/* jshint esversion:11 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import MoviePage from "./components/MoviePage";
import PageTitle from "./components/PageTitle";
import SeatsPage from "./components/SeatsPage";
import SuccessPage from "./components/SuccessPage";

import './css/reset.css';
import './css/style.css';

export default function App(){

    const orderData = {
        movieData: {},
        seatsData: {},
        buyerData: {}
    };

    return (
        <BrowserRouter>
            <Header />
            <PageTitle title="Selecione o filme" additionalClass="" />
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/filme/:idFilme" element={<MoviePage />} />
                <Route path="/sessao/:idSessao" element={<SeatsPage orderData={orderData} />} />
                <Route path="/sucesso" element={<SuccessPage orderData={orderData} />} />
            </Routes>
        </BrowserRouter>
    );

}