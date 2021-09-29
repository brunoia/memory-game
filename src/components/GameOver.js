import React, { Fragment } from "react";

export default function GameOver(props) {
    return props.show ? (
        <div id="gameOver">
            <div>Congratulations, you finished the game!</div>
            <button id="restart" onClick={props.handleRestart}>Play again</button>
        </div>
    ) : (
        <Fragment />
    );
}

//if ternário: se for verdadeiro (?) retorna a div completa (gameover) se for falso (:) retorna a div vazia (fragment)