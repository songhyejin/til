const getCardRank = (card) => {
    var number = card.slice(0,-1);
    if(number == 'J') {
        return 11
    } else if(number == 'Q') {
        return 12
    } else if(number == 'K') {
        return 13
    } else if(number == 'A') {
        return 14
    } else {
        return parseInt(number);
    }
}

const fight = (card1, card2) => {
    var rank1 = getCardRank(card1);
    //console.log("111",card1, rank1)
    var rank2 = getCardRank(card2);
    //console.log("222",card2, rank2)
    if(rank1 > rank2) {
        return 1;
    } else if(rank1 < rank2) {
        return 2;
    } else {
        return 0;
    }
}

const n = 26;
var deck1 = [
    '5C', '3D', '2C', '7D', '8C',
    '7S', '5D', '5H', '6D', '5S',
    '4D', '6H', '6S', '3C', '3S',
    '7C', '4S', '4H', '7H', '4C',
    '2H', '6C', '8D', '3H', '2D',
    '2S'
  ];
// for (let i = 0; i < n; i++) {
//     const cardp1 = readline(); // the n cards of player 1
//     deck1.push(cardp1);
// }
const m = 26;
var deck2 = [
    'AC', '9H',  'KH',  'KC', 'KD',
    'KS', '10S', '10D', '9S', 'QD',
    'JS', '10H', '8S',  'QH', 'JD',
    'AD', 'JC',  'AS',  'QS', 'AH',
    'JH', '10C', '9C',  '8H', 'QC',
    '9D'
  ];
// for (let i = 0; i < m; i++) {
//     const cardp2 = readline(); // the m cards of player 2
//     deck2.push(cardp2);
// }


const war = (deck1, deck2, card1, card2) => {
    result = 0;
    var usedDeck1 = [card1];
    var usedDeck2 = [card2];
    while(deck1.length > 3 && deck2.length > 3) {
        usedDeck1.push(deck1.pop(0));
        usedDeck1.push(deck1.pop(0));
        usedDeck1.push(deck1.pop(0));

        usedDeck2.push(deck2.pop(0));
        usedDeck2.push(deck2.pop(0));
        usedDeck2.push(deck2.pop(0));

        //결투
        card1 = deck1.pop(0);
        card2 = deck2.pop(0);
        usedDeck1.push(card1);
        usedDeck2.push(card2);

        result = fight(card1, card2);
        if(result == 1) {
            deck1 = deck1.concat(usedDeck1);
        }else if(result == 2) {
            deck2 = deck2.concat(usedDeck2);
        }

        return {
            result: result,
            deck1: deck1,
            deck2: deck2
        };
    }
}

var numTurns = 0;
var result = 0;

while(deck1.length > 0 && deck2.length > 0) {
    numTurns += 1;
    var card1 = deck1.pop(0);
    var card2 = deck2.pop(0);

    result = fight(card1, card2);
    console.log("result::",result);

    if(result == 1) {
        deck1.push(card2);
    }else if(result == 2) {
        deck2.push(card1);
    }else {
        var wars = war(deck1,deck2,card1,card2);
        result = wars.result;
        deck1 = wars.deck1;
        deck2 = wars.deck2;
        if(result == 0) {
            break;
        }
    }
}

if(result == 0) {
    console.log("PAT");
} else if(deck1.length > 0) {
    console.log("1승");
} else {
    console.log("2승");
}


