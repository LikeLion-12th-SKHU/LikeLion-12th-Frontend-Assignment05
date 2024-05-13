import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // css 파일 연결

function App() {
  // 상태 변수 선언
  const [restaurants, setRestaurants] = useState([]); // 맛집 리스트
  const [newRestaurant, setNewRestaurant] = useState(''); // 새로운 맛집 입력
  
  // 입력값 변경 핸들러
  const handleInputChange = (event) => {
    setNewRestaurant(event.target.value);
  };

  // 맛집 추가 함수
  const addRestaurant = () => {
    if (newRestaurant.trim() !== '') {
      setRestaurants([...restaurants, newRestaurant]);  // 새로운 맛집을 맛집 리스트에 추가
      setNewRestaurant(''); // 입력 필드 초기화
    }
  };

  // 맛집 삭제 함수
  const deleteRestaurant = (index) => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants.splice(index, 1);  // 선택된 인덱스의 맛집 삭제
    setRestaurants(updatedRestaurants); // 변경된 맛집 리스트를 반영
  };

  return (
    <div className="app">
      {/* 맛집 입력 필드 */}
      <h1>내 맛집 리스트</h1>
      <input
        type="text"
        placeholder="맛집 이름 입력"
        value={newRestaurant}
        onChange={handleInputChange}
      />
      {/* 맛집 추가 버튼 */}
      <button onClick={addRestaurant}>+</button>
      {/* 맛집 리스트 */}
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>
            {restaurant}
            {/* 맛집 삭제 버튼 */}
            <button onClick={() => deleteRestaurant(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 렌더링
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);