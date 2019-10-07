export default function checkUnique(value, array) {
  return array.every((item) => item !== value);
};
