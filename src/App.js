// コンポーネントの中身
// useRefとゆうフックスを追加
import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

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

  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加
    const name = todoNameRef.current.value;
    // テキストボックスが空白の状態の時にタスクを追加押しても追加されないように実装している
    if (name === "") return;
    // setTodosの中に引数に何かしらのメソッドだったり値を入れる事によってtodosが更新される
    // ではどのように更新したかとゆうと、prevTodosとゆうのを自前で用意した
    // ...が3つあるのはスプレッド構文と言われてる書き方
    // 要はオブジェクトにおけるスプレット構文の追加の方法とゆうモダンのJavaScriptの書き方
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  // チェックボックスに完了か未完了かのチェックマークを付ける
  // ()の中のidの部分はどののタスクを指定するのかのどの、の部分の役割の意味
  const toggleTodo = (id) => {
    // 何をしているのかとゆうとコピーをしている
    // todosとゆう中のオブジェクトをnewTodosに1回コピーしてる
    // 何故コピーしないといけないのかとゆうと、todosとゆうのが状態変数で管理されていて直接触るのはよろしくないから
    // 直接値を変える事は好ましくないのでなのでまずnewTodosとゆう形でコピーしてあげる
    const newTodos = [...todos];
    // 何をしているのかとゆうとfind関数とゆうのはmap関数とちょっと似ている
    // map関数とゆうのは1つ1つ取り出す役割
    // find関数は何かを見つける、条件式がtrueであればそのtrueになったものだけを変数の中に入れる
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  // チェックマークが付いてるタスクを削除するのを実装している
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // 最初のtodosはpropsと呼ばれてる名前
  // todosとゆう名前でコンポーネント(TodoList)に渡して下さいね、ゆう記述
  // {}の中は渡したい変数を入れる
  // propsでTodoListに値を渡す事が出来る
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {/* input属性に対してrefとゆうプロパティを追加 */}
      {/* どうゆう事をやっているのか？ */}
      {/* input属性は文字列を打ち込みます */}
      {/* じゃあその文字列を情報を手にしたい時はuseRefとゆうフックスを使えば簡単に文字列を取得出来ます */}
      {/* 要は要素とかを取得する事が出来るってのがuseRef */}
      {/* じゃあどの要素を取得するのかってゆうとrefのフィールドを付けた名前 */}
      <input type="text" ref={todoNameRef} />
      {/* タスクを追加出来るようにする */}
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear} >完了したタスクの削除</button>
      {/* チェックマークが付いていないのをカウントするのを実装 */}
      {/* filter関数とは、条件式がfalseであればそのfalseになったものだけを変数の中に入れるとゆうmap関数の逆バージョン */}
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
