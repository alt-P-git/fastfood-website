var t = 0;
  function togglefunc() {
      if(t === 0){
        t=1;
      var x = document.getElementById("pizzalistdiv");
      x.style.display = "block";
      var x = document.getElementById("burgerlistdiv");
      x.style.display = "block";
      var x = document.getElementById("sandwichlistdiv");
      x.style.display = "block";
      var x = document.getElementById("softdrinklistdiv");
      x.style.display = "block";
      var x = document.getElementById("combolistdiv");
      x.style.display = "block";
      var x = document.getElementById("touchscreenmode");
      x.style.display = "block";
      var x = document.getElementById("togglesectiondefault");
      x.style.display = "block";
      var x = document.getElementById("defaultmode");
      x.style.display = "none";
      var x = document.getElementById("togglesection");
      x.style.display = "none";}
      else{
        t=0;
        var x = document.getElementById("pizzalistdiv");
      x.style.display = "none";
      var x = document.getElementById("burgerlistdiv");
      x.style.display = "none";
      var x = document.getElementById("sandwichlistdiv");
      x.style.display = "none";
      var x = document.getElementById("softdrinklistdiv");
      x.style.display = "none";
      var x = document.getElementById("combolistdiv");
      x.style.display = "none";
      var x = document.getElementById("touchscreenmode");
      x.style.display = "none";
      var x = document.getElementById("togglesectiondefault");
      x.style.display = "none";
      var x = document.getElementById("defaultmode");
      x.style.display = "block";
      var x = document.getElementById("togglesection");
      x.style.display = "block";
      }
  }

function showpizza() {
    var x = document.getElementById("pizzalistdiv");
      x.style.display = "block";
  }
  function hidepizza() {
    if(t === 0){var x = document.getElementById("pizzalistdiv");
      x.style.display = "none";}
  }

  function showburger() {
    var x = document.getElementById("burgerlistdiv");
      x.style.display = "block";
  }
  function hideburger() {
    if(t === 0){var x = document.getElementById("burgerlistdiv");
      x.style.display = "none";}
  }

  function showsandwich() {
    var x = document.getElementById("sandwichlistdiv");
      x.style.display = "block";
  }
  function hidesandwich() {
    if(t === 0){var x = document.getElementById("sandwichlistdiv");
      x.style.display = "none";}
  }

  function showsoftdrink() {
    var x = document.getElementById("softdrinklistdiv");
      x.style.display = "block";
  }
  function hidesoftdrink() {
  if(t === 0){var x = document.getElementById("softdrinklistdiv");
      x.style.display = "none";} 
  }

  function showcombo() {
    var x = document.getElementById("combolistdiv");
      x.style.display = "block";
  }
  function hidecombo() {
  if(t === 0){var x = document.getElementById("combolistdiv");
      x.style.display = "none";}
    
  }