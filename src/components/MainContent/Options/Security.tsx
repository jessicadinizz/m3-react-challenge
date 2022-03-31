interface TextProps{
    text1: string;
    text2: string;
    text3: string;
}

function Security (props:TextProps) {
    return (
        <div>
        <h2>
            Segurança e Privacidade
        </h2>
        <div className="infos-description-wrapper">
            <p>{props.text1}</p>
            <br/>

            <p>{props.text2}</p>
            <br className="second-break" />
            <p>{props.text3}</p>
        </div>
    </div>        
    );
}

export default Security;