import './TodoItem.css'
function TodoItem({ id, isDone, content, createdDate, onDelete, onCheck }) {
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" value={isDone} onChange={() => onCheck(id)} />
            </div>

            <div className="title_col">
                {content}
            </div>
            <div className="date_col">
                {
                    new Date(createdDate).toLocaleDateString()
                }
            </div>
            {
                isDone ?
                    <div></div>
                    :
                    (
                    <div className="btn_col">
                        <button onClick={() => onDelete(id)}>삭제</button>
                    </div>
                    )
            }
        </div>
    )
}
export default TodoItem