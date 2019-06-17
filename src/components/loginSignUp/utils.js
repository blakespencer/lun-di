export const validate = (evt, state) => {
  let errorMessage = 'This field is required';
  const name = evt.target.name;
  const value = evt.target.value;
  let { isError, hasErrored } = state[name];
  if (!value) {
    isError = true;
    hasErrored = true;
  } else if (value.length > 6 && name === 'password') {
    hasErrored = true;
  } else if (name === 'password' && value.length < 6 && hasErrored) {
    isError = true;
    errorMessage = 'Must be atleast 6 characters';
  } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value) && hasErrored) {
    isError = true;
    errorMessage = 'Email address is invalid';
  } else {
    isError = false;
  }

  return {
    isError,
    hasErrored,
    errorMessage,
  };
};

export const isDisabledButton = state => {
  const { email, password } = state;
  const names = Object.keys(state).filter(el => el !== 'error');
  names.map(el => state.name);
  return (
    names
      .map(name => state[name])
      .reduce((accumulator, currentValue) => {
        return accumulator || currentValue.isError || !currentValue.value;
      }, false) ||
    password.value.length < 6 ||
    !/\S+@\S+\.\S+/.test(email.value)
  );
};
