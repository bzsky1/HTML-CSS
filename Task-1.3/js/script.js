function fun1() {
  
  function k(res) {
    if (res < 999) {
      return res;
    } else if (res > 999) {
      result = res / 1000 + "K";
      return result;
    };
  };

  var rng = document.getElementById('amount');
  var p = document.getElementById('res');
  p.innerHTML = k(rng.value);
};