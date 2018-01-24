export default function(value) {
  if (value === '00000000') return null;
  return new Date(+value.substring(0, 4), value.substring(4, 6) - 1, +value.substring(6, 8));
}
