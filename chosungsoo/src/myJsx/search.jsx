import React, {useState} from "react";

// 각 태그에 대한 스타일을 객체 형태로 작성하였습니다.
const styles_search =  {
    search: {
        width: 500,
        height: 40,
        borderRadius: 30,
        textAlign: "center",
    },
    add: {
        width: 50,
        height: 40,
        borderRadius: 30,
        textAlign: "center",
        fontSize: 40,
        marginLeft: "20px",
        position: "relative",
        top: "10px",
        paddingBottom: "45px",
    },

    list: {
        listStyleType: "none",
        margin: "10px",
    },

    delete: {
        borderRadius: "20px",
        marginLeft: "10px",
    }
};


// 함수 컴포넌트입니다.

function Search() {

    // useState 훅을 사용하여 내가 입력한 값을 렌더링하여 화면에 나타날 수 있도록 하였습니다.
    const [keywords, setKeywords] = useState([]);
  
    const handleAddKeyword = (e) => {
      e.preventDefault();
      const keyword = e.target.elements.keyword.value; // 입력된 키워드를 keyword 변수에 저장합니다.
      if (keyword) {   // 만약에 키워드 변수에 값이 있으면 다음과 같은 코드를 실행합니다.
        setKeywords([...keywords, keyword]);  // 기존에 저장되어 있던 값에 새로 입력된 값을 추가합니다.
        e.target.elements.keyword.value = '';  // 그리고 나서 입력창의 값은 비어지게 됩니다.
      }
    };

    const deleteKeyword = index => {
        setKeywords(keywords.filter((_, i) => i !== index));
        // index를 매개변수로 받고 filter함수를 통해서 내가 원하는 목록만 지울 수 있도록 기능을 구현하였습니다. 
      };



      // 키워드 변수(배열) 내에 각 리스트 항목을 화면에 나타낼 수 있도록 하였습니다.
    return(
        <div>
            <form onSubmit={handleAddKeyword}>
                <input style={styles_search.search} type="text" name="keyword" placeholder="맛집 이름 입력" />
                <button style={styles_search.add} type="submit">&#43;</button>
            </form>
            <ul>
                {keywords.map((keyword, index)=> (
                    <li style={styles_search.list} key={index}>
                        {keyword}
                        <button style={styles_search.delete} onClick={() => deleteKeyword(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Search;