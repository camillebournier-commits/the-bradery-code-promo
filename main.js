(function(){
  var main=document.getElementById('cta-main'), bar=document.getElementById('floating');
  if(!('IntersectionObserver' in window)||!main||!bar) return;
  new IntersectionObserver(function(e){
    bar.classList.toggle('show',!e[0].isIntersecting);
  }).observe(main);
})();
