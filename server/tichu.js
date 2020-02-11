function createDeck() { 
    
    const suits = ["♥", "♦", "♣", "♠"]
    const deck = []

    function createCard (suit, value, special = undefined) {
        let card = {
            suit: suit,
            value: value, 
            special: special
        }
        deck.push(card)
    }

    suits.forEach( suit => {
        for (let i = 0; i < 13; i++) {
            createCard ( suit, i + 2)
        }
    })

    /* Create Special Cards */
    createCard (null, null, "phoenix")
    createCard (null, 1, "mahjong")
    createCard (null, 0, "dog")
    createCard (null, 15, "dragon")
    return deck; 
};


    /* Fisher-Yates shuffle */ 
function shuffleDeck(deck) { 

    for (let i = deck.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }

};

function dealCards(deck, players, quantity = 1 ) {

    for (let i = 0; i < (quantity * players.length); i++) {
        players[i % (players.length)].hand.push(deck.pop());
    }
}

function findMahjong(players){  //returns array number of player that has mahjong
    for (i = 0; i < players.length; i++) {
        if( players[i].hand.find( x => x.special === "phoenix")){
            return i
        }
    }

    return -1
}

/*********************
 * Debugging Functions
 *********************/

function printDeck(deck) {
    deck.forEach(element => {
        //console.log(element.value + element.suit + element.special);
        console.log(element)
    });
}


/* main game loop */
class Player {
    constructor(playerName, secretKey){
        this.playerName = playerName;
        this.secretKey = secretKey;
        this.hand = [];
    }


}


function testMain(){
    let gameDeck = [];
    let players = [];
    players[0] = new Player("Player1", "1");
    players[1] = new Player("Player2", "ab");
    players[2] = new Player("Player3", "abc");
    players[3] = new Player("Player4", "1234");
    gameDeck = createDeck();
    shuffleDeck(gameDeck);
    dealCards(gameDeck, players, 14);
    //printDeck(players[0].hand);
    firstPlayer = findMahjong(players); 
    console.log("Player with Mahjong:", findMahjong(players))
    printDeck(players[firstPlayer].hand);


}

testMain();
