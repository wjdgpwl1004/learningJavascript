//이터레이터
const book = [
    "one",
    "two",
    "three"
];

const it = book.values(); //이터레이터 만들기

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());// 마지막 부분을 읽으면 done 이 true로 반환됨. value는 없으면 undefined 된다.

const it2 = book.values(); //독립적으로 사용 가능
it2.next();

//제너레이터 - 이터레이터를 사용해 자신의 실행을 제어하는 함수

// 제너레이터는 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어한다, 실행중인 함수와 통신한다.

// 제너레이터는 언제든 호출자에게 제어권을 넘길 수 있다. 호출한 즉시 실행되지 않고, 이터레이터를 반환하고 next메서드를 호출함에 따라 실행된다.

function* rainbow(){// 제너레이터 함수는 function 뒤에 *를 붙인다.
     yield 'red';
     yield 'orange';
}

const it = rainbow();

it.next();

for(let color of rainbow()){
    console.log(color);
}





