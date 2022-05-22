/* jshint esversion:11 */

import { Link } from "react-router-dom";

export default function MovieCard({ posterURL, title, id }){
    
    return (
        <Link to={`/filme/${id}`}>
            <div className="movie-card d-flex">
                <img src={posterURL} alt={title} />
            </div>
        </Link>
    );

}