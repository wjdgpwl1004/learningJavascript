//맵
const u1 =  {name: 'Cynthia'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};

const userRoles = new Map();//맵 생성

//사용자 역할 할당
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

userRoles.get(u2); //'User'

//맵에 존재하지 않는 키에 get 호출하면 undefined를 반환

userRoles.has(u1); //true 맵에 키가 있는지 확인

//맵에 이미 존재하는 키에 set()을 호출하면 값이 교체됨

userRoles.size; //맵의 요소 숫자 반환

// keys() 메서드는 맵의 키를, value() 메서드는 값을, entries() 메서드는 첫번째 요소가 키이고 두번째 요소가 값인 배열 반환, 이들 메서드가 반환하는 것은 모두 이터러블 객체이므로 for...of 루프를 쓸 수 있다.

for(let u of userRoles.keys()){
    console.log(u.name);
}
for(let r of userRoles.values()){
    console.log(r);
}
for(let ur of userRoles.entries()){
    console.log(`${ur[0].name}:${ur[1]}`);
}

//맵도 분해할 수 있다.
for(let[u,r] of userRoles.entries()){
    console.log(`${u.name}:${r}`);
}
//entries()는 맵의 기본 이터레이터, 생략해서 쓸 수 있다.

[...userRoles.value()]; //["User", "User", "Admin"];

//delete() - 맵의 요소 지울 때

//clear() - 맵의 요소를 모두 지울 때

//위크맵 - 다음 차이점을 제외하고는 맵과 같다.
// 1. 키는 반드시 객체여야 한다.
// 2. WeakMap의 키는 가비지 콜렉션에 포함될 수 있다.
// 3. WeakMap은 이터러블이 아니며 clear()메서드도 없다.

//셋 - 셋은 중복을 허용하지 않는 데이터 집합
const roles = new Set();

roles.add("User");

roles.add("Admin"); Set["User", "Admin"]

roles.size;

//delete() - 제거(성공하면 true, 그렇지않으면 false반환)

//위크셋 - 위크셋은 객체만 포함될 수 있으며, 가비지 콜렉션의 대상이 된다. 이터러블이 아니다. 주어진 객체가 셋안에 존재하는지 아닌지 알아보는 용도





