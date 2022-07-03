/* for...in文 */
(function(){
  let obj = {
    hoge: 'hogehoge',
    fuga: 'fugafuga'
  };

  for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
  }
})();
