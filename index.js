import { Buffer } from "buffer";

const buf1 = Buffer.alloc(10);
console.log("buf1", buf1);

const buf2 = Buffer.alloc(10, 1);
console.log("buf2", buf2);

const buf3 = Buffer.allocUnsafe(10);
console.log("buf3", buf3);

const buf4 = Buffer.from([1, 2, 3]);
console.log("buf4", buf4);

const buf5 = Buffer.from([257, 257.5, -255, "1"]);
console.log("buf5", buf5);

const buf6 = Buffer.from("tést");
console.log("buf6", buf6);

const buf7 = Buffer.from("tést", "latin1");
console.log("buf7", buf7);

// potentially vulnerable code
// new Buffer() は初期化されていない領域を確保するため、変数の内容などが見える可能性がある。
// が、Node.js 16.13.2 では再現しなかった。コマンドラインに DeprecationWarning も表示されない。
const secret = "secret_text";
const buf = new Buffer(secret);
var string;
while (1) {
  string = new Buffer(1024).toString();
  if (/`sec`/.test(string)) break;
}
console.log(string);
