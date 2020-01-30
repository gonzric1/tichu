function createDeck(deck) {
    for (let i = 2; i < 15; i++) {
        for (let s = 0; s < 4; s++) {
            let suit
            switch (s) {
                case 0:
                    suit = "♥";
                    break;
                case 1:
                    suit = "♦"
                    break;
                case 2:
                    suit = "♣";
                    break;
                case 3:
                    suit = "♠";
                    break;
            }

            let card = {
                suit: suit,
                value: i
            }
            deck.push(card);
        };

    };

    /* Create Special Cards */
    let phoenix = {
        suit: null,
        value:  null,
        special: "phoenix"
    };

    let mahjong = {
        suit: null,
        value: 1,
        special: "mahjong"
    };
    let dog = {
        suit: null,
        value: null,
        special: "dog"
    }

    let dragon = {
        suit: null,
        value: 15,
        special: "dragon"
    }
    deck.push(phoenix, mahjong, dog, dragon)
};


//since you never use shuffle outside of the deck creation, do we need this outside?
function shuffleDeck(deck) { //Fisher-Yates shuffle

    for (let i = deck.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }

};

function dealDeck(deck, players, quantity = 1 ) {

    for (let i = 0; i < (quantity * players.length); i++) {
        players[i % (players.length)].hand.push(deck.pop());
    }
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

function findMahjong(players){  //returns array number of player that has mahjong
    )
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
    createDeck(gameDeck);
    shuffleDeck(gameDeck);
    dealDeck(gameDeck, players);
    printDeck(players[0].hand);


}

testMain();
