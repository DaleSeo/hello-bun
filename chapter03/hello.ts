// 변수 선언
let myName: string = "Bun";

// 함수 선언
function hi(name: string): void {
  console.log(`Hi, ${name}!`);
}

// 함수 호출
hi(myName);

// 클래스 선언
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello() {
    console.log(`Hello, ${this.name}!`);
  }
}

// 객체 생성
const person = new Person(myName);

// 메서드 호출
person.hello();
