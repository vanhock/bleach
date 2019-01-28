function mockServer(data) {
  setTimeout(() => {
    return data();
  }, 700);
}
export const checkEmail = ({ email }, cb) => {
  mockServer(() => {
    if (email === "example@yandex.ru") {
      cb({ exist: true });
    } else {
      cb({ exist: false });
    }
  });
};
