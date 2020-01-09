const like = require("./index.js");

let data1 = {
  msg: "Your link was created.",
  ok: true,
  data: { link: ["3b673d", 4882794] }
};
let serialize1 = like.stringify(data1);

let data2 = {
  msg: "Your link not created.",
  ok: false,
  data: { link: ["4882794", 3673] }
};
let serialize2 = like.stringify(data2);

console.log(serialize1);
console.log(serialize2);
