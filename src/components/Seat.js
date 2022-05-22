/* jshint esversion:11 */

export default function Seat({ id, name, isAvailable, selectedSeats, setSelectedSeats }){

    const toggleSelection = ()=>{

        if(!isAvailable){

            alert('Esse assento não está disponível.');

        } else {

            const selectedSeatIndex = selectedSeats.indexOf(id);

            if(selectedSeatIndex > -1){
                selectedSeats.splice(selectedSeatIndex, 1);
            } else {
                selectedSeats.push(id);
            }

            setSelectedSeats([...selectedSeats]);

        }

    };

    return (
        <div className={`seat ${isAvailable ? '' : 'unavailable'} ${selectedSeats.indexOf(id) > -1 ? 'selected' : ''} d-flex`} onClick={toggleSelection}>{name}</div>
    );

}