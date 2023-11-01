export const getFirstWords = (str, numberOfWords = 10) => {
  return str.split(' ').splice(0, numberOfWords).join(" ").concat('...');
}
