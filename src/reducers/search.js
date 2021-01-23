export const SET_SEARCH_DATA = "SET_HOME_DATA";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_SEARCH_DATA:

      return {
        ...state,
        categories: action.data.categories
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}