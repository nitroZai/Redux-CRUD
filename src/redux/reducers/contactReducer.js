const initialState = [
  {
    id: 0,
    name: "ram",
    number: 123,
    email: "ram@gmail.com",
  },
  {
    id: 1,
    name: "ramma",
    number: "123",
    email: "ramma@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );

      state = updateState;

      return state;

    case "DELETE_CONTACT":
      const filteredState = state.filter((contact) =>
        contact.id !== action.payload ? contact : null
      );

      state = filteredState;

      return state;

    default:
      return state;
  }
};

export default contactReducer;
