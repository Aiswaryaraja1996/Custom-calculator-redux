import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ADD, SUBSTRACT, MULTIPLY, DIVIDE } from "../redux/action";

const Button = styled.button`
  outline: none;
  border-style: none;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
`;

const Input = styled.input`
  border-style: none;
  outline: none;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  width: 30px;
  font-size: 22px;
  text-align: center;
  &:nth-child(1) {
    caret-color: transparent;
  }
`;

export default function Calculator() {
  const val = useSelector((state) => state);

  const [inp, setInp] = useState(null);
  const dispatch = useDispatch();

  const handleAction = (type) => {
    var action;
    if (type === "ADD") action = ADD(Number(inp));
    else if (type === "SUBSTRACT") action = SUBSTRACT(Number(inp));
    else if (type === "MULTIPLY") action = MULTIPLY(Number(inp));
    else if (type === "DIVIDE") {
      if (inp == 0) alert("Divide by zero not possible");
      else action = DIVIDE(Number(inp));
    }
    action && dispatch(action);
  };
  return (
    <div>
      <div>
        <Input type="text" name="value" value={val} />
        <Input
          type="text"
          name="counter"
          onChange={(e) => setInp(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={() => handleAction("ADD")}>ADD</Button>
        <Button onClick={() => handleAction("SUBSTRACT")}>SUBSTRACT</Button>
        <Button onClick={() => handleAction("MULTIPLY")}>MULTIPLY</Button>
        <Button onClick={() => handleAction("DIVIDE")}>DIVIDE</Button>
      </div>
    </div>
  );
}
