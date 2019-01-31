function mockServer(data) {
  setTimeout(() => {
    return data();
  }, 200);
}
export function checkEmail({ email }, cb) {
  mockServer(() => {
    if (email === "example@yandex.ru") {
      cb(true);
    } else {
      cb(false);
    }
  });
}
