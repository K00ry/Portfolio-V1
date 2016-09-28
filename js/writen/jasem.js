define(['tweenlite','scrollto'],function(TweenLite,scrollTo){



	var jasem = document.getElementById('port-link'),
 abbas = document.getElementById('contact');

jasem.onclick = function(e) {
    e.preventDefault();

  TweenLite.to(window, 1, {scrollTo:abbas});
  };
});