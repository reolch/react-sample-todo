const Task = (props) => {
    const {index, todo, handleChangeEditText, handleDeleteButton } = props;

    return (
        <div key={index}>
            <li id={index}><input type='text' onChange={(event) => handleChangeEditText(event, todo.id)} value={todo.task}></input></li>
            <button onClick={() => handleDeleteButton(todo.id)}>削除</button>
        </div>
    );
}

export default Task;