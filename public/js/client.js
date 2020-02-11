/************** USER ACTIONS ******************************/

function joinGame (){
    /* user clicks seat
    inputs name
    rerender table  with seat nearest bottom of the screen. 
    */
}

function readyToStart() {
    /* send message to server that you're ready to play */

}
function declareGrandTichu(){
    /* if userclickstichu
        return true to server 
    else 
        return false to server */ 
}

function declareTichu () {
    /* if you havent played a card yet you can declare Tichu 
    during your turn 
    this sends the info to the server that you've declared tichu */

}

function playTrick (array) {
    
    /* user clicks cards,  adds them to array. 
    on submit, check a) what type of trick it is, is it valid, what's the high card. 
    send array, type, and highcard to server. */

}

/******** GAME STATE INFO  *****************/
const gameState = {
    scores: [1, 2], //need the scores to update the client page about what scores are. Need Score for Each Team. Good guys green, badguys blue?
    currentPlayer: null, // whose turn is it?
    highCard: null, 
    playedHandType: null, 
    lastHand: []
}


function updateScore () {
    /** when score update is received, run this to update client (react maybe?) */

}

function currentTrick() {
    //gets current trick info from the server

    let highCard = server.highCard
    let type = server.type

}

console.log("gamestate: ", gameState["scores"]) 