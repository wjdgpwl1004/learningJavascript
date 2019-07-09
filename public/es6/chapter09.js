//Object.keys - 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환
const o = {a: 1, b: 2, c: 3};
Object.keys(o).forEach(prop=> console.log(`${prop}:${o[prop]}`));

//클래스 - 자바스크립트에서는 클래스도 함수다.
class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }

    shift(gear) {
        if(this.userGears.indexOf(gear)<0){
            throw new Error('Invalid gear');
        }
        this.userGear = gear;
    }

}

const car1 = new Car();
car1.shift('D');

//클래스의 인스턴스에서 사용할 수 있는 메서드는 프로토타입 메서드를 말하는 것이다. 프로토타입에서 중요한 것은 동적 디스패치라는 메커니즘,
// 객채의 프로퍼티나 메서드에 접근하려 할 때, 그런 프로퍼티나 메서드가 존재하지 않으면 자바스크립트는 객체의 프로토타입에서 해당 프로퍼티나 메서드를 찾는다.
// 인스턴스에서 메서드나 프로퍼티를 정의하면 프로토타입에 있는것을 가리는 효과가 있다.


//정적메서드 - 클래스에 관련되지만 인스턴스와는 관련이 없는 범용적인 작업에 사용된다.

//상속 - class Car extends Vehicle{ constructor(){super();} }
//super()는 슈퍼클래스의 생성자를 호출하는 함수, 호출하지 않으면 에러 발생




