import React from "react";

import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import './style.css';

function Home () {
    return (
     <main>
        <Topo />

    <div  className="limitar-secao">

    <div className="secao-banner">
         <div className="texto-banner">
           <h1>Sorvete Artesanal</h1>
         </div>
    </div>    
   
    <section className="secao-nossos-sabores">
        <img src="./assets/banner-sabores.jpg"/>
        <div className="texto-secao-nossos-sabores">
            <h2>Nossos Sabores</h2>
            <h3>Novos e deliciosos!</h3>
            <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na Gelateria todos os nossos produtos são naturais, à base de fruta e sem nenhum conservante! Também temos opções sem lactose e sem açucar. Venha conferir e perceber que tem como sorvete ser delicioso e saudável ao mesmo tempo! Beijos de luz!</p>
        </div>
    </section>

    <section className="secao-nossos-eventos">
        <div className="texto-secao-nossos-eventos">
            <h2>Nossos Eventos</h2>
            <h3>Delicias com sorvetes</h3>
            <p>Mais que uma sorveteria, uma extensão da sua casa. Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
        </div>
        <img src="./assets/eventos-image.jpg"/>
    </section>

    <section className="secao-sobre-nos">
        <img src="./assets/sobre-image.jpg"/>
        <div className="texto-secao-sobre-nos">
            <h2>Sobre Nós</h2>
            <h3>Alegria em cada casquinha!</h3>
            <p>Venha tomar o mehor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite o melhor atendomento e o melhor sorvete da cidade.</p>
        </div>
    </section>

    </div>

    <Rodape/>
     </main>

    );
}

export default Home;