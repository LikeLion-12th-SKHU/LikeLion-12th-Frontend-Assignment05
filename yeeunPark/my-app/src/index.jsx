//index.jsx

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import RestaurantItem from "./components/RestaurantItem";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddRestaurant = () => {
    if (inputValue.trim() !== "") {
      //trim으로 공백 제거
      setRestaurants([...restaurants, inputValue.trim()]); //이전 배열에 새로운 입력 값을 저장
      setInputValue(""); //입력값 초기화
    } else {
      alert("한 글자 이상 입력해주세요!"); //공백 값은 입력 받지 않음
    }
  };

  const handleRemoveRestaurant = (index) => {
    const updatedRestaurants = restaurants.filter((_, i) => i !== index); //선택된 인덱스를 제거
    setRestaurants(updatedRestaurants); //제거된 상태를 업데이트
  };

  const handleKeyEvent = (e) => {
    if (e.key === "Enter") {
      handleAddRestaurant();
    }
  };

  return (
    <div className='restaurant-container'>
      <div className='restaurant-title'> 내 맛집 리스트 </div>
      <div className='restaurant-input-wrap'>
        <input
          type='text'
          placeholder='맛집 이름 입력'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} //입력 값이 들어오면 setInputValue를 호출하여 상태 업데이트
          onKeyPress={handleKeyEvent}
          className='restaurant-input'
        />
        <button
          className='restaurant-add-button'
          onClick={handleAddRestaurant}>
          +
        </button>
      </div>
      <ul className='restaurant-list-wrap'>
        {restaurants.map((restaurant, index) => (
          <RestaurantItem
            key={index}
            restaurant={restaurant}
            onClick={() => handleRemoveRestaurant(index)}
            itemClassName='restaurant-item'
            buttonClassName='restaurant-remove-button'
            liClassName='restaurant-li'
            // 외부에서 클래스 이름 전달
          />
        ))}
      </ul>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<RestaurantList />); //react18 부터 ReactDOM.render 대신 createRoot 사용
