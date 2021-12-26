import { actionConstants } from "./action";

export default function Reducer(state = 0, action) {
  switch (action.type) {
    case actionConstants.ADD:
      return state + action.payload;
    case actionConstants.SUBSTRACT:
      return state - action.payload;
    case actionConstants.DIVIDE:
      return state / action.payload;
    case actionConstants.MULTIPLY:
      return state * action.payload;
    default:
      return state;
  }
}
