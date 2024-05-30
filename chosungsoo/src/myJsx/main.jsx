/* 
JSX 문법을 활용하여 코드를 작성하였습니다.
이곳 Main에서는 컴포넌트를 생성하여 엘리먼트를 불러오는 역할을 합니다.\
h1과 search라는 엘리먼트를 불러옵니다.
search에 대한 자세한 기능은 search.jsx 파일에 작성되어 있습니다.
*/
import React from "react";
import Search from "./search";

const styles = {
    control: {
        textAlign: "center",
    },  
};

function Main(props) {
    return (
        <div style={styles.control}>
            <h1>내 맛집 리스트</h1>
            <Search style={styles.search}/>
        </div>
    )
}

export default Main;