export default function orderByProps(obj, props) {
  obj = Object.fromEntries(Object.entries(obj).sort());
  let sortedPerson = {};
  for (let i = 0; i < props.length; i++) {
    sortedPerson[props[i]] = obj[props[i]];
    delete obj[props[i]];
  }
  obj = { ...sortedPerson, ...obj };
}