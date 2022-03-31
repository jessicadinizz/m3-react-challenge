
import About from './Options/About'
import Payment from './Options/Payment';
import Delivery from './Options/Delivery';
import Change from './Options/Change';
import Security from './Options/Security';
import Contact from './Options/Contact';


import React, { useState } from "react";

function Principal () {
    const [ActivedSobre, setActivedSobre] = useState(true);
    const [ActivedPagamento, setActivedPagamento] = useState(false);
    const [ActivedEntrega, setActivedEntrega] = useState(false);
    const [ActivedTroca, setActivedTroca] = useState(false);
    const [ActivedSeguranca, setActivedSeguranca] = useState(false);
    const [ActivedContato, setActivedContato] = useState(false);

    function Sobre (){
        setActivedSobre(true);
        setActivedPagamento(false);
        setActivedEntrega(false);
        setActivedTroca(false);
        setActivedSeguranca(false);
        setActivedContato(false);
    }

    function Pagamento() {
        setActivedSobre(false);
        setActivedPagamento(true);
        setActivedEntrega(false);
        setActivedTroca(false);
        setActivedSeguranca(false);
        setActivedContato(false);
    }

    function Entrega() {
        setActivedSobre(false);
        setActivedPagamento(false);
        setActivedEntrega(true);
        setActivedTroca(false);
        setActivedSeguranca(false);
        setActivedContato(false);
    }
    
    function Troca() {
        setActivedSobre(false);
        setActivedPagamento(false);
        setActivedEntrega(false);
        setActivedTroca(true);
        setActivedSeguranca(false);
        setActivedContato(false);
    }

    function Seguranca() {
        setActivedSobre(false);
        setActivedPagamento(false);
        setActivedEntrega(false);
        setActivedTroca(false);
        setActivedSeguranca(true);
        setActivedContato(false);
    }

    function Contato (){
        setActivedSobre(false);
        setActivedPagamento(false);
        setActivedEntrega(false);
        setActivedTroca(false);
        setActivedSeguranca(false);
        setActivedContato(true);
    }




    return (
        <div className="principal-content-wrapper">
             
            <div className="principal-options-wrapper">
                <div onClick={() => {Sobre();}} className={ActivedSobre ? "principal-option" : "principal-option-none"}>
                    <p className="principal-option-text">Sobre</p>
                </div>
                <div onClick={() => {Pagamento();}} className={ActivedPagamento ? "principal-option" : "principal-option-none"}>
                    <p  className="principal-option-text">Formas de Pagamento</p>
                </div>
                <div onClick={() => {Entrega();}} className={ActivedEntrega ? "principal-option" : "principal-option-none"}>
                    <p  className="principal-option-text">Entrega</p>
                </div>
                <div  onClick={() => {Troca();}} className={ActivedTroca ? "principal-option" : "principal-option-none"}>
                    <p className="principal-option-text">Troca e Devolução</p>
                </div>
                <div onClick={() => {Seguranca();}} className={ActivedSeguranca ? "principal-option" : "principal-option-none"}>
                    <p  className="principal-option-text">Segurança e Privacidade</p>
                </div>
                <div onClick={() => {Contato();}} className={ActivedContato ? "principal-option" : "principal-option-none"}>
                    <p  className="principal-option-text">Contato</p>
                </div>
            </div>


            <div className={ActivedSobre ? "sobre-text-show" : "sobre-text-none" }>
                <div className='infos-content-wrapper'>
                    <About text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    text2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                    text3="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
                </div>
            </div>

            <div className={ActivedPagamento ? "pagamento-text-show" : "pagamento-text-none" }>
                <div className='infos-content-wrapper'>
                    <Payment text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    text2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                    text3="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
                </div>
            </div>
            <div className={ActivedEntrega ? "entrega-text-show" : "entrega-text-none" }>
                <div className='infos-content-wrapper'>
                    <Delivery text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    text2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                    text3="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
                </div>
            </div>
            <div className={ActivedTroca ? "troca-text-show" : "troca-text-none" }>
                <div className='infos-content-wrapper'>
                    <Change text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    text2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                    text3="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
                </div>
            </div>
            <div className={ActivedSeguranca ? "seguranca-text-show" : "seguranca-text-none" }>
                <div className='infos-content-wrapper'>
                    <Security text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    text2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                    text3="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" />
                </div>
            </div>
            <div className={ActivedContato ? "contato-text-show" : "contato-text-none"}>
                <div className='infos-content-wrapper-contato'>
                    <Contact />
                </div>

            </div>
        
            
        </div>

    );
}

export default Principal;