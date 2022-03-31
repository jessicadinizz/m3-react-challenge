interface TextProps{
    text1: string;
    text2: string;
    text3: string;
}

function About (props:TextProps) {
    return (
        <div className="infos-description-wrapper">
        <h2>
            Sobre
        </h2>
        <p>{props.text1}</p>
        <br/>

        <p>{props.text2}</p>
        <br className="second-break" />
        <p>{props.text3}</p>
    </div>        
    );
}

export default About;