var qqwry = require("qqwry");

var qqwry = qqwry.open(__dirname + "/qqwry.dat");
console.log(qqwry.query("115.193.152.250"));
console.log(qqwry.query("222.73.68.35"));
console.log(qqwry.query("220.191.113.36"));
qqwry.close();


