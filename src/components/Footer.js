/* jshint esversion:11 */

export default function Footer({ title, posterURL, weekday, hours }){

    const info = (weekday !== '' && hours !== '') ? <p>{weekday} - {hours}</p> : '';
    
    return (
        <div className="footer d-flex">
      
            <div className="movie-card d-flex">
                <img src={posterURL} alt="Filme selecionado" />
            </div>

            <div className="movie-info d-flex">
                <h4>{title}</h4>
                {info}
            </div>

        </div>
    );

}