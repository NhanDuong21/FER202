export const initialCartState = {
  items: [], // { id, name, price, quantity }
  error: null,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product } = action.payload; // { id, name, price }
      const existing = state.items.find((i) => i.id === product.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
          error: null,
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          },
        ],
        error: null,
      };
    }

    case "REMOVE_ITEM": {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.filter((i) => i.id !== id),
        error: null,
      };
    }

    case "INCREASE_QTY": {
      const { id } = action.payload;
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
        error: null,
      };
    }

    case "DECREASE_QTY": {
      const { id } = action.payload;
      const target = state.items.find((i) => i.id === id);
      if (!target) return state;

      if (target.quantity <= 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== id),
          error: null,
        };
      }

      return {
        ...state,
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
        ),
        error: null,
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [], error: null };

    // để hiện lỗi “Cannot add more than stock …”
    case "SET_ERROR":
      return { ...state, error: action.payload.message };

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
}
