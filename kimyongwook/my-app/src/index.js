import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Counter() {
  const [restaurants, setRestaurants] = useState([]); // 변수명 변경
  const [restaurantName, setRestaurantName] = useState(''); 

  const handleInputChange = (e) => {
    setRestaurantName(e.target.value); // 입력값 name 변수에 설정
  };

  const addRestaurant = () => {
    if (restaurantName.trim() !== '') { // *** 은혜님이 알려주신 trim() 으로 공백 등록 막기 ***
      setRestaurants([restaurantName, ...restaurants]); // 이전 배열 맨 앞에 새 name을 추가
      setRestaurantName('');
    }
  };

  const deleteRestaurant = (idx) => {
    setRestaurants(restaurants.filter((_, index) => index !== idx)); // idx는 false가 되어 새 배열에서 제외
  };

  return (
    <div className="counter-container">
      <p className="counter-text">내 맛집 리스트</p>
      <input type="text" className="input" placeholder="맛집 이름 입력" value={restaurantName} onChange={handleInputChange} />
      <button className="counter-button" onClick={addRestaurant}>+</button>
      <ul className="input-list">
      {restaurants.map((restaurant, idx) => ( // input 배열 매핑
          <li key={idx}> 
            <p>{restaurant}<button className="delete-button" onClick={() => deleteRestaurant(idx)}>삭제</button></p>
          </li> // div -> li
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));