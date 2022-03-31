import Facebook from '../../assets/images/facebook-icon.png';
import Instagram from '../../assets/images/instagram-icon.png';
import Twitter from '../../assets/images/twitter-icon.png';
import Youtube from '../../assets/images/youtube-icon.png';
import Linkedin from '../../assets/images/linkedin-icon.png';
import Plus from '../../assets/images/plus-icon.png';
import React, { useState } from "react";

function Infos () {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);



    const toggleMenu1 = () => {
        setIsActive1(!isActive1);
    };
    
    const toggleMenu2 = () => {
        setIsActive2(!isActive2);
    };
    
    const toggleMenu3 = () => {
        setIsActive3(!isActive3);
    };
    




    return (
        <div className='infos-section-wrapper'>
            <div className='infos-pages-wrapper'>
                <div className='infos-page-desktop'>
                    <div className='title-icon-wrapper-desktop'>
                        <h1 className='infos-title-desktop'>Institucional</h1>
                    </div>
                    <ul className='infos-list-desktop'>
                        <li className='list-item-desktop'><a className='list-link-desktop'  href="/">Quem Somos</a></li>
                        <li className='list-item-desktop'><a className='list-link-desktop'  href="/">Política de Privacidade</a></li>
                        <li className='list-item-desktop'><a className='list-link-desktop'  href="/">Segurança</a></li>
                        <li className='list-item-desktop'><a className='list-link-desktop-02'  href="/">Seja um Revendedor</a></li>
                    </ul>
                </div>

                <div className='infos-page-desktop'>
                    <div className='title-icon-wrapper-desktop'>
                        <h1 className='infos-title-desktop'>Dúvidas</h1>
                    </div>
                    <ul className='infos-list-desktop'>
                        <li className='list-item-desktop'><a className='list-link-desktop'  href="/">Entrega</a></li>
                        <li className='list-item-desktop'><a className='list-link-desktop'  href="/">Pagamento</a></li>
                        <li className='list-item-desktop'><a className='list-link-desktop'  href="/">Trocas e Devoluções</a></li>
                        <li className='list-item-desktop'><a className='list-link-desktop'  href="/">Dúvidas Frequentes</a></li>
                    </ul>
                </div>

                <div className='infos-page-desktop'>
                    <div className='title-icon-wrapper-desktop'>
                        <h1 className='infos-title-desktop'>Fale Conosco</h1>
                    </div>
                    <ul className='infos-list-desktop'>
                        <li className='list-item-title-desktop'>Atendimento ao Consumidor</li>
                        <li className='list-item-desktop'>(11) 4159 9504</li>
                        <li className='list-item-title-desktop'>Atendimento Online</li>
                        <li className='list-item-desktop'>(11) 99433-8825</li>
                    </ul>
                </div>

            </div>



        
            <div className='infos-page-mobile'>
                    <div className='title-icon-wrapper-mobile'>
                        <h1 className='infos-title-mobile'>Institucional</h1>
                        <img src={Plus} className="plus-icon" alt="icone de mais" onClick={() => {toggleMenu1();}} />
                    </div>
                    <ul className={isActive1 ? 'infos-list-mobile-01' : 'info-list-mobile-closed-01'}>
                        <li className='list-item-mobile'><a className='list-link-mobile'  href="/">Quem Somos</a></li>
                        <li className='list-item-mobile'><a className='list-link-mobile'  href="/">Política de Privacidade</a></li>
                        <li className='list-item-mobile'><a className='list-link-mobile'  href="/">Segurança</a></li>
                        <li className='list-item-mobile'><a className='list-link-mobile-02'  href="/">Seja um Revendedor</a></li>
                    </ul>
                </div>

                <div className='infos-page-mobile'>
                    <div className='title-icon-wrapper-mobile'>
                        <h1 className='infos-title-mobile'>Dúvidas</h1>
                        <img src={Plus} className="plus-icon" alt="icone de mais"  onClick={() => {toggleMenu2();}} />
                    </div>
                    <ul className={isActive2 ? 'infos-list-mobile-02' : 'info-list-mobile-closed-02'} >
                        <li className='list-item-mobile'><a className='list-link-mobile'  href="/">Entrega</a></li>
                        <li className='list-item-mobile'><a className='list-link-mobile'  href="/">Pagamento</a></li>
                        <li className='list-item-mobile'><a className='list-link-mobile'  href="/">Trocas e Devoluções</a></li>
                        <li className='list-item-mobile'><a className='list-link-mobile'  href="/">Dúvidas Frequentes</a></li>
                    </ul>
                </div>

                <div className='infos-page-mobile'>
                    <div className='title-icon-wrapper-mobile'>
                        <h1 className='infos-title-mobile'>Fale Conosco</h1>
                        <img src={Plus} className="plus-icon" alt="icone de mais"  onClick={() => {toggleMenu3();}} />
                    </div>
                    <ul className={isActive3 ? 'infos-list-mobile-03' : 'info-list-mobile-closed-03'} >
                        <li className='list-item-mobile-title'>Atendimento ao Consumidor</li>
                        <li className='list-item-mobile'>(11) 4159 9504</li>
                        <li className='list-item-mobile-title'>Atendimento Online</li>
                        <li className='list-item-mobile'>(11) 99433-8825</li>
                    </ul>
                </div>




            <div className='social-medias-wrapper'>

                <ul className='social-medias-list'>
                    <li><a href=""><img src={Facebook} alt="Facebook Icon" /></a></li>
                    <li><a href=""><img src={Instagram} alt="Instagram Icon" /></a></li>
                    <li><a href=""><img src={Twitter} alt="Twitter Icon" /></a></li>
                    <li><a href=""><img src={Youtube} alt="Youtube Icon" /></a></li>
                    <li><a href=""><img src={Linkedin} alt="Linkedin Icon" /></a></li>
                </ul>

                <div>
                    <a href=""><p className='link-page-site'>www.loremipsum.com</p></a>
                </div>


            </div>


        </div>
    );


}

export default Infos;