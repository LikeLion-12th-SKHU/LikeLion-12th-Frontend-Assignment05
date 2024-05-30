import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// Counter 함수
function Counter() {
  // useState을 사용하여 초기 입력상태 ('') 설정
  const [inputValue, setInputValue] = useState('');
  // useState을 사용하여 초기 음식리스트 상태 ([]) 설정
  const [foodList, setFoodList] = useState([]);

  // 입력값 변경 시 호출되는 handleChange 함수 (입력값 재설정)
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // 맛집 추가 버튼 클릭 시 호출되는 handleAddFood 함수
  const handleAddFood = () => {
    // 만양 입력값이 공백이 아닌 경우
    if (inputValue.trim() !== '') {
      // 맛집 리스트에 입력받은 새 항목값 추가 
      // ([...foodList]이어야 하는 이유: 기존 배열 복사하여 새 배열 생성해야 렌더링 가능)
      setFoodList([...foodList, inputValue]);
      // 입력값 초기화
      setInputValue('');
    }
  };

  // 맛집 삭제하는 handleDeleteFood 함수 (매개변수: 인덱스) 
  const handleDeleteFood = (index) => {
    // 기존의 맛집 리스트 복사하여 새 변수 newList에 저장
    const newList = [...foodList];
    // 클릭된 맛집 리스트의 인덱스 1개 제거
    newList.splice(index, 1);
    // 업데이트된 맛집 재설정
    setFoodList(newList);
  };

  // 렌더링
  return ( 
    <div className="counter-container">
      {/* 제목 */}
      <p className='counter-title'>내 맛집 리스트</p>
      {/* 입력값 변경 시 handleChange 함수 호출하는 입력폼 */}
      <input className='counter-input' placeholder='맛집 이름 입력'
             value={inputValue} onChange={handleChange} />
      {/* 버튼 클릭 시 입력값 추가하는 함수 handleAddFood 지닌 버튼 */}
      <button className="counter-button" onClick={handleAddFood}>+</button>
      <div>
        {/* 맛집 리스트에 해당 항목의 인덱스를 모아 새 배열 반환 */}
        {/* 입력된 값 클릭 시 해당 항목의 인덱스 삭제하는 handleDeleteFood 함수 호출*/}
        {foodList.map((food, index) => (
          <div className='counter-food' key={index} onClick={() => handleDeleteFood(index)}>
            {food}
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
