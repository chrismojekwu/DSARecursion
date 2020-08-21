const countSheep = (num) => {
  if (num < 1) {
    return console.log("All sheep jumped over the fence");
  }
  return (
    console.log(`${num}: Another sheep jumps over the fence`),
    countSheep(num - 1)
  );
};

const powerCalc = (b, p) => {
  if (p === 0) {
    return 1;
  }

  return b * powerCalc(b, p - 1);
};

const revStr = (string) => {
  if (string.length === 0) {
    return "";
  }
  return string.slice(-1) + revStr(string.slice(0, -1));
};

const tri = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + tri(n - 1);
};

const splitter = (str, string = "") => {
  if (str.length === 0) {
    return [string];
  }

  const newChar = str[0];

  if (newChar === "/") {
    return [string, ...splitter(str.slice(1), (string = ""))];
  }
  string = string + newChar;
  return splitter(str.slice(1), string);
};

const facto = (num) => {
  if (num === 0) {
    return 1;
  }
  return facto(num - 1) * num;
};

//I fixed it!
const fibo = (n, x = 0, arr = [0, 1]) => {
  if (n <= 0) {
    return arr;
  }
  arr.push(arr[x] + arr[x + 1]);
  return fibo(n - 1, x + 1, arr);
};
