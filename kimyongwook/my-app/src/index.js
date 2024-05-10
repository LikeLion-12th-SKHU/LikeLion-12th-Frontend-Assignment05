import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Counter() {
  const [input, setInput] = useState([]);
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value); // 입력값 name 변수에 설정
  };

  const addInput = () => {
    if (name !== '') {
      setInput([name, ...input]); // 이전 배열 맨 앞에 새 name을 추가
      setName('');
    }
  };

  const deleteInput = (idx) => {
    setInput(input.filter((_, index) => index !== idx)); // idx는 false가 되어 새 배열에서 제외
  };

  return (
    <div className="counter-container">
      <p className="counter-text">내 맛집 리스트</p>
      <input type="text" className="input" placeholder="맛집 이름 입력" value={name} onChange={handleInputChange} />
      <button className="counter-button" onClick={addInput}>+</button>
      <ul className="input-list">
      {input.map((input, idx) => ( // input 배열 매핑
          <div key={idx}>
            <p>{input}<button className="delete-button" onClick={() => deleteInput(idx)}>삭제</button></p>
          </div>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));