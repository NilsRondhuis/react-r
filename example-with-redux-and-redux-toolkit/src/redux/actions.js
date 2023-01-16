export const increment = num => {
  return {
    type: 'counter/increment',
    payload: num,
  };
};

export const decrement = num => {
  return {
    type: 'counter/decrement',
    payload: num,
  };
};
