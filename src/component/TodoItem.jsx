import './TodoItem.css'
function TodoItem({ id, isDone, content, createdDate }) {
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" />
            </div>

            <div className="title_col">
                {content}
            </div>
            <div className="date_col">
                {
                    new Date(createdDate).toLocaleDateString()
                }
            </div>
        </div>
    )
}
export default TodoItem