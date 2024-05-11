import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
function GoodFood () {
    // setInputText 함수로 변경되는 inputText 변수 생성
    const [inputText, setInputText] = useState('');

    // setList 함수로 변경되는 list 배열 생성
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            // 기존의 list 배열을 복사, inputText로 입력받은 값을 복사본에 포함시는 함수 setList()
            setList([...list, inputText]);
            // 입력창 초기화
            setInputText('');
        }
    };

    const handleDelete = (index) => {
        // 기존의 리스트의 복사본을 newList 변수에 저장
        const newList = [...list];

        // newList의 index를 1개 삭제
        newList.splice(index, 1);

        // list를 newList로 변경함
        setList (newList);
    };
    
    return (
        <div className='input-container'>
            <h1>내 맛집 리스트</h1>
            <form className='input-container' onSubmit={handleSubmit}>
                <input className='input' type='text' placeholder='&nbsp;맛집 이름 입력' onChange={handleChange}></input>
                <input className='button' type='submit' value='+'></input>
            </form>
            <ul>
                {list.map((item, index) => (
                    <li key={index}
                    onClick={() => handleDelete(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<GoodFood />, document.getElementById('root'));
