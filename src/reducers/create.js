export default function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value
  }
};