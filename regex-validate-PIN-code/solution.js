function validatePIN (pin) {
  let foo = /^(?=[0-9]*$)(?:.{4}|.{6})$/.test(pin);
  return foo;
}
