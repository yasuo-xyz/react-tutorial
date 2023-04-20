import React from 'react';
import Todo from './Todo';

// コンポーネントを定義
// (props)の中の名前はなんでもいい
// const TodoList = (props) => {

// {}の中身がprops(app.jsファイルの中)で書かれた値を受け取る書き方
// {}はjsx記法と呼ばれる物であり、JavaScriptのように書く事が出来る、関数や変数そのまま入れる事が出来る(重要)
// return <div>{props.todos}</div>;
// };

// export default TodoList;


// 今書いてるやり方が一般的な書き方
// const TodoList = ({ todos }) => {
//   return <div>{todos}</div>;
// };

// export default TodoList;

// 次の作業：todosの中には2つのタスクが入ってる(Todo1とTodo2)ので1つ1つ取り出していく
const TodoList = ({ todos }) => {
  // map関数とは、今todosには初期値としてTodo1とTodo2の文字列が入っていてその配列の中身を1つ1つ取り出していく
  // そしてその1つ1つをtodoとゆう自作の変数を用意しておいて、そのtodoをTodoのコンポーネントに渡してあげてるとゆう記述
  // このままだとmap関数に対してエラーが発生してしまう
  // 原因：ユニークキーをつける、Todoコンポーネントが今2つあるので見分けがつかないのでキーとゆうのを設定していく必要がある
  // 今はTodo1,Todo2で重複はしないのだが
  // 例えば同じタスク（aiueo,aiueoみたいな感じ)を入れてしまうと重複エラーになってしまうので基本的にはこの書き方は好ましくないのでユニークなキーを設定するのが好ましい
  // これでpropsの受け渡しだったりコンポーネントを階層的に使うとゆうところ説明は終わり
  return todos.map((todo) => <Todo todo={todo} key={todo} />);
};

export default TodoList;