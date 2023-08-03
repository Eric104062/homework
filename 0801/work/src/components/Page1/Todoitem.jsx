import React from "react";
const TodoItem = ({ title, completed, onDelete, onComplete }) => {
  return (
    <div>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
      <button className="按鈕" onClick={onDelete}>刪除</button>
      <button onClick={onComplete}>{completed ? "取消完成" : "完成"}</button>
    </div>
  );
};
export default TodoItem;