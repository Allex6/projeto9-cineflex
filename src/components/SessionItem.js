/* jshint esversion:11 */

import SessionAvailableTime from "./SessionAvailableTime";

export default function SessionItem({ weekday, date, showtimes }){

    return (
        <div className="session-item">
            <h6>{weekday} {date}</h6>
            <div className="available-options">
                { showtimes.map(showtime => <SessionAvailableTime hours={showtime.name} key={showtime.id} id={showtime.id} />) }
            </div>
        </div>
    );

}