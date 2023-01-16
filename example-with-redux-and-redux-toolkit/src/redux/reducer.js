const initialState = {
  value: 0,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/increment': {
      return {
        value: state.value + action.payload,
      };
    }
    case 'counter/decrement': {
      return {
        value: state.value - action.payload,
      };
    }
    default:
      return state;
  }
};
