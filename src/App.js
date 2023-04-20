// コンポーネントの中身
// useRefとゆうフックスを追加
import { useState, useRef } from "react";
import TodoList from "./TodoList";

// コンポーネントの中にHTNL要素を追加
function App() {
  // useState(フックス)とは、変数を監視、管理する物
  // todos(変数)とはこれから追加するタスク(オブジェクト[name,id,...])
  // 役割としてはざっくり言うとページをリロードしてくれる
  // todosの変数が変わった時だけページを更新する事が出来るので、無駄な再レンダリングを防ぐ
  // 要は1つの変数(2つでもいい)を監視しておいて、その変数に何かしらの更新が行われた場合ページを再レンダリングして表示をページを変える
  // const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  // オブジェクトとして管理する
  // completedとは、タスクが完了したのか、完了してないのかを表示する為のもの
  // 次の作業：今書いてるのを使ってTodoListに近づけるようにする

  // setTodosとは、例えばtodosの中身を更新、追加、削除したい時にsetTodosとゆうset関数を使う事によって
  // todosの中身を更新、追加、削除したり出来るのがsetTodosの役割になる

  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameRef.current.value;
    // setTodosの中に引数に何かしらのメソッドだったり値を入れる事によってtodosが更新される
    setTodos((prevTodos) => {
      return [...prevTodos, { id: "1", name: name, completed: false }];
    });
  };

  // 最初のtodosはpropsと呼ばれてる名前
  // todosとゆう名前でコンポーネント(TodoList)に渡して下さいね、ゆう記述
  // {}の中は渡したい変数を入れる
  // propsでTodoListに値を渡す事が出来る
  return (
    <>
      <TodoList todos={todos} />
      {/* input属性に対してrefとゆうプロパティを追加 */}
      {/* どうゆう事をやっているのか？ */}
      {/* input属性は文字列を打ち込みます */}
      {/* じゃあその文字列を情報を手にしたい時はuseRefとゆうフックスを使えば簡単に文字列を取得出来ます */}
      {/* 要は要素とかを取得する事が出来るってのがuseRef */}
      {/* じゃあどの要素を取得するのかってゆうとrefのフィールドを付けた名前 */}
      <input type="text" ref={todoNameRef} />
      {/* タスクを追加出来るようにする */}
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
