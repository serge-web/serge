export default function poll(fn, timeout) {
  let promise = function(resolve, reject) {
    setTimeout(function () {
      fn()
        .then(resolve(true))
    }, timeout);
  };
  return new Promise(promise);
}
