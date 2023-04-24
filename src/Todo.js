import React from 'react';

// const Todo = ({ todo }) => {
//   return <div>{todo}</div>;
// };

// export default Todo;

// 次回チェックボックスを挿入する
const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          // トリガー（発火)とゆう意味{}の名前は自由
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;