export const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case 'contacts/add':
      return {};
    case 'contacts/delete':
      return {};

    default:
      return state;
  }
};
