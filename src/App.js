// コンポーネントの中身
import { useState } from "react";
import TodoList from "./TodoList";

// コンポーネントの中にHTNL要素を追加
function App() {
  //　useState(フックス)とは、変数を監視、管理する物
  // todos(変数)とはこれから追加するタスク(オブジェクト[name,id,...])
  // 役割としてはざっくり言うとページをリロードしてくれる
  // todosの変数が変わった時だけページを更新する事が出来るので、無駄な再レンダリングを防ぐ
  // 要は1つの変数(2つでもいい)を監視しておいて、その変数に何かしらの更新が行われた場合ページを再レンダリングして表示をページを変える
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  // 最初のtodosはpropsと呼ばれてる名前
  // todosとゆう名前でコンポーネント(TodoList)に渡して下さいね、ゆう記述
  // {}の中は渡したい変数を入れる
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
