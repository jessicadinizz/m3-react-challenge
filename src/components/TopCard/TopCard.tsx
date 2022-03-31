import HomeIcon from "../../assets/images/home-icon.png"
import ArrowIcon from "../../assets/images/right-arrow-icon.png"

function  TopCard() {
    return (
        <div>
            <div className="icons-wrapper">
                <img className="home-icon" src={HomeIcon} alt="Icone da Home do site" />
                <img className="arrow-icon" src={ArrowIcon} alt="Icone de seta apontando para direita" />
                <p className="page-indicator-title">INSTITUCIONAL</p>
            </div>

            <div>
                <h1 className="page-title">INSTITUCIONAL</h1>
            </div>
            

        </div>

    );
    
}

export default TopCard;