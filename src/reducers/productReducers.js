import { FETCH_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS } from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload };
    case FILTER_PRODUCTS:
      console.log(state);
      return {
        ...state,
        size: action.payload.size,
        sort: "",
        filteredItems: action.payload.items,
      };
    case SORT_PRODUCTS:
      console.log(state);
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    default:
      return state;
  }
};
