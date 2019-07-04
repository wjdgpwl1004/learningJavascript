//함수는 하나의 단위로 실행되는 문의 집합이다.


// function getGreeting(){
//     return "Hello Word";
// }
//
// getGreeting(); //Hello Word 가 반환된다.

// 호출과 참조
/*호출 : 함수 식별자 뒤에 괄호를 쓰는 경우, 함수 바디가 실행되어 값이 반환됨.
  참조 : 괄호를 쓰지 않으면 함수는 실행되지 않고, 참조한다고만 한다.

*/

// const f = getGreeting;
// f(); // 함수를 변수에 할당하여, 다른이름으로 함수를 호출하는 것이 가능하다. 이는 함수를 호출뿐만 아니라, 참조할 수 있다는 특징때문이다.
//
// const o = {};
// o.f = getGreeting;
// o.f(); //함수를 객체 프로퍼티에 할당할 수도 있다.

// const arr = [1,2,3];
// arr[1] = getGreeting;
// arr[1](); //배열요소로 할당도 가능하다.

//함수를 호출하면서 정보를 전달할 때는 매개변수를 이용한다.

//매개변수 해체
//객체를 변수로 해체하는 예제
// function getSentence({subject, verb, object}){
//     return `${subject} ${verb} ${object}`;
// }
//
// const o = {
//     subject: "I",
//     verb: "love",
//     object: "javascript",
// };
//
// getSentence(o);

// 배열 해체
// function getSentence([subject, verb, object]){
//     return `${subject} ${verb} ${object}`;
// }
//
// const arr = ["I", "love", "javascript"];
// getSentence(arr);

//확산 연산자(...)이용 - 함수를 선언할 때 확산 연산자는 반드시 마지막 매개변수여야 한다.
function addPrefix(prefix, ...words){
    const prefixedWords = [];
    for(let i=0; i<words.length; i++){
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}
addPrefix("con", "verse", "vex"); //["converse","convex"]

//매개변수 기본값 - 매개변수에 기본값 지정 가능
function f(a,b="default", c=3){
    return `${a} - ${b} - ${c}`;
}

//객체의 프로퍼티인 함수를 일반적으로 메서드 라고 한다.

//화살표 표기법
/*
* 1. function을 생략해도 된다.
* 2. 함수에 매개변수가 단 하나뿐이라면 () 도 생략 가능
* 3. 함수 바디가 표현식 하나라면 중괄호와 return문도 생략 가능
* */

// const f1 = () => "hello";
//
// const f2 = name => `hello, ${name}`;
//
// const f3 = (a,b) => a+b;






