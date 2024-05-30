import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 

function FoodList() {

  const [inputText, setInputText] = useState('');
  const [foodList, setFoodList] = useState([]);

  // 입력값이 변경될 때 호출되는 함수 
  const inputChange = (event) => {

    setInputText(event.target.value);

  };

  // 버튼을 클릭했을 떄 호출되는 함수 
  const addFood = () => {

    if (inputText.trim() !== '') {
      // 입력된 맛집 리스트에 추가
      setFoodList([...foodList, inputText]); 
      // 입력창 비우기
      setInputText('');
    }

  };

  // 맛집 리스트 삭제하는 함수
  const deleteFood = (index) => {

    // 클릭한 인덱스 제외하고 맛집 리스트를 새로운 배열로 만듬
    const updatedFoodList = foodList.slice(0, index).concat(foodList.slice(index + 1));
    setFoodList(updatedFoodList);

  };

  return (

    <div className='food-container'>
      <p className='food-text'>내 맛집 리스트</p>
      <div className='food-add'>
        <input className='food-input' type='text' placeholder='맛집 이름 입력' value={inputText} onChange={inputChange}></input>
        <button className='food-button' onClick={addFood}>+</button>
      </div>
  
      <div className='food-list'>
        
        {foodList.map((food, index) => ( 
         // map 함수를 활용해 foodList를 출력 

          <div className='food-item' key={index} onClick={() => deleteFood(index)}>{food}</div>
          // 맛집 리스트 클릭시 deleteFood 함수 호출

        ))}

      </div>
    </div>
    
  );
}

ReactDOM.render(<FoodList />, document.getElementById('root'));
