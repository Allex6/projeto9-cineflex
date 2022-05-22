/* jshint esversion:11 */

export default function PageTitle({ title, additionalClass }){
    
    return (
        <div className={`page-title ${additionalClass} d-flex`}>
            <h2>{title}</h2>
        </div>
    );

}