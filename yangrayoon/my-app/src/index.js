import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function AddList() {
  const [list, setList] = useState(''); //입력창 초기값 빈 문자열로 설정 
  const [foodList, setFoodList] = useState([]);  //맛집 리스트 초기값 빈 배열로 설정 

  const handleChange = (e) => { //입력값 변경될 때 호출 
    setList(e.target.value); 
  }

  const handleAddFoodList = () => { //맛집 리스트에 추가 
    if(list.trim() !== ''){ //공백이 아닌 경우, 알려주신 공백을 제거하는 trim을 사용해 봤습니다!! 
      setFoodList([...foodList, list]); //리스트에 맛집 추가 
      setList(''); //입력창 리셋 
    }
  }

  const handleDeleteFoodList = (indexDelete) => { //맛집 리스트에서 삭제 
    const update = foodList.filter((_, index) => index !== indexDelete); //선택 항목 제외 
    setFoodList(update);
  }

  return(
    <div className='add-List'>
      <h2>내 맛집 리스트</h2>
      <input type='text' className='add-ListName' value={list} placeholder='맛집 이름 입력' onChange={handleChange} />
      <button className='add-btn' type='button' onClick={handleAddFoodList}>+</button>
      <ul>
        {foodList.map((food, index) => (
          <li className='A' key={index} onClick={() => handleDeleteFoodList(index)}>{food}</li> //맛집 리스트 클릭 시 삭제 
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<AddList />, document.getElementById('root'));