export const pushServerText = (state, res) => {
  if (res.status === 200) {
    state.responseData = res.body;
    state.serverErrorText = false;
  } else {
    state.serverErrorText = res.bodyText;
  }
};
