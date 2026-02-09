const initialState = {
  cartData: [],
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };

    case "RemoveCart":
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export { CartReducer, initialState };
