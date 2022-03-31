function Newsletter (){
    return(
        <div className="newsletter-wrapper">
            <div className="newsletter-content">
                <div className="newsletter-title-wrapper">
                    <h4  className="newsletter-title">assine nossa newsletter</h4>
                </div>
                <div className="newsletter-form-wrapper">
                    <input className="newsletter-input" type="text" placeholder="E-mail"/>
                    <button className="newsletter-button">ENVIAR</button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter