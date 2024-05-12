import React, { useState } from 'react';
import './App.css';

function App() {
  // 맛집 리스트를 저장 업데이트 할떄
  const [restaurants, setRestaurants] = useState([]);

  // 입력 필드에서 맛집 이름을 저장할 상태 input은 사용자가 입력하는 텍스트를 저장 setInput은 업데이트
  const [input, setInput] = useState('');

  // 입력창에서 발생하는 변화를 처리하는 handleChange 함수사용
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // addFood 함수는 입력창의 값을 restaurants 배열에 추가해준다
  const addFood = () => {
    if (input.trim()) { // 빈칸이 아닐 때만 추가
      setRestaurants([...restaurants, input]);
      setInput(''); // 입력 필드 초기화
    }
  };

  // 맛집을 삭제하는 함수
  const deleteFood = (index) => {
    setRestaurants(restaurants.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>맛집 리스트</h1>
      <input
        type="text"
        placeholder="맛집 이름 입력"
        value={input}
        onChange={handleChange}
      />
      <button onClick={addFood}>+</button>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>
            {restaurant}
            <button onClick={() => deleteFood(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  
    
  );
}

export default App;
