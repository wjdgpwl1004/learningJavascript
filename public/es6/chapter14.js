//비동기적 테크닉을 사용해야 하는 경우
// 1. Ajax호출을 비롯한 네트웤크 요청
// 2. 파일을 읽고 쓰는 등의 파일시스템 작업
// 3. 의도적으로 시간 지연을 사용하는 기능(알람 등)

//콜백 : 나중에 호출할 함수

//스코프와 비동기적 실행 : 스코프와 클로저가 비동기적 실행에 영향을 미치는 부분을 인지해야 한다. 함수를 호출하면 항상 클로저가 만들어지고, 매개변수를 포함해 함수안에서 만든 변수는 모두 무언가 자신에 접근할 수 있는 한 계속 존재.
//콜백은 자신을 선언한 스코프(클로저)에 있는 것에 접근할 수 있다.

//콜백 헬 : 콜백을 사용해 비동기방식을 사용할 수있지만, 잘못하면 콜백헬에 빠질 수 있다. 이러한 단점을 해결하기 위해 나온것이 프라미스.

//프라미스(Promise)
//프라미스는 콜백을 예측 가능한 패턴으로 사용할 수 있게 하며, 프라미스 없이 콜백만 사용했을 때 나타날 수 있는 찾기힘든 버그를 상당 수 해결한다.

//프라미스 기본 개념 - 프라미스 기반 비동기적 함수를 호출하면 그 함수는 Promise 인스턴스를 반환한다. 프라미스는 성공하거나 실패하거나 단 두가지 뿐.
//프라미스는 객체이므로 어디든 전달할 수있다는 점도 장점!

//then 핸들러는 성공콜백과 에러콜백을 받는다.

//프라미스 체인 - 프라미스가 완료되면 다른 프라미스를 반환하는 함수를 즉시 호출할 수 있다.


function addTimeout (fn, timeout = 1000) {
    return new Promise (function (resolve, reject) {
        const tid = setTimeout(reject, timeout);

        fn(...args)
            .then(function (...args) {
                clearTimeout(tid);
                resolve(...args);
            })
            .catch(function (...args) {
                clearTimeout(tid);
                reject(...args);
            });
    });
}

function counter () {
    return new Promise (function (resolve, reject) {
        setTimeout(resolve, 500);
    });
}

const promise = addTimeout(counter, 1000);
//
// promise()
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     });
//
//
//
// $('.test').on('click', common);

//
// const asyncTest = async () => {
//     var result = await counter();
//     result = await counter();
// };