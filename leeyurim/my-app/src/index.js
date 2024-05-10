import React, { useState } from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  const [JMT, setJMT] = useState([]); // 맛집 리스트 상태와 해당 상태를 변경하는 함수
  const [NewJMT, setNewJMT] = useState(''); // 새로운 맛집 이름을 담는 상태와 해당 상태를 변경하는 함수

  // 입력창의 값이 변경될 때 호출되는 함수
  const handleChange = (event) => {
    setNewJMT(event.target.value); // 입력된 값을 NewJMT 상태에 설정합니다.
  };

  // 새로운 맛집을 추가하는 함수
  const handleAddJMT = () => {
    // 입력된 맛집 이름이 공백이 아닌 경우에만 실행합니다.
    if (NewJMT.trim() !== '') {
      // 기존 맛집 리스트에 새로운 맛집을 추가하고 NewJMT 상태 초기화.
      setJMT([...JMT, NewJMT]);
      setNewJMT('');
    }
  };

  // 맛집을 삭제하는 함수
  const handleDeleteJMT = (index) => {
    // index 위치의 맛집을 제외한 새로운 맛집 리스트를 생성하여 설정합니다.
    const updatedList = [...JMT];
    updatedList.splice(index, 1);
    setJMT(updatedList);
  };

  // React 컴포넌트 반환
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>맛집 리스트</h1>
      {/* 맛집 입력창, 추가 버튼 */}
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="맛집 이름 입력"
          value={NewJMT}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddJMT}>+</button>
      </div>
      {/* 맛집 리스트 목록 */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* JMT 배열 순회, 맛집 표시, 삭제 버튼*/}
        {JMT.map((JMT, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            {JMT}
            <button
              onClick={() => handleDeleteJMT(index)}
              style={{ marginLeft: '5px' }}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

