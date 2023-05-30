export const concateString = (obj) => {
  let result = "";
  const arrkeys = Object.keys(obj);

  for (let key in obj) {
    if (key === arrkeys[arrkeys.length - 1]) {
      result += `${key}=${obj[key]}`;
    } else {
      result += `${key}=${obj[key]}&`;
    }
  }
  console.log(result);
  return result;
};
