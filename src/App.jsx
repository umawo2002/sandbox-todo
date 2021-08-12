import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [uncomp, setUncomp] = useState(["aaa", "bbb"]);
  const [comp, setComp] = useState(["ccc"]);
  const [todoText, setTodoText] = useState("");

  const onChangeTotoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...uncomp, todoText];
    setUncomp(newTodos);
    setTodoText("");
  };

  const onClickDel = (idx) => {
    const newTodos = [...uncomp];
    newTodos.splice(idx, 1);
    setUncomp(newTodos);
    // alert(idx);
  };

  const onClickComp = (idx) => {
    const newUncompTodos = [...uncomp];
    newUncompTodos.splice(idx, 1);
    setUncomp(newUncompTodos);
  };
  return (
    <>
      <div className="inputbox">
        <input
          className="intext"
          type="text"
          placeholder="tpdo入力"
          value={todoText}
          onChange={onChangeTotoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="uncomp">
        <p>未完了</p>
        <ul>
          {uncomp.map((todo, idx) => {
            return (
              <div key={idx} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComp(idx)}>完了</button>
                <button onClick={() => onClickDel(idx)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="comp">
        <p>完了</p>
        <ul>
          {comp.map((compTodo) => {
            return (
              <div key={compTodo} className="list-row">
                <li>{compTodo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
