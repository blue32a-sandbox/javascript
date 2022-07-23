/* よくある間違い: ループ内でクロージャを作成する */
(function(){
  "use strict";

  function showHelp(help) {
    document.getElementById('help').innerHTML = help;
  }

  function setupHelp() {
    var helpText = [
      {'id': 'email', 'help': 'あなたの E メールアドレス'},
      {'id': 'name', 'help': 'あなたのフルネーム'},
      {'id': 'age', 'help': 'あなたの年齢 (17 歳以上)'}
    ];

    // varの代わりにletを使う例
    // for (var i = 0; i < helpText.length; i++) {
    //   let item = helpText[i];
    //   document.getElementById(item.id).onfocus = function() {
    //     showHelp(item.help);
    //   }
    // }

    // forEach()を使う例
    helpText.forEach(function(text) {
      document.getElementById(text.id).onfocus = function() {
        showHelp(text.help);
      }
    });
  }

  setupHelp();
})();
