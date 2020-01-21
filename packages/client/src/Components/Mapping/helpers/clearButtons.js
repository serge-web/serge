export default function clearButtons (/* array */ buttons) {
  buttons.forEach(button => button.remove())
  return []
};
