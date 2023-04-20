import React from 'react';

// const Todo = ({ todo }) => {
//   return <div>{todo}</div>;
// };

// export default Todo;

// 次回チェックボックスを挿入する
const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;