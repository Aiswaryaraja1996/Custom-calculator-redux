export const actionConstants = {
  ADD: "ADD",
  SUBSTRACT: "SUBSTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
};

export const ADD = (value) => ({
  type: "ADD",
  payload: value,
});

export const SUBSTRACT = (value) => ({
  type: "SUBSTRACT",
  payload: value,
});

export const MULTIPLY = (value) => ({
  type: "MULTIPLY",
  payload: value,
});

export const DIVIDE = (value) => ({
  type: "DIVIDE",
  payload: value,
});
