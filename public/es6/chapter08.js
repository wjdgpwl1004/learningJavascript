//1. 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기
const arr = ["b", "c", "d"];
arr.push("e"); //["b", "c", "d", "e"]
arr.pop(); //["b", "c", "d"]
arr.unshift("a"); //["a", "b", "c", "d"]
arr.shift(); //["b", "c", "d"]

//2. 배열의 끝에 여러 요소 추가하기 - concat 메서드는 배열의 끝에 여러 요소를 추가한 사본 반환
const arr1 = [1,2,3];
arr1.concat(4,5,6);//[1,2,3,4,5,6]

//3. 배열 일부 가져오기
const arr2 = [1,2,3,4,5];
arr2.slice(3); //[4,5]
arr2.slice(2,4); //[3,4]
arr2.slice(-2); //[4,5]

//4. 임의의 위치에 요소 추가하거나 제거하기
// 첫번째 매개변수는 수정을 시작할 인덱스, 두번째 매개변수는 제거할 요소 숫자, 아무요소도 제거하지 않을때는 0, 나머지 매개변수는 배열에 추가될 요소
const arr3 = [1,5,7];
arr3.splice(1,0,2,3,4); //[1,2,3,4,5,7]

//5. 배열안에서 요소 교체하기
// 첫번째 매개변수는 복소한 요소를 붙여넣을 위치, 두번째 매개변수는 복사를 시작할 위치, 세번째 매개변수는 복사를 끝낼 위치, 음수인덱스를 사용하면 배열의 끝에서부터~
const arr4 = [1,2,3,4];
arr.copyWithin(1,2); //[1,3,4,4]

//6. 특정값으로 배열채우기(시작, 끝인덱스, 음수인덱스 사용 가능)
const arr5 = new Array(5).fill(1); //[1,1,1,1,1]

//7. 배열 정렬과 역순 정렬 - reverse(), sort()

//8. 배열 검색
// indexOf - 찾고자 하는 것과 정확히 일치(===)하는 첫 번째 요소의 인덱스 반환
// lastIndexOf - 배열의 끝에서부터 검색
// -시작 인덱스 지정 가능, 일치하는 것을 찾지 못하면 -1반환
// findIndex - 일치하는 것 못찾을때 -1 반환, 보조함수를 써서 검색조건 지정 가능
const arr6 = [{id: 5, name: "Judith"}, {id: 7, name: "Francis"}];
arr.findIndex(o=>o.id===5); //0

//요소의 인덱스가 아닌, 요소 자체를 원할 때 find
arr6.find(o=>o.id===5); //객체{id: 5, name: "Judith"}

//some은 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true반환, 못찾으면 false반환
//every은 배열의 모든 요소가 조건에 맞아야 ture반환, 그렇지 않으면 false 반환

//9. map과 filter
// map - 일정한 형식의 배열을 다른 형식으로 바꿔야 할 때, 사본반환
const items = ["Widget", "Gadget"];
const prices = [9,95, 22.95];
const cart = items.map((x, i) => ({name:x, price:prices[i]}));
//cart : [{name: "Widget", price: 9.95}, {name: "Gadget", price: 22.95}]

//filter - 필요한 요소만 남길 목적으로 사용. 사본반환

//10. reduce- (accumulator(누적값), 현재 배열요소, 현재인덱스, 배열자체)
const arr7 = [5,7,2,4];
const sum = arr7.reduce((result, data, index) => result += data , 0);
console.log(sum);

//11. 문자열 병합 -join


