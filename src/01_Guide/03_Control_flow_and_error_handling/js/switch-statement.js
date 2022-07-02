/* switch 文 */

var x = 1;
switch (x) {
  case 1:
    console.log('x == 1');
    break;

  default:
    console.log('other');
    break;
}

switch (x) {
  case 1:
    // breakが省略されると、 switch 文の内部の実行を続け、次の case を順番に評価する
  case 2:
    console.log('x == 1 or 2');
  default:
    console.log('other');
}
