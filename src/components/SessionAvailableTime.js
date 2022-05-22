/* jshint esversion:11 */

import { Link } from "react-router-dom";

export default function SessionAvailableTime({ hours, id }){
    
    return (
        <Link to={`/sessao/${id}`}>
            <button className="btn-primary">{hours}</button> 
        </Link> 
    );

}