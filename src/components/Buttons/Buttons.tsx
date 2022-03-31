import React from 'react';

import ArrowButton from '../../assets/images/up-to-top-arrow.png';
import WhatsappButton from '../../assets/images/whatsapp-button-icon.png';


const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

function Buttons () {
    
    return (
    <div className="buttons-wrapper">

        <div className="whatsapp-button-wrapper">
            <a>
            <img className='whatsapp-button' src={WhatsappButton} alt="ícone do Whatsapp" />
            </a>
        </div>

            <img className='arrow-button' src={ArrowButton} alt="botão de voltar ao topo" onClick={scrollTop} />

    </div>
    );
}
export default Buttons;