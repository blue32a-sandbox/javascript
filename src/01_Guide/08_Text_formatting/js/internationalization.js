/* 国際化 */
(function(){
  // 日時フォーマット
  const msPerDay = 24 * 60 * 60 * 1000;
  const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197)); // July 17, 2014 00:00:00 UTC.
  const options = { year: '2-digit', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
  const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
  console.log(americanDateTime(july172014)); // 07/17/14, 09:00 AM GMT+9

  // 数値フォーマット
  const gasPrice = new Intl.NumberFormat(
    'en-US',
    { style: 'currency', currency: 'USD', minimumFractionDigits: 3}
  );
  console.log(gasPrice.format(5.259)); // $5.259
  const hanDecimalRMBInChina = new Intl.NumberFormat(
    'zh-CN-u-nu-hanidec',
    { style: 'currency', currency: 'CNY' }
  );
  console.log(hanDecimalRMBInChina.format(1314.25)); // ¥一,三一四.二五

  // 照合
  const names = ['Hochberg', 'Hönigswald', 'Holzman'];
  const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk'); // ドイツ語の電話帳順
  console.log(names.sort(germanPhonebook.compare).join(', ')); // Hochberg, Hönigswald, Holzman
  const germanDictionary = new Intl.Collator('de-DE-u-co-dict'); // ドイツ語の辞書順
  console.log(names.sort(germanDictionary.compare).join(', ')); // Hochberg, Holzman, Hönigswald
})();
