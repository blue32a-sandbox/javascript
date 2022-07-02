/* 例外処理文 */

// あらゆる式を投げることができる
// throw 'Erro2';
// throw 42;
// throw true;
// throw {toString: function() { return "これはオブジェクトです！"; } };

try {
  console.log('try');
  throw 'myException';
} catch (e) {
  console.error(`catch ${e}`);
} finally {
  console.log('finally');
}

try {
  console.log('try');
} catch (e) {
  console.error(`catch ${e}`); // ここは実行されない
} finally {
  console.log('finally');
}

// finally ブロックが値を返す場合、try…catch…finally 全体が生成する返値になる
function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;    // この返値は、finally ブロックが
                    // 完了するまで保留となる
    console.log(2); // ここまで到達しない
  } finally {
    console.log(3);
    return false;   // 直前の "return" が上書きされる
    console.log(4); // ここまで到達しない
  }
  // ここで "return false" が実行される
  console.log(5);   // ここまで到達しない
}
console.log(f()); // 0, 1, 3, false

// finally ブロックによる返値の上書きは、catch ブロック内で発生した、または再発生した例外にも適用される
function ff() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // この throw 文は finally ブロックが
             // 完了するまで保留になる
  } finally {
    return false; // 直前の "throw" が上書きされる
  }
  // ここで "return false" が実行される
}

try {
  console.log(ff());
} catch(e) {
  // ここには到達しない
  // ff() を実行した際、`finally` ブロックが false を返し、
  // 上記の `catch` の中にある `throw` を上書する
  console.log('caught outer "bogus"');
}
