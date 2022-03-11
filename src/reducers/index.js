const reducer =  (state, action) => {
  switch (action.type) {
    case 'SET_TECHNOLOGY':
      return {
        ...state,
        tech: action.tach
      };
    default:
      return state;
  }
};

export default reducer;