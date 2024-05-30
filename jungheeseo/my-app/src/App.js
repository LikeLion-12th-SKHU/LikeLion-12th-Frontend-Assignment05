import React, { useState } from "react";
import "./App.css";

const RestaurantList = () => {
  const [text, setText] = useState(""); // 입력 텍스트 관리
  const [items, setItems] = useState([]); // 입력된 텍스트 목록 관리

  // 입력창 변경
  const Change = (event) => {
    setText(event.target.value);
  };

  // 텍스트 추가
  const Add = () => {
    // 공백이 아닌 경우에만 추가
    if (text.trim() !== "") {
      setItems([...items, text]); // 기존 입력 텍스트에 새 텍스트 추가
      setText(""); // 입력창 초기화
    }
  };

  // 텍스트 삭제
  const Delete = (index) => {
    const newItems = items.filter((_, i) => i !== index); // 해당 아이템을 제외한 새로운 리스트 생성
    setItems(newItems); // 아이템 리스트 업데이트
  };

  return React.createElement(
    "div",
    { className: "text-input-list" },
    // 입력창
    React.createElement("input", {
      type: "text",
      value: text,
      onChange: Change,
      placeholder: "맛집 이름 입력",
    }),
    // 추가 버튼
    React.createElement("button", { onClick: Add }, "+"),
    React.createElement(
      "ul",
      null,
      items.map((item, index) =>
        React.createElement(
          "li",
          { key: index },
          item,
          // 삭제 버튼
          React.createElement("button", { onClick: () => Delete(index) }, "x")
        )
      )
    )
  );
};

const List = () => {
  return React.createElement(
    "div",
    { className: "List" },
    React.createElement("h1", null, "내 맛집 리스트"),
    React.createElement(RestaurantList, null)
  );
};

export default List;
