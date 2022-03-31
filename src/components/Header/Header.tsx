import headerLogo from "../../assets/images/m3-header-logo.png" 
import cartIcon from "../../assets/images/cart-icon.png" 
import searchIcon from "../../assets/images/search-icon.png" 
import './Header.css'
import React, { useState } from "react";

function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };



    return (
    <div>
        <header className="page-header">
            <div className="page-header-wrapper">
                <button className="mobile-options-button" onClick={() => {toggleMenu();}}>
                    <span className="hamburger"></span>
                </button>

                <div className="header-logo-wrapper">
                    <img className="header-logo" src={headerLogo} alt="Logo M3 Academy" />
                </div>

                <div className="search-bar-wrapper-1">
                    <input type="text" className="search-bar-1" placeholder="Buscar..."  />
                    <img className="search-bar-icon-1" src={searchIcon} alt="Icone de busca da barra de pesquisa" />
                </div>

                <div className="header-options">
                    <h4 className="login-option">ENTRAR</h4>
                    <img className="cart-option" src={cartIcon} alt="Icone do carrinho de compras" />
                </div>
                
            </div>

                <div className="search-bar-wrapper-2">
                    <input type="text" className="search-bar-2" placeholder="Buscar..."  />
                    <img className="search-bar-icon-2" src={searchIcon} alt="Icone de busca da barra de pesquisa" />
                </div>

        
        </header> 
        
        <nav className="header-nav-bar-desktop">
            
            <div>
                    <ul className="header-options-wrapper" >
                        <div className="header-links-wrapper">
                            <li className="menu-first-option">CURSOS</li>
                            <li className="menu-second-option">SAIBA MAIS</li>
                        </div>
                    </ul>
            </div>

        </nav>


        <nav className="header-nav-bar-mobile">
            
            <div className={isActive ? "header-all-options-open" : "header-all-options-closed" }>
                    <ul className="header-options-wrapper-mobile" >
                        <div className="header-links-wrapper-mobile">
                            <li className="menu-first-option-mobile">CURSOS</li>
                            <li className="menu-second-option-mobile">SAIBA MAIS</li>
                        </div>
                    </ul>
            </div>
        </nav>
    </div>

        
);
    
}
  
  export default Header;
  