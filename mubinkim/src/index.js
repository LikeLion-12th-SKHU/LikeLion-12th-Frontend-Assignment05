import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// ReactDOM은 React 앱을 브라우저에 렌더링하는 데 사용됩니다.
import './App.css';


function Counter() {
  // useState는 컴포넌트에 state 변수를 추가할 수 있게 해주는 React 훅입니다.
  /* ⭐️⭐️과제6번 조건⭐️⭐️ */
  const[restaurant, setRestaurant] = useState([]);
  // restaurant은 실제로 맛집 리스트인 상태이고 
  // setRestaurant은 맛집 리스트 상태를 업데이트 하기 위한 함수입니다.

  const[inputText, InputText] = useState('');
  // inputText는 입력창의 상태이고
  // InputText는 입력창에 값을 업데이트 하기 위한 함수입니다.

  // 입력창 텍스트 변경
  const InputTextChange = (event) => {
    InputText(event.target.value);
    // event 객체를 매개변수로 받음.
    // target 은 이벤트가 발생한 요소를 가르킴, 즉 <input> 
    // value 속성은 입력 창의 값(텍스트)를 나타낸다
    };

  // 텍스트를 리스트에 추가하는 함수
  const AddText = () => ㅓ{
    if (inputText.trim() !== '') 
    // 전에 사용했던 trim()!! 끝의 공백을 없애줌
    // inputText 값이 공백이 아니라면 리스트에 추가가 됨. 공백은 추가가 불가능.
    {
      setRestaurant([...restaurant, inputText]); 
      // ... 은 전개 연산자이다. 이 연산자는 배열 또는 객체의 요소를 다른 배열이나 객체에 복사하거나 병합.
      // -> "...restaurant" 은 기존의 리스트 배열을 복사한 것이다.
      // 새로운 입려값이 계속 추가될 때 기존에 있던 값들은 다 살아있다.
      InputText(''); // 입력창 초기화
    }
  };
  /* ⭐️⭐️과제5번 조건⭐️⭐️ */
  // 식당 리스트에서 특정 항목을 삭제하는 함수
  const removeText = (index) => {
    const newList = [...restaurant];
    newList.splice(index, 1); 
    // 새로운 newList에 restaurant 값을 복사 "..." 사용
    // splice() 메서드는 요소를 삭제하거나 추가할 때 사용
    // splice(index,1) => splice(삭제할 요소의 위치를 나타내는 index, 삭제할 개수 1)

    setRestaurant(newList);
    // 변경된 값을 setRestaurant에 다시 넣기
  };
  return(
    <div className="counter-container">
      {/* ⭐️⭐️과제1번 조건⭐️⭐️ */}
      <h1 className="counter-text">맛집 리스트</h1>
      <div >
        {/* ⭐️⭐️과제2번 조건⭐️⭐️ */}
        <input type="text" className="counter-textarea" value={inputText} onChange={InputTextChange} placeholder="맛집 이름 입력"/>
        {/* ⭐️⭐️과제3번 조건⭐️⭐️ */}
        <button className="button_1"onClick={AddText}>+</button> 
        {/* 텍스트 추가 버튼 */}
      </div>
        {restaurant.map((item, index) => (
          // restaurant 의 jsx를 생성하는 부분이다
          // map 함수는 배열의 값들을 순회하면서 새로운 배열을 만든다.
          //처음에는 for 문을 사용해서 풀어보려고 했으나 map 함수가 코드가 간결하여 사용함
          <ul key={index}>
            {/* ⭐️⭐️과제4번 조건⭐️⭐️-li를 사용하려고 했는데 동그라미 점 뜨는게 보기 싫어서 ul 썼어요 ㅠ*/}
            {/* key 속성은 React 에서 배열의 각 항목을 식별하는 데 사용됩니다 */}
            {item} {/* 배열의 각 요소를 출력하는 부분이다. 요소 값임. */}
            <button className="button_2" onClick={() => removeText(index)}>삭제</button> {/* 해당 항목 삭제 버튼 */}
          </ul>
        ))}
    </div>
  );
}
ReactDOM.render(<Counter />, document.getElementById('root'));
//ReactDOm.render를 사용하여 Counter 컴포넌트를 브라우저에 렌더링함.
//Counter 컴포넌트가 렌더링된 결과는 HTML 문서 내에서 id가 root 인 요소에 삽입
//여기서부터 React 앱이 시작됩니다.
//보통 대부분의 React 프로젝트에서는 public/index.html 파일에 <div id = 'root'></div>
//와 같은 형태로 정의된 요소가 있다.







/*
  JSX - 자바스크립트의 확장된 버전임.

  React는 자바스크립트 기반의 문법을 사용한다.
  가볍고 유연한 라이브러리, 필요한 부분만 적용할 수 있다.
  리액트의 특징 
    - Virtual DOM을 사용합니다
      React-DOM 라이브러리가 알아서 수행한다.
    - 객체의 종류
      1. Props: 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달해주는 객체이다. 상위 컴포넌트 수준에서 제어하면서 하위 컴포넌트로 전달하고 코드를 간결하게 작성 가능하다는 장점이 있다.
      2. State: 컴포넌트의 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체입니다.
      3. Component: 리액트로 만들어진 앱을 이루는 최소한의 단위이다.
          - 컴포넌트 방식은 코드를 재사용하기 때문에 한 부분에서 수정할 수 있습니다.
          - 컴포넌트의 규칙: 함수의 제목이 대문자로 시작해야 하며, 함수에서 렌더링이 가능한 값이 반환되어야 합니다.
          - 클래스형 컴포넌트와 함수형 컴포넌트가 존재한다.

      5주차 과제에서는 "컴포넌트 함수형"을 사용하였음.

  Hook
    - React state와 lifecycle features를 연동할 수 있게 해준다.
    - Hook의 규칙 
      1. 최상위에서만 hook을 호출해야 한다. ( 반복문, 조건문, 중첩된 함수 안에서 Hook을 사용하면 안 됩니다. )
      true ex) import { useState } from 'react';
          function App(){
            if(someCondition)
              const [val, setval] = useState(0);
          }

      2. React 함수형 컴포년트 내에서만 Hook을 호출해야 합니다.
      false ex) import { useState } from 'react';

          function App(){
            const [val, setVal] = useState(0);
          }

  useStates는 컴포넌트에서 state 변수를 추가할 수 있게 해주는 React 훅입니다.
  여기서 state? - const, let 등으로 선언한 변수와 다르게 컴포넌트의 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체이다.

  리액트에서 state와 자바스크립트 코드로 구성된 컴포넌트는 html처럼 보이는 코드를 작성할 수 있도록 구성된 jsx 문법을 기반으로 합니다.
  가상 DOM은 실제 DOM과 유사하게 나무 구조로 된 자바스크립트 객체입니다.
*/