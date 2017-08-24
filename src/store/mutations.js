export const ADD_SERVER_TEXT = (state, res) => {
  if (res !== null) {
    if (res.status === 200) {
      state.responseData = res.body;
      state.serverErrorText = null;
    } else {
      state.serverErrorText = res.bodyText;
    }
  } else {
    state.serverErrorText = null;
  }
};
