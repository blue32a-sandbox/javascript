/* continue文 */
(function(){
  let i = 0;
  let n = 0;
  while (i < 5) {
    i++;
    if (i === 3) {
      continue;
    }
    n += i;
    console.log(n);
  }

  console.log('ラベルを使用した例')

  let x = 0;
  let y = 10;
  checkxandy:
    while (x < 4) {
      console.log(x);
      x += 1;
      checky:
        while (y > 4) {
          console.log(y);
          y -= 1;
          if ((y % 2) === 0) {
            continue checky;
          }
          console.log(y + ' is odd.');
        }
        console.log('x = ' + x);
        console.log('y = ' + y);
    }
})();
