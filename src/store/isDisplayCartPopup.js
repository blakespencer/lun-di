// ACTION TYPES

const CHANGE_DISPLAY_POPUP = 'CHANGE_DISPLAY_POPUP';

// INITIAL STATE

const defaultCart = true;

// ACTION CREATROS

export const displayCartPopup = () => ({
  type: CHANGE_DISPLAY_POPUP,
  payload: true,
});

export const hideCartPopup = () => ({
  type: CHANGE_DISPLAY_POPUP,
  payload: false,
});

// REDUCER
export default (state = defaultCart, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY_POPUP:
      return action.payload;
    default:
      return state;
  }
};
