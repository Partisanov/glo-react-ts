import { ChangeEvent, useState } from "react";
import "./Form.scss";

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  const handlerSubmit = () => {
    if (text) {
      props.createNewToDo(text);
      setText("");
    }
  };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={handlerSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={(e:ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};
