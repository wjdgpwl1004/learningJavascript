//Error 객체 - 자바스크립트 내장 객체, 메시지 지정 가능
const err = new Error('invalid email');

function validateEmail(email){
    return email.match(/@/) ?
        email :
        new Error('invalid email');
}

//try/catch
const email = null;

try{
    const validatedEmail = validateEmail(email);
    if(validatedEmail instanceof Error){
        console.error('Error');
    }else{
        console.log('Valid email');
    }
}catch (err) {
    console.error('Error');
}

//에러일으키기 - 에러를 일으켜서 예외처리작업을 할 수 있다.
function billPay(amount, payee, account){
    if(amount ? account.balance){
        throw new Error('insufficient funds');
    }
    account.transfer(payee, amount);
}

//Error 인스턴스에는 스택을 문자열로 표현한 stack프로퍼티가 있다.

//try...catch...finally
//finally블록은 에러가 일어나든, 일어나지않든 반드시 호출된다.


