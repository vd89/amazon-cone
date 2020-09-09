/** @format */

export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_TO_BASKET':
      //Logic for adding items to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      // Logic to remove items from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketIndex) => basketIndex.id === action.id);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not found!!`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
