'use strict';

//m이상 n이하의 무작위 정수를 반환합니다.

function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

//크라운 앤 앵커게임의 여섯 가지 도형 중 하나를 무작위 반환합니다.
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

var funds = 50; //시작 조건
var round = 0;
//while문
while (funds > 1 && funds < 100) {
    //블록문 : 문(statement) 여러 개를 중괄호로 묶은 것, 자바스크립트는 이들을 하나의 단위로 취급한다.
    round++;
    console.log("round " + round);
    console.log("starting funds : " + funds + "p");

    // funds = funds +2; //2보 전진
    // funds = funds - 1; //1보 후퇴

    //돈을 겁니다.
    var bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };

    var totalBet = rand(1, fund);
    //조건문
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        //그 판에 걸 돈 분배
        //do ... while문 : 시작하면서 조건을 검사하지 않고, 마지막에 검사. 루프 바디를 최소한 한번은 실행하려 할 때 사용.
        var remaining = totalBet;
        do {
            var bet = rand(1, remaining);
            var face = randFace();
            bets[face] = bets[face] + bet;
            remaining - remaining - bet;
        } while (remaining > 0);
    }
    funds = funds - totalBet;
    console.log();

    //주사위를 굴립니다.
    var hand = [];
    for (var roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }

    // 그림을 맞췄으면 돈을 가져옵니다.(딴 돈을 가져옵니다.)
    var winnings = 0;
    for (var die = 0; die < hand.length; die++) {
        //for문 : 어떤 일을 정해진 숫자만큼 반복하려 할 때 많이 사용.
        var _face = hand[die];
        if (bets[_face] > 0) winnings = winnings + bets[_face];
    }
    funds = funds + winnings;
}