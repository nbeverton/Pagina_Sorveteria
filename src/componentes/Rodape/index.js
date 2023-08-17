import React from "react";

import './style.css'

function Rodape () {
    return(
        <footer>
            <div className=' limitar-secao container-logo-informacoes'>
                <img src="./assets/logo.png"/>
                <div>
                    <h4>Endereço</h4>
                    <p>Av. Bernadino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h4>Contato</h4>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h4>Horários</h4>
                    <p>Aberto todos os dias</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <section className='limitar-secao direito-autoral'>
                <p>Gelareria. Orgulhosamente desenvolvido por nbeverton.</p>
            </section>
        </footer>
    );
}

export default Rodape;