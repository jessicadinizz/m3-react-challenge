import MasterCard from '../../assets/images/mastercard-icon.png';
import Visa from '../../assets/images/visa-icon.png';
import AmericanExpress from '../../assets/images/american-express-icon.png';
import Elo from '../../assets/images/elo-icon.png';
import HyperCard from '../../assets/images/hypercard-icon.png';
import PayPal from '../../assets/images/paypal-icon.png';
import Boleto from '../../assets/images/boleto-icon.png';
import VtexCertified from '../../assets/images/vtex-certified-icon.png';
import VtexLogo from '../../assets/images/vtex-logo-icon.png';
import M3Logo from '../../assets/images/m3-logo-icon.png';


function Footer () {
    return (
        <footer className='footer-page-wrapper'>
        <div className='footer-content-wrapper'>
            <div className='footer-description-wrapper'>
                <p className='footer-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    Elit, Sed do Eiusmod Tempor</p>
            </div>

            <div className='footer-payments-wrapper'>
                <img src={MasterCard} alt="Mastercard" />
                <img src={Visa} alt="Visa" />
                <img src={AmericanExpress} alt="American Express" />
                <img src={Elo} alt="Elo " />
                <img src={HyperCard} alt="HyperCard " />
                <img src={PayPal} alt="PayPal " />
                <img src={Boleto} alt="Boleto " />
                <div className='division'></div>
                <img src={VtexCertified} alt="VTEX Certified " />
            </div>

            <div className='footer-copyright-wrapper'>
                <p className='footer-copyright-text'>Powered by</p>
                <a href=""><img className='logo-vtex-icon' src={VtexLogo} alt="Logo Vtex" /></a>
                <p className='footer-copyright-text'>Developed by</p>
                <a href=""><img src={M3Logo} alt="Logo M3" /></a>
            </div>

        </div>

        </footer>
    );
}

export default Footer;