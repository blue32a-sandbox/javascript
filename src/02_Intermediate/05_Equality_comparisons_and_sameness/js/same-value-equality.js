/* Same-value 等価性 */
(function(){
  "use strict";

  Object.defineProperty(
    Number,
    'NEGATIVE_ZERO',
    {
      value: -0,
      writable: false,
      configurable: false,
      enumerable: false
    }
  );

  console.log(Number.NEGATIVE_ZERO); // -0

  function attemptMutation(v) {
    Object.defineProperty(Number, 'NEGATIVE_ZERO', { value: v });
  }

  try {
    // イミュータブルなプロパティを変更するのでエラーが発生する
    attemptMutation(+0); // TypeError
  } catch (e) {
    console.error(e);
  }

  console.log(Number.NEGATIVE_ZERO); // -0

  // 実際の変更が伴わないので、Object.definePropertyは何もしない（エラーは発生しない）
  attemptMutation(-0);
  console.log(Number.NEGATIVE_ZERO); // -0
})();
