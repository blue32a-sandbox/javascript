/* オブジェクトの色々な作成方法と、発生するプロトタイプチェーン */
(function(){
  "use strict";

  // 構文構造によるオブジェクト生成
  var o = { a: 1 };
  console.log(o);

  var a = ["yo", "whadup", "?"];
  console.log(a);

  function f() {
    return 2;
  }
  console.log(f);

  // コンストラクタ関数を用いる方法
  function Graph() {
    this.vertexes = [];
    this.edges = [];
  }
  Graph.prototype = {
    addVertex: function(v) {
      this.vertexes.push(v);
    }
  };
  var g = new Graph();
  console.log(g);

  // Object.create メソッドを用いる方法
  var a = { a: 1 };
  var b = Object.create(a);
  console.log(b.a); // 1

  var c = Object.create(b);
  console.log(c.a); // 1

  var d = Object.create(null);
  console.log(d.hasOwnProperty); // undefined

  // class キーワードを用いる方法
  class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  class Square extends Polygon {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
    get area() {
      return this.height * this.width;
    }
    set sideLength(newLength) {
      this.height = newLength;
      this.width = newLength;
    }
  }
  var square = new Square(2);
  console.log(square.area);
  square.sideLength = 3;
  console.log(square.area);
})();
