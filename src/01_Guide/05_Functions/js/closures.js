/* クロージャ */
(function(){
  var pet = function(name) { // 外側の関数は変数 "name" を定義
    var getName = function() {
      return name;  // 内側の関数は外側の関数の変数 "name" にアクセス可能
    }
    return getName; // 内側の関数を返すことで、外側の関数に公開する
  }
  myPet = pet('Vivie');

  console.log(myPet()); // "Vivie"

  // 外側の関数の内部にある変数を操作するメソッドを含む、オブジェクトを返すことができる
  var createPet = function(name) {
    var sex;

    return {
      setName: function(newName) {
        name = newName;
      },

      getName: function() {
        return name;
      },

      getSex: function() {
        return sex;
      },

      setSex: function(newSex) {
        if (
          typeof newSex === 'string'
          && (
            newSex.toLowerCase() === 'male'
            || newSex.toLowerCase() === 'female'
          )
        ) {
          sex = newSex;
        }
      }
    }
  }

  var pet = createPet('Vivie');
  console.log(pet.getName()); // Vivie

  pet.setName('Oliver');
  pet.setSex('male');
  console.log(pet.getSex()); // male
  console.log(pet.getName()); // Oliver
})();
