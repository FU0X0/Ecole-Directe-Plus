
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Error404.css";

export default function Error404() {
    function getRandomInt(min, max) { // ça sert à quoi ?? c'est pour le futur JEU VIDEO GAME ? c au cas ou on veut mettre des message randomisés ou alors si on veut mettre une image randomisée ; flemme de faire du contenu ça veut dire il faut être créatif wtf ???
        return Math.floor(min + Math.random() * (max-min));
    }
    // for (let i = 0 ; i < 10 ; i++) {
    //     console.log(getRandomInt(3, 8));
    // }
    
    return (
        <div id="error-404">
            <img src="./images/no-logo.png" className="logo" alt="Logo Ecole Directe Plus"/>
            <div id="error-404-container">
                <img src="./images/confused-canardman.png" alt="CANARDMAN confus"></img>
                <h1>
                    Erreur 404 :
                </h1>
                <h2>
                    On dirait que Canardman a dérobé la page que vous cherchez...
                </h2>
                <Link to="login" className="button">Retourner au menu de connexion</Link>
                <iframe src="https://scratch.mit.edu/projects/524241797/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            {/* Canardman le VOYOU */}
            {/* Oh LALA NON */}
            {/* flappy CANARDMAN */}
            {/* Ou on créer un jeu tah original ou il faut poursuivre Canardman */}
            {/* Tah Subway surfer ou quoi */}
            {/* On fait un flappy bird où canardman est devant nous et on doit le rattraper */}
            {/* Dcp il faut faire un IA tah zinzine pour Canardman */}
            {/* il faut que ce soit tah infinity donc l'IA doit être vla chaude */}
        </div>
    )
}