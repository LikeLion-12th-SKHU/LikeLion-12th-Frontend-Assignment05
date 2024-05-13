function AddList() {
    const [list, setList] = React.useState('');
    const [foodList, setFoodList] = React.useState([]);

    /*입력값 변경 시 호출되는 함수*/
    const handleChange = (e) => {
        setList(e.target.value);
    }

    /*맛집 추가 버튼 클릭 시 호출되는 함수*/
    const handleAddFoodList = () => {
        if (list.trim() !== '') {
            setFoodList([...foodList, list]);
            setList('');
        }
    }

    /*입력한 리스트에서 항목을 클릭하여 삭제하는 함수*/
    const handleDeleteFoodList = (indexDelete) => {
        const update = foodList.filter((_, index) => index !== indexDelete);
        setFoodList(update);
    }

    /*JSX를 사용하여 UI 렌더링*/
    return (
        React.createElement('div', { className: 'add-List' },
            React.createElement('h1', null, '내 맛집 리스트'),
            React.createElement('input', { type: 'text', className: 'add-ListName', value: list, placeholder: '맛집 이름 입력', onChange: handleChange }),
            React.createElement('button', { className: 'add-btn', type: 'button', onClick: handleAddFoodList }, '+'),
            React.createElement('ul', null,
                foodList.map((food, index) => (
                    React.createElement('li', { className: 'A', key: index, onClick: () => handleDeleteFoodList(index) }, food)
                ))
            )
        )
    );
}

/*ReactDOM을 사용하여 React 컴포넌트를 렌더링*/
ReactDOM.render(
    React.createElement(AddList),
    document.getElementById('root')
);
